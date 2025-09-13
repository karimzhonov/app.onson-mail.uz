<script setup lang="ts">
import IsTelegram from "@/components/layouts/IsTelegram.vue";
</script>

<template>
  <div class="bg-surface-900 text-surface-50 ">
    <IsTelegram>
      <RouterView />
    </IsTelegram>
  </div>
</template>

<style scoped>

</style>
