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

val connectionString: ConnectionString? = System.getenv("MONGODB_URI")?.let {
    ConnectionString("$it?retryWrites=false")
}

val client = if(connectionString != null) KMongo.createClient(connectionString).coroutine else KMongo.createClient().coroutine
val database = client.getDatabase(connectionString?.database ?: "Luskin")
val accounts = database.getCollection<Account>()
val sessions = database.getCollection<Session>()

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
             POST = Create account -> submit username, password, email and create id key
             GET =
             PATCH = Update account -> submit username, password, email and session key
             DELETE = Delete account -> submit session key
             */
            route(Account.path) {
                post {
                    val account = call.receive<Account>()
                    val found: List<Account> = accounts.find(Account::username eq account.username).toList()
                    if(found.isNotEmpty()) {
                        accounts.insertOne(account)
                        call.respond(HttpStatusCode.OK)
                    } else {
                        call.respond(HttpStatusCode.NotAcceptable)
                    }
                }
                patch {
                    val response: Pair<Session, Account> = call.receive<Pair<Session, Account>>()
                    val account: Account = response.second
                    val session: Session = response.first
                    val found: List<Session> = sessions.find(Session::username eq account.username).toList()
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
                    val response: Pair<Session, Account> = call.receive<Pair<Session, Account>>()
                    val account: Account = response.second
                    val session: Session = response.first
                    val found: List<Session> = sessions.find(Session::username eq account.username).toList()
                    if (found[0].session == session.session) {
                        accounts.deleteOne(Account::username eq account.username)
                        call.respond(HttpStatusCode.OK)
                    } else {
                        call.respond(HttpStatusCode.BadRequest)
                    }
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