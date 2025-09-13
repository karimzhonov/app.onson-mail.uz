import Layout from '@/layouts/account.vue'
import Account from '@/pages/account/index.vue'
import Languages from '@/pages/account/languages.vue'


export default [
    {
        path: '/account',
        component: Layout,
        children: [
            {
                path: '/account',
                component: Account
            },
            {
                path: '/account/languages',
                component: Languages
            }
        ]
    }
]