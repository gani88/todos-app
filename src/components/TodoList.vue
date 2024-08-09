<template>
    <div>
        <h1>Todo List</h1>
        <ul>
            <li v-for="todo in todos" :key="todo.id">
                <todo-item :todo="todo" @update="updateTodo" @delete="deleteTodo" />
            </li>
        </ul>

        <button @click="prevpage" :disabled="page === 1">Previous</button>
        <button @click="nextpage">Next</button>
        <todo-form @add="addTodo" />
    </div>
</template>

<script>
import todoApi from '../api/todos.js'
import TodoItem from './TodoItem.vue'
import TodoForm from './TodoForm.vue'

export default {
    components: { TodoItem, TodoForm },
    data() {
        return {
            todos: [],
            page: 1,
            limit: 10
        }
    },

    methods: {
        async fetchTodos() {
            const response = await todoApi.getTodos(this.page, this.limit)
            this.todos = response.data;
        },
        async addTodo(todo) {
            const response = await todoApi.createTodo(todo)
            this.todos.unshift(response.data)
        },
        async updateTodo(id, updateTodo) {
            await todoApi.updateTodo(id, updateTodo)
            const index = this.todos.findIndex(todo => todo.id = id)

            if (index !== -1) {
                this.todos[index] = { ...this.todos[index], ...updateTodo }
            }
        },
        async deleteTodo(id) {
            await todoApi.deleteTodo(id)
            this.todos = this.todos.filter(todo => todo.id !== id)
        },
        prevpage() {
            if (this.page > 1) {
                this.page--
                this.fetchTodos()
            }
        },
        nextpage() {
            this.page++
            this.fetchTodos()
        }
    },
    mounted() {
        this.fetchTodos()
    }
}

</script>