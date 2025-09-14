import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/style.css'
import {setupPlugins} from './plugins'

const app = createApp(App)
setupPlugins(app)
app.use(router)
app.mount('#app')
