<script setup lang="ts">

import UserInfo from "@/components/account/UserInfo.vue";
import ReferralLink from "@/components/account/referral/ReferralLink.vue";
import ReferralList from "@/components/account/referral/ReferralList.vue";
</script>

<template>
  <div class="flex flex-col gap-4">
    <UserInfo />
    <ReferralLink />
    <ReferralList />
  </div>
</template>

<style scoped>

</style>