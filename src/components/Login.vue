<template>
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="login" class="login-form">
        <input v-model="username" placeholder="Username" required class="input-field" />
        <input v-model="password" type="password" placeholder="Password" required class="input-field" />
        <button type="submit" class="login-button">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginForm',
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        if (this.username === 'admin' && this.password === 'admin') {
          localStorage.setItem('user', JSON.stringify({ username: this.username }));
          this.$router.push('/');
        } else {
          alert('Invalid credentials');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: 100px auto;
    padding: 40px;
    border-radius: 15px;
    background-color: #2c3e50;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
    text-align: center;
    color: #ecf0f1;
  }
  
  .login-form {
    display: flex;
    flex-direction: column;
  }
  
  .input-field {
    margin-bottom: 20px;
    padding: 15px;
    border: none;
    border-radius: 8px;
    background-color: #34495e;
    color: #ecf0f1;
    font-size: 16px;
    transition: all 0.3s ease;
  }
  
  .input-field:focus {
    outline: none;
    box-shadow: 0 0 10px rgba(52, 152, 219, 0.5);
    transform: translateY(-2px);
  }
  
  .login-button {
    padding: 15px;
    background-color: #3498db;
    color: #ecf0f1;
    border: none;
    border-radius: 8px;
    font-size: 18px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .login-button:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(52, 152, 219, 0.4);
  }
  </style>