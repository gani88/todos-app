<template>
    <div>

        <input type="checkbox" :checked="todo.completed" @change="toggleComplete" />
        <span :class="{ completed: todo.completed }">
            {{ todo.title }}
        </span>
        <button @click="edit">
            Edit
        </button>
        <button @click="remove">
            Delete
        </button>

    </div>
</template>

<script>

export default {
    props: ['todo'],
    methods: {
        toggleComplete() {
            this.$emit('update', this.todo.id, { completed: !this.todo.completed })
        },
        edit() {
            const newTitle = prompt('Edit Todo:', this.todo.title)

            if (newTitle) {
                this.$emit('update', this.todo.id, { title: newTitle })
            }
        },
        remove() {
            if (confirm('Are you sure want to delete?')) {
                this.$emit('delete', this.todo.id)
            }
        }
    }
}

</script>

<style scoped>
.completed {
    text-decoration: line-through;
}
</style>