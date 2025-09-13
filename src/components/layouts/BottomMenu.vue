<script setup lang="ts">
import {computed} from "vue";
import {Home, User} from "lucide-vue-next";
import { useProjects } from "@/hooks/projects";

const projects = useProjects()

const bottomMenu = computed(() => [
    {
      label: "Главная",
      icon: Home,
      link: '/'
    },
    ...projects,
    {
      label: "Профиль",
      icon: User,
      link: '/account'
    }
])
</script>

<template>
  <div class="flex flex-row justify-around fixed bottom-0 w-full p-2 pb-6 border-t border-t-primary bg-surface-900">
    <router-link
        v-for="item in bottomMenu"
        :to="item.link"
        class="flex flex-col items-center"
        :class="{'text-primary': item.link === '/' ? item.link == $route.path : $route.path.startsWith(item.link)}"
    >
      <component :is="item.icon" :size="20" />
      <p class="text-sm">{{ item.label }}</p>
    </router-link>
  </div>
</template>

<style scoped>

</style>