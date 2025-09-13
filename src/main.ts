import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import theme from './assets/theme'
import App from './App.vue'
import router from './router'
import {useTelegram} from "./hooks/telegram";
import {setupI18n} from './i18n'
import './assets/css/style.css'

const {init} = useTelegram()
init()

const i18n = setupI18n()

const app = createApp(App)

app.use(i18n)
app.use(router)
app.use(PrimeVue, {
    theme: theme
})
app.mount('#app')
