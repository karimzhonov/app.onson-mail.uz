<script setup lang="ts">
import {isTMA} from "@/hooks/telegram";
import {ref} from "vue";
import BottomMenu from "@/components/layouts/BottomMenu.vue";

const copied = ref(false)
const BOT_USERNAME = 'onson_mail_bot' // <-- замените на своего бота
const webAppUrl = import.meta.env.VITE_WEBAPP_URL ?? '' // опционально: публичный URL
const botDeepLink = `https://t.me/${BOT_USERNAME}`
const isTelegram = import.meta.env.DEV ? true : isTMA()

function copyOpenInstructions() {
  const text = `Откройте Telegram и нажмите на бота: https://t.me/${BOT_USERNAME}\nИли откройте Web App: ${webAppUrl}`
  navigator.clipboard
      ?.writeText(text)
      .then(() => {
        copied.value = true
        setTimeout(() => (copied.value = false), 2500)
      })
      .catch(() => {
        // ignore
      })
}
</script>

<template>
<div>
  <div v-if="isTelegram" >
    <slot />
    <BottomMenu />
  </div>

  <div v-else class="w-screen h-screen max-w-md p-8 text-center m-auto">
    <img src="/logo.png" alt="Telegram" class="mx-auto w-24 h-24 mb-4" />
    <h1 class="text-2xl font-semibold mb-2">Пожалуйста, откройте через Telegram</h1>

    <p class="text-sm text-slate-600 mb-6">
      Это приложение работает только внутри Telegram Web Apps. Пожалуйста, откройте его через бота
      или через кнопку в чате.
    </p>

    <div class="flex flex-col gap-3">
      <!-- Кнопка deep link на бота -->
      <a
          :href="botDeepLink"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#0088cc] text-white font-medium hover:opacity-95"
      >
        Открыть в Telegram
      </a>

      <!-- Обычный URL (если нужен) -->
      <a
          v-if="webAppUrl"
          :href="webAppUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm text-slate-500 underline"
      >
        Или откройте этот URL в мобильном браузере Telegram
      </a>

      <button @click="copyOpenInstructions" type="button" class="mt-2 text-xs text-slate-500">
        Скопировать инструкции
      </button>

      <p v-if="copied" class="text-xs text-green-600">Скопировано в буфер обмена ✅</p>
    </div>

    <p class="text-xs text-slate-400 mt-6">
      Примечание: если вы уже открывали, но видите этот экран — браузер мог блокировать iframe. Попробуйте открыть
      через кнопку в чате бота (inline/web app) или используйте Telegram мобильное приложение.
    </p>
  </div>
</div>
</template>

<style scoped>

</style>