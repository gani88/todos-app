import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/components/Login.vue';
import TodoList from '@/components/TodoList.vue';

const routes = [
    {
        path: '/',
        name: 'TodoList',
        component: TodoList
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const publicPages = ['/login'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');

    if (authRequired && !loggedIn) {
        return next('/login');
    }

    next();
})

export default router;