import { createI18n } from 'vue-i18n'
import { useStorage } from '@vueuse/core'
import ru from './locales/ru.json'
import uz from './locales/uz.json'

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

export const useLocale = useStorage<string>('locale', () => 'ru')

export function setupI18n() {
  return createI18n({
    locale: useLocale.value,
    fallbackLocale: 'ru',
    messages: {
      uz, ru
    },
    availableLocales: Object.keys(locales),
  })
}
