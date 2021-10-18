import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home', component: () => import('../components/HelloWorld.vue')
        },
        {
            path: '/about', component: () => import('../components/About.vue')
        }
    ]
})

export default router