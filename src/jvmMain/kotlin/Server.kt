import io.ktor.application.*
import io.ktor.features.*
import io.ktor.http.*
import io.ktor.http.content.*
import io.ktor.request.*
import io.ktor.response.*
import io.ktor.routing.*
import io.ktor.serialization.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import org.litote.kmongo.*
import org.litote.kmongo.coroutine.*
import org.litote.kmongo.reactivestreams.KMongo
import com.mongodb.ConnectionString
import java.security.MessageDigest

val connectionString: ConnectionString? = System.getenv("MONGODB_URI")?.let {
    ConnectionString("$it?retryWrites=false")
}

val client = if(connectionString != null) KMongo.createClient(connectionString).coroutine else KMongo.createClient().coroutine
val database = client.getDatabase(connectionString?.database ?: "Luskin")
val accounts = database.getCollection<Account>()
val sessions = database.getCollection<Session>()

fun String.sha256(): String {
    return hashString(this, "SHA-256")
}

private fun hashString(input: String, algorithm: String): String {
    return MessageDigest
        .getInstance(algorithm)
        .digest(input.toByteArray())
        .fold("", { str, it -> str + "%02x".format(it) })
}

fun main() {
    val port = System.getenv("PORT")?.toInt() ?: 8080
    embeddedServer(Netty, port) {
        install(ContentNegotiation) {
            json()
        }
        install(CORS) {
            method(HttpMethod.Get) // Selection of row or rows
            method(HttpMethod.Post) // Insertion of row
            method(HttpMethod.Delete) // Deletion of row
            method(HttpMethod.Put) // Complete update row
            method(HttpMethod.Patch) // Partial update row
            anyHost()
        }
        install(Compression) {
            gzip()
        }
        routing {
            /*
             Account
             GET = Get account -> submit username
             POST = Create account -> submit username, password, email and create id key
             PATCH = Update account -> submit username, password, email and session key
             DELETE = Delete account -> submit session key
             */
            route(Account.path) {
                get {
                   val account = call.receive<Account>()
                   val found = accounts.find(Account::username eq account.username).toList()
                   if(found.isNotEmpty()) {
                       call.respond(found[0])
                   } else {
                       call.respond(HttpStatusCode.BadRequest)
                   }
                }
                post {
                    val account = call.receive<Account>()
                    val found = accounts.find(Account::username eq account.username).toList()
                    if(found.isNotEmpty()) {
                        accounts.insertOne(account)
                        call.respond(HttpStatusCode.OK)
                    } else {
                        call.respond(HttpStatusCode.NotAcceptable)
                    }
                }
                patch {
                    val response = call.receive<Pair<Session, Account>>()
                    val account = response.second
                    val session = response.first
                    val found = sessions.find(Session::username eq account.username).toList()
                    if (found[0].session == session.session) {
                        accounts.updateOne(
                            Account::username eq account.username,
                            set(
                                Account::username setTo account.username,
                                Account::password setTo account.password,
                                Account::email setTo account.email
                            )
                        )
                        call.respond(HttpStatusCode.OK)
                    } else {
                        call.respond(HttpStatusCode.BadRequest)
                    }
                }
                delete {
                    val response = call.receive<Pair<Session, Account>>()
                    val account = response.second
                    val session = response.first
                    val found = sessions.find(Session::username eq account.username).toList()
                    if (found[0].session == session.session) {
                        accounts.deleteOne(Account::username eq account.username)
                        call.respond(HttpStatusCode.OK)
                    } else {
                        call.respond(HttpStatusCode.BadRequest)
                    }
                }
            }
            /*
             Session
             GET = Create session -> submit username or email and password
             PATCH = Update session -> submit session
             DELETE = Delete session -> submit session
             */
            route(Session.path) {
                get {
                    val account = call.receive<Account>()
                    var found = emptyList<Account>()
                    if (account.username != "") {
                        found = accounts.find(Account::username eq account.username).toList()
                    } else if (account.email != "") {
                        found = accounts.find(Account::email eq account.email).toList()
                    }
                    if (found.isNotEmpty()) {
                        if (found[0].username == account.username || found[0].email == account.email) {
                            // TODO: Add time to session key
                            val key = account.username.plus(account.password.plus(account.email))
                            val session = Session(key.sha256(), account.username)
                            sessions.insertOne(session)
                            call.respond(HttpStatusCode.OK)
                        }
                    } else {
                        call.respond(HttpStatusCode.BadRequest)
                    }
                }
                patch {
                    val session = call.receive<Session>()
                    var found = sessions.find(Session::username eq session.username).toList()
                    if(found.isNotEmpty()) {
                        if(found[0].session == session.session) {
                            var account = accounts.find(Account::username eq session.username).toList()[0]
                            if (account.username == "") {
                                call.respond(HttpStatusCode.BadRequest)
                            }
                            // TODO: Add time to session key
                            val key = account.username.plus(account.password.plus(account.email))
                            val newsession = Session(key.sha256(), account.username)
                            sessions.updateOne(
                                Session::username eq session.username,
                                set(
                                    Session::session setTo newsession.session
                                )
                            )
                            call.respond(HttpStatusCode.OK)
                        } else {
                            call.respond(HttpStatusCode.BadRequest)
                        }
                    } else {
                        call.respond(HttpStatusCode.BadRequest)
                    }
                }
                delete {
                    val session = call.receive<Session>()
                    sessions.deleteOne(Session::username eq session.username)
                    call.respond(HttpStatusCode.OK)
                }
            }
            get("/") {
                call.respondText(this::class.java.classLoader.getResource("index.html")!!.readText(), ContentType.Text.Html)
            }
            static("/static") {
                resources()
            }
        }
    }.start(wait = true)
}