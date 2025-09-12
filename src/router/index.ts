import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layouts/default.vue'
import Index from '../pages/index.vue'
import Cargo from '../pages/cargo/index.vue'
import Tourism from '../pages/tourism/index.vue'
import Market from '../pages/market/index.vue'
import Account from '../pages/account/index.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: DefaultLayout,
            children: [
                {
                    path: '/',
                    component: Index,
                },
                {
                    path: '/cargo',
                    component: Cargo,
                },
                {
                    path: '/tourism',
                    component: Tourism,
                },
                {
                    path: '/market',
                    component: Market,
                },
                {
                    path: '/account',
                    component: Account
                }
            ]
        }
    ]
})