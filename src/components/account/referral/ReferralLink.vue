<template>
  <div class="p-4 rounded-2xl shadow bg-surface-800 space-y-4">
    <h2 class="text-lg font-bold">🎁 Моя реферальная ссылка</h2>

    <InputText :value="referralLink" disabled fluid />

    <div class="flex flex-wrap gap-2">
      <!-- Поделиться в Telegram -->
      <Button
          fluid size="small"
          @click="shareReferral"
      >
        <Share />
        {{$t('Поделиться')}}
      </Button>

      <!-- Копировать -->
      <Button
          fluid size="small"
          @click="copyLink"
          severity="secondary"
      >
        <Copy v-if="!copied" />
        <LoaderCircle v-else class="animate-spin" />
        {{$t('Копировать')}}
      </Button>
    </div>
    <p class="text-surface-300">
      🎁 Приглашай друзей и получай бонус!
      За каждого приглашённого — +2$ на баланс 💵
    </p>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";
import {useTelegram, useTelegramUser} from "@/hooks/telegram.js";
import {Button, InputText} from "primevue";
import {Share, Copy, LoaderCircle} from 'lucide-vue-next'
const user = useTelegramUser()
const {tg} = useTelegram()

const referralLink = computed(() => `https://t.me/onson_mail_bot?start=${user.id}`);
const copied = ref(false)

// копирование ссылки
const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(referralLink.value);
    tg.showAlert("Ссылка скопирована ✅")
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 3000)
  } catch (err) {
    tg.showAlert("Ошибка при копировании");
  }
};
// поделиться в Telegram
const shareReferral = () => {
  const text = `🔥 Присоединяйся в Onson Mail Group! Вот моя реферальная ссылка, через эту ссылку вы получаете 2$ подарок: ${referralLink.value}`;

  if (tg?.shareMessage) {
    tg.shareMessage(text);
  } else {
    // fallback через openTelegramLink
    tg.openTelegramLink(`https://t.me/share/url?url=${encodeURIComponent(referralLink.value)}&text=${encodeURIComponent(text)}`);
  }
};
</script>