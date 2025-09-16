<script setup lang="ts">
import Balance from '@/components/account/balance/Balance.vue'
import BalanceHistory from "@/components/account/balance/BalanceHistory.vue";
</script>

<template>
<div class="flex flex-col gap-3">
  <h2 class="text-center text-lg">{{$t('Мой баланс')}}</h2>
  <Balance />
  <BalanceHistory />
</div>
</template>

<style scoped>

</style>