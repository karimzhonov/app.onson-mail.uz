import Layout from '../layouts/default.vue'
import Cargo from '../pages/cargo/index.vue'

export default [
    {
        path: '/cargo',
        component: Layout,
        children: [
            {
                path: '/cargo',
                component: Cargo,
            },
        ]
    }
]