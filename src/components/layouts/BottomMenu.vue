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
  <div class="flex flex-row justify-around fixed bottom-0 w-full z-50">
    <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
    <div class="w-full flex justify-around items-center p-3 pb-6 z-10
              border-t border-primary-900 
              rounded-t-2xl shadow-lg p-3">
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
  </div>
</template>

<style scoped>

</style>