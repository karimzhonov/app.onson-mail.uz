import { createI18n } from 'vue-i18n'
import { useStorage } from '@vueuse/core'
import ru from '@/locales/ru.json'
import uz from '@/locales/uz.json'
import { App } from 'vue'

export const locales: Record<string, { code: string; name: string }> = {
    ru: {
        code: 'ru',
        name: 'Русский',
    },
    uz: {
        code: 'uz',
        name: 'O\'zbekcha',
    }
}

export const locale = useStorage<string>('locale', () => 'ru')

export default (app: App) => {
  const i18n = createI18n({
    locale: locale.value,
    fallbackLocale: 'ru',
    messages: {
      uz, ru
    },
    availableLocales: Object.keys(locales),
  })

  app.use(i18n)
}
