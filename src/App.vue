<script setup lang="ts">
import IsTelegram from "@/components/layouts/IsTelegram.vue";
</script>

<template>
  <div class="bg-surface-900 text-surface-50 safe">
    <IsTelegram>
      <RouterView />
    </IsTelegram>
  </div>
</template>
<style>
.safe {
  padding-top: var(--tg-safe-top);
  padding-bottom: var(--tg-safe-bottom);
}
</style>