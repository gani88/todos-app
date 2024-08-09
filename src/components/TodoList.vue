<template>
    <div class="todo-list-container">
      <h1>Todo List</h1>
      <button @click="logout" class="logout-button">Logout</button>
      <ul class="todo-list">
        <li v-for="todo in todos" :key="todo.id">
          <todo-item :todo="todo" @update="updateTodo" @delete="deleteTodo" />
        </li>
      </ul>
      <div class="pagination">
        <button @click="prevpage" :disabled="page === 1" class="page-button">Previous</button>
        <button @click="nextpage" class="page-button">Next</button>
      </div>
      <todo-form @add="addTodo" />
    </div>
  </template>
  
  <script>
  import TodoItem from './TodoItem.vue';
  import TodoForm from './TodoForm.vue';
  import todoApi from '../api/todos.js';
  
  export default {
    components: { TodoItem, TodoForm },
    data() {
      return {
        todos: [],
        page: 1,
        limit: 10
      };
    },
    methods: {
      async fetchTodos() {
        const response = await todoApi.getTodos(this.page, this.limit);
        this.todos = response.data;
      },
      async addTodo(todo) {
        const response = await todoApi.createTodo(todo);
        this.todos.unshift(response.data);
      },
      async updateTodo(id, updateTodo) {
        await todoApi.updateTodo(id, updateTodo);
        const index = this.todos.findIndex(todo => todo.id === id);
  
        if (index !== -1) {
          this.todos[index] = { ...this.todos[index], ...updateTodo };
        }
      },
      async deleteTodo(id) {
        await todoApi.deleteTodo(id);
        this.todos = this.todos.filter(todo => todo.id !== id);
      },
      prevpage() {
        if (this.page > 1) {
          this.page--;
          this.fetchTodos();
        }
      },
      nextpage() {
        this.page++;
        this.fetchTodos();
      },
      logout() {
        localStorage.removeItem('user');
        this.$router.push('/login');
      }
    },
    mounted() {
      this.fetchTodos();
    }
  };
  </script>
  
  <style scoped>
  .todo-list-container {
    max-width: 800px;
    margin: 50px auto;
    padding: 30px;
    background-color: #ecf0f1;
    border-radius: 15px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    position: relative;
  }
  
  h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
    font-size: 2.5em;
  }
  
  .todo-list {
    list-style: none;
    padding: 0;
  }
  
  .pagination {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
  }
  
  .page-button {
    padding: 12px 24px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 16px;
  }
  
  .page-button:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(52, 152, 219, 0.4);
  }
  
  .page-button[disabled] {
    background-color: #bdc3c7;
    cursor: not-allowed;
  }
  
  .logout-button {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 10px 20px;
    background-color: #e74c3c;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 14px;
  }
  
  .logout-button:hover {
    background-color: #c0392b;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(231, 76, 60, 0.4);
  }
  </style>