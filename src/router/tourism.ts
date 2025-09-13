import DefaultLayout from '../layouts/default.vue'
import Tourism from '../pages/tourism/index.vue'

export default [
    {
        path: '/tourism',
        component: DefaultLayout,
        children: [
            {
                path: '/tourism',
                component: Tourism,
            },
        ]
    }
]