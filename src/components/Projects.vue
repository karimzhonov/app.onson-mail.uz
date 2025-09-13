<script setup lang="ts">
import { useProjects } from '@/hooks/projects';

const projects = useProjects()

</script>

<template>
  <div class="grid grid-cols-3 gap-3">
    <router-link
        class="flex flex-col items-center justify-center aspect-video gap-3"
        v-for="menu in projects" :to="menu.link">
        <div class="size-12 flex justify-center items-center bg-primary-600 rounded-full">
          <component :is="menu.icon" />
        </div>
        <p class="text-sm">{{menu.label}}</p>
    </router-link>
  </div>
</template>

<style scoped>

</style>