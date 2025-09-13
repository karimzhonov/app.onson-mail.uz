import Market from '@/pages/market/index.vue'
import DefaultLayout from '@/layouts/default.vue'


export default [
    {
        path: '/market',
        component: DefaultLayout,
        children: [
            {
                path: '/market',
                component: Market,
            }
        ]
    }
]