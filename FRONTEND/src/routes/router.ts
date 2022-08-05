import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Projects from '../pages/Projects.vue'
import Contact from '../pages/Contact.vue'


// ROUTER
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: "Home",
            component: Home
        },
        {
            path: '/Projects',
            name: "Projects",
            component: Projects
        },
        {
          path: '/Contact',
          name: "Contact",
          component: Contact
        }
    ]
})

export default router;