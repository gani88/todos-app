<template>
    <form @submit.prevent="addTodo" class="todo-form">
      <input v-model="newTodo" placeholder="Add new todo" class="input-field" />
      <button type="submit" class="add-button">Add Todo</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newTodo: ''
      };
    },
    methods: {
      addTodo() {
        if (this.newTodo.trim()) {
          this.$emit('add', { title: this.newTodo, completed: false });
          this.newTodo = '';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .todo-form {
    margin-top: 40px;
    display: flex;
    margin-bottom: 20px;
  }
  
  .input-field {
    flex: 1;
    padding: 15px;
    margin-right: 15px;
    border: none;
    border-radius: 8px;
    background-color: #fff;
    font-size: 16px;
    color: #2c3e50;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
  
  .input-field:focus {
    outline: none;
    box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
    transform: translateY(-2px);
  }
  
  .add-button {
    padding: 15px 25px;
    background-color: #2ecc71;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .add-button:hover {
    background-color: #27ae60;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(46, 204, 113, 0.4);
  }
  </style>