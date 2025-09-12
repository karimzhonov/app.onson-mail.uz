<script setup lang="ts">
import {bottomMenu} from "@/components/layouts/bottom-menu";
</script>

<template>
  <div class="flex flex-row justify-around fixed bottom-0 w-full p-2 border-t border-t-primary bg-surface-900">
    <router-link
        v-for="item in bottomMenu"
        :to="item.link"
        class="flex flex-col items-center"
        :class="{'text-primary': item.link === '/' ? item.link == $route.path : $route.path.startsWith(item.link)}"
    >
      <component :is="item.icon" />
      {{ item.label }}
    </router-link>
  </div>
</template>

<style scoped>

</style>