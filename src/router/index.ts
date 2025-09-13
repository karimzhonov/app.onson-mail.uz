import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layouts/default.vue'
import Index from '../pages/index.vue'
import { useTelegram } from '@/hooks/telegram'

const modules: Record<string, any> = import.meta.glob('./*.ts', { eager: true })

let routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                component: Index,
            }
        ]
    }
]
for (const path in modules) {
  if (path !== './index.ts') {
    routes = [...routes, ...modules[path].default]
  }
}

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const {tg} = useTelegram()
  
  if (to.path !== '/') {
    if (!tg.BackButton.isVisible) {
      tg.BackButton.show()
    }
  } else {
    tg.BackButton.hide()
  }
  next()
})

export default router