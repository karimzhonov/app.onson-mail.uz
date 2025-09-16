<template>
  <div class="bg-surface-800 shadow rounded-2xl flex p-3 flex-row justify-between items-center">
    <UserInfo direction="row" />
    <div class="p-6 text-center">

      <p class="text-4xl font-extrabold text-primary">
        ${{ balance.toFixed(2) }}
      </p>
      <p class="text-surface-500 mt-1">{{ $t('Основной баланс') }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import UserInfo from "@/components/account/UserInfo.vue";

const balance = ref(10);
</script>

<style scoped>
/* кастом для приятного вида */
</style>
