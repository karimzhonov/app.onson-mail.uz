// https://nuxt.com/docs/api/configuration/nuxt-config
import theme from './assets/theme'


export default defineNuxtConfig({
  ssr: false,
  modules: ['@nuxtjs/tailwindcss', '@primevue/nuxt-module'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vite: {
    server: {
      allowedHosts: [
        'b0f41c11d884.ngrok-free.app'
      ]
    },
    esbuild: {
      legalComments: 'none'
    },
    build: {
      minify: false, // ❌ отключаем esbuild minifier
      rollupOptions: {
        // если нужно исключить пакеты
        external: ['@telegram-apps/sdk', '@telegram-apps/sdk-vue']
      }
    }
  },
  nitro: {
    minify: false
  },
  primevue: {
    autoImport: true,
    options: {
      ripple: true,
      theme: theme,
      locale: {
        fileSizeTypes: [],
        firstDayOfWeek: 1, // 0 = Sunday, 1 = Monday
        dayNames: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        dayNamesShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
        today: 'Сегодня',
        clear: 'Очистить'
      }
    },
  },
})