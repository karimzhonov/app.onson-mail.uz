import { App } from "vue";
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import theme from '@/assets/theme'


export default (app: App) => {
    app.use(PrimeVue, {
        theme: theme
    })
    app.use(ToastService)
}