import axios from 'axios'
import { App } from 'vue';
import { token } from '@/composables/token'


const instance = axios.create({
    baseURL: 'https://api.onson-mail.uz/api'
})

instance.interceptors.request.use((config) => {
    if (token.value.access) {
        config.headers.Authorization = `Bearer ${token.value.access}`
    }
    return config
})

instance.interceptors.response.use(
    response => response,
    async (error) => {
        console.error(error)
    }
)

export const useApi = () => {
    return instance
}


export default (app: App) => {
    app.config.globalProperties.$axios = instance
}
