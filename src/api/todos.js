import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

export default {
    getTodos(page = 1, limit = 10) {
        return api.get(`/todos?_page=${page}&_limit=${limit}`)
    },
    createTodo(todo) {
        return api.post('/todos', todo)
    },
    updateTodo(id, todo) {
        return api.put(`/todos/${id}`, todo)
    },
    deleteTodo(id) {
        return api.delete(`/todos/${id}`)
    }
}