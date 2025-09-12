<script setup lang="ts">
import {onMounted, ref} from "vue";

const isTelegram = ref<boolean>(false)

onMounted(async () => {
  isTelegram.value = true
})
</script>

<template>
  <RouterView v-if="isTelegram" />
  <div v-else>
    Not telegram
  </div>
</template>

<style scoped>

</style>
