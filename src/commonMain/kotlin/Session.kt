import kotlinx.serialization.Serializable

@Serializable
data class Session(val session: String, val username: String) {
    val id: Int = hashCode()
    companion object {
        const val path = "/session"
    }

}