import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import { watch } from "vue";

import App from "./App.vue";
import Home from "./views/Home.vue";
import NewLeague from "./views/NewLeague.vue";
import Dashboard from "./views/Dashboard.vue";


const pinia = createPinia();
const app = createApp(App);


if(localStorage.getItem("store")) {
    pinia.state.value = JSON.parse(localStorage.getItem("store"));
  } else {
    console.log()
  }
  
watch(pinia.state, (state) => {
    localStorage.setItem("store", JSON.stringify(state))
}, { deep: true })

const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/newleague", name: "NewLeague", component: NewLeague },
    { path: "/dashboard", name: "Dashboard", component: Dashboard }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

app.use(router);
app.mount("#app");
app.use(pinia);