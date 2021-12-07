import kotlinx.serialization.Serializable

@Serializable
data class Account(val username: String, val password: String, val email: String) {
    val id: Int = hashCode()
    companion object {
        const val path = "/account"
    }
}