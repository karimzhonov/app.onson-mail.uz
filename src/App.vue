<script setup lang="ts">
import IsTelegram from "@/components/layouts/IsTelegram.vue";
import { Toast } from "primevue";
</script>

<template>
  <Toast />
  <div class="bg-surface-900 text-surface-50 safe">
    <IsTelegram>
      <RouterView />
    </IsTelegram>
  </div>
</template>
<style>
.safe {
  padding-top: 60px;
}
</style>