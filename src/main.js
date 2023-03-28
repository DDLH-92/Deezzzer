import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from "@tanstack/vue-query"
import 'animate.css';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

import App from './App.vue'
import router from './router'

import './assets/base.css'

const app = createApp(App)



app.use(pinia)
app.use(router)
app.use(VueQueryPlugin)

app.mount('#app')
