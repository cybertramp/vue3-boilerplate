import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '/src/components/Home.vue'

const routes = [
    { path: '/', nane:'Home', component: Home },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })

export default router