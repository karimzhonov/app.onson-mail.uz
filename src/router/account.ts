import Layout from '@/layouts/default.vue'
import Account from '@/pages/account/index.vue'
import Languages from '@/pages/account/languages.vue'
import Referral from '@/pages/account/referral.vue'
import Balance from '@/pages/account/balance.vue'

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
            },
            {
                path: '/account/referral',
                component: Referral
            },
            {
                path: '/account/balance',
                component: Balance
            }
        ]
    }
]