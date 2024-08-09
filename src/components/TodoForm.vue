<template>

    <form @submit.prevent="addTodo">
        <input v-model="newTodo" placeholder="Add new todo" />
        <button type="submit">
            Add Todo
        </button>
    </form>

</template>

<script>

export default {
    data() {
        return {
            newTodo: ''
        }
    },
    methods: {
        addTodo() {
            if (this.newTodo.trim()) {
                this.$emit('add', { title: this.newTodo, completed: false })
                this.newTodo = ''
            }
        }
    }
}

</script>