<template>
    <div class="todo-item">
      <input type="checkbox" :checked="todo.completed" @change="toggleComplete" />
      <span v-if="!isEditing" :class="{ completed: todo.completed }">{{ todo.title }}</span>
      <button @click="toggleEdit" class="edit-button">Edit</button>
      <button @click="remove" class="delete-button">Delete</button>
  
      <!-- Edit Popup -->
      <div v-if="isEditing" class="edit-popup">
        <div class="edit-popup-content">
          <input v-model="editedTitle" @keyup.enter="saveEdit" class="edit-field" />
          <button @click="saveEdit" class="save-button">Save</button>
          <button @click="cancelEdit" class="cancel-button">Cancel</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['todo'],
    data() {
      return {
        isEditing: false,
        editedTitle: this.todo.title
      };
    },
    methods: {
      toggleComplete() {
        this.$emit('update', this.todo.id, { completed: !this.todo.completed });
      },
      toggleEdit() {
        this.isEditing = true;
        this.editedTitle = this.todo.title;
      },
      saveEdit() {
        if (this.editedTitle.trim() !== this.todo.title) {
          this.$emit('update', this.todo.id, { title: this.editedTitle.trim() });
        }
        this.isEditing = false;
      },
      cancelEdit() {
        this.isEditing = false;
        this.editedTitle = this.todo.title;
      },
      remove() {
        if (confirm('Are you sure you want to delete?')) {
          this.$emit('delete', this.todo.id);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .todo-item {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    padding: 15px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
  
  .todo-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  .completed {
    text-decoration: line-through;
    color: #95a5a6;
  }
  
  input[type="checkbox"] {
    margin-right: 15px;
    transform: scale(1.2);
  }
  
  span {
    flex: 1;
    font-size: 18px;
    color: #34495e;
  }
  
  .edit-button,
  .delete-button {
    margin-left: 10px;
    padding: 8px 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.3s ease;
  }
  
  .edit-button {
    background-color: #3498db;
    color: #fff;
  }
  
  .edit-button:hover {
    background-color: #2980b9;
  }
  
  .delete-button {
    background-color: #e74c3c;
    color: #fff;
  }
  
  .delete-button:hover {
    background-color: #c0392b;
  }
  
  .edit-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .edit-popup-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
  
  .edit-field {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #bdc3c7;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  
  .save-button,
  .cancel-button {
    padding: 8px 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.3s ease;
    margin-right: 10px;
  }
  
  .save-button {
    background-color: #2ecc71;
    color: #fff;
  }
  
  .save-button:hover {
    background-color: #27ae60;
  }
  
  .cancel-button {
    background-color: #95a5a6;
    color: #fff;
  }
  
  .cancel-button:hover {
    background-color: #7f8c8d;
  }
  </style>