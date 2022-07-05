import axios from "axios";

// Definimos los requests (llamadas a APIs)
export function getTodos() {
    return axios.get("https://62c343ea876c4700f539c147.mockapi.io/api/todos")
}