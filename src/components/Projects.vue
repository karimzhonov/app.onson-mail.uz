<script setup lang="ts">
import { useProjects } from '@/hooks/projects';

const projects = useProjects()

</script>

<template>
  <div class="grid grid-cols-4 gap-3">
    <router-link
        class="flex flex-col items-center bg-surface-800 justify-center border border-primary rounded-lg aspect-video"
        v-for="menu in projects" :to="menu.link">
        <component :is="menu.icon" :size="18" />
        <p class="text-sm">{{menu.label}}</p>
    </router-link>
  </div>
</template>

<style scoped>

</style>