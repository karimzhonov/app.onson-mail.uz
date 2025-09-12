<template>
  <div class="flex flex-col gap-3 p-3">
    <UserInfo />
    <Settings />
  </div>
</template>
<script setup lang="ts">
import UserInfo from '@/components/account/UserInfo.vue';
import Settings from "@/components/account/Settings.vue";
</script>