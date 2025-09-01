<script setup lang="ts">
import {initDataUser, useSignal} from '@telegram-apps/sdk-vue'
const user = useSignal(initDataUser)

</script>

<template>
  <div>
    <h2>{{ user?.id }}</h2>
  </div>
</template>
