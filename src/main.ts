import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import theme from './assets/theme.ts'
import App from './App.vue'
import { router } from './router'
import './assets/css/style.css'
import {useTelegram} from "./hooks/telegram.ts";

const {init} = useTelegram()
init()

const app = createApp(App)
app.use(router)
app.use(PrimeVue, {
    theme: theme
})
app.mount('#app')
