import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import NewLeague from './views/NewLeague.vue'
import Dashboard from './views/Dashboard.vue'

const app = createApp(App)
const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/newleague', name: 'NewLeague', component: NewLeague },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

app.use(createPinia())
app.use(router)
app.mount('#app')
