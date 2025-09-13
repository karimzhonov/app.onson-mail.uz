<template>
  <div class="flex flex-col gap-3 p-3">
    <UserInfo />
    <Settings />
  </div>
</template>
<script setup lang="ts">
import Settings from "@/components/account/settings/index.vue";
import UserInfo from "@/components/account/UserInfo.vue";
</script>