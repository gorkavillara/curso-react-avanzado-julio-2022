import axios from "axios"

export function getUser() {
    return axios.get("https://62c343ea876c4700f539c147.mockapi.io/api/users")
}