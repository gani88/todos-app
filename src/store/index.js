import { createStore } from "vuex";
import todoApi from "../api/todos";

export default createStore({
    state: {
        todos: [],
        page: 1,
        limit: 10
    },
    mutations: {
        setTodos(state, todos) {
            state.todos = todos
        },
        addTodo(state, todo) {
            state.todos.unshift(todo)
        },
        updateTodo(state, { id, updates }) {
            const index = state.todos.findIndex(todo => todo.id === id)
            if (index !== -1) {
                state.todos[index] = { ...state.todos[index], ...updates }
            }
        },
        removeTodo(state, id) {
            state.todos = state.todos.filter(todo => todo.id !== id)
        },
        setPage(state, page) {
            state.page = page
        }
    },
    actions: {
        async fetchTodos({ commit, state }) {
            const response = await todoApi.getTodos(state.page, state.limit)
            commit('setTodos', response.data)
        },
        async addTodo({ commit }, todo) {
            const response = await todoApi.createTodo(todo)
            commit('addTodo', response.data)
        },
        async updateTodo({ commit }, { id, updates }) {
            await todoApi.updateTodo(id, updates)
            commit('updateTodo', { id, updates })
        },
        async deleteTodo({ commit }, id) {
            await todoApi.deleteTodo(id)
            commit('removeTodo', id)
        }
    }
})