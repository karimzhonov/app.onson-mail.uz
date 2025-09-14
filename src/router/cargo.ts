import Layout from '../layouts/default.vue'
import Cargo from '../pages/cargo/index.vue'
import Passport from '@/pages/cargo/passport/index.vue'

export default [
    {
        path: '/cargo',
        component: Layout,
        children: [
            {
                path: '/cargo',
                component: Cargo,
            },
            {
                path: '/cargo/passport',
                component: Passport,
            },
        ]
    }
]