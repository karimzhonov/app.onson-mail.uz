<script setup lang="ts">
import {Home, User, Truck, ShoppingCart} from "lucide-vue-next";
import QRCodeScaner from "./QRCodeScaner.vue";

const leftBottomMenu = [
    {
      label: "Главная",
      icon: Home,
      link: '/'
    },
    {
      label: "Карго",
      icon: Truck,
      link: '/cargo',
    }
]


const rightBottomMenu = [
    {
      label: "Маркет",
      icon: ShoppingCart,
      link: '/market',
    },
    {
      label: "Профиль",
      icon: User,
      link: '/account'
    }
]
</script>

<template>
  <div class="flex flex-row justify-around fixed bottom-0 w-full z-50">
    <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
    <div class="w-full flex justify-between items-center p-3 pb-6 z-10 rounded-t-2xl shadow-lg p-3 relative">
      <div class="flex flex-row justify-around w-[40%]">
        <router-link
          v-for="item in leftBottomMenu"
          :to="item.link"
          class="flex flex-col items-center relative"
          :class="{'text-primary': item.link === '/' ? item.link == $route.path : $route.path.startsWith(item.link)}"
        >
          <component :is="item.icon" />
          <p v-if="item.label" class="text-sm">{{ $t(item.label) }}</p>
        </router-link>
      </div>

      <q-r-code-scaner />

      <div class="flex flex-row justify-around w-[40%]">
        <router-link
            v-for="item in rightBottomMenu"
            :to="item.link"
            class="flex flex-col items-center relative"
            :class="{'text-primary': item.link === '/' ? item.link == $route.path : $route.path.startsWith(item.link)}"
        >
          <component :is="item.icon" />
          <p v-if="item.label" class="text-sm">{{ $t(item.label) }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>