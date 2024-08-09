<template>
    <div>
        <h2>Login</h2>
        <form @submit.prevent="login">
            <input v-model="username" placeholder="Username" required>
            <input v-model="password" type="password" placeholder="Password" required>
            <button type="submit">
                Login
            </button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        login() {
            if (this.username && this.password) {
                localStorage.setItem('user', JSON.stringify({ username: this.username }))
                this.$router.push('/')
            }
        }
    }
}
</script>