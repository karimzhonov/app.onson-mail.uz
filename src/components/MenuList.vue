<script setup lang="ts">
import {Badge, Tag} from "primevue";
import {ChevronRight} from 'lucide-vue-next'
import {MenuData} from "@/types/menu-list";

defineProps<{
  items: MenuData[]
}>()

</script>

<template>
  <div class="flex flex-col gap-5">
    <div v-for="item in items">
      <div class="flex flex-row items-center justify-between px-2 py-1.5">
        <div class="flex flex-row gap-3">
          <component v-if="item.icon" :is="item.icon" />
          <p v-if="item.label">{{item.label}}</p>
        </div>
        <div class="flex flex-row gap-2 items-center">
          <p v-if="item.value">{{item.value}}</p>
          <Tag v-if="item.tag" :value="item.tag" severity="danger" rounded :pt="{root: {class: '!py-0 !px-1'}, label: {class: '!text-xs'}}" />
          <Badge v-if="item.badge" size="small" rounded>{{item.badge}}</Badge>
          <ChevronRight v-if="item.chevron" />
        </div>
      </div>

      <!--      Items      -->
      <div class="flex flex-col gap-3">
        <router-link @click="menu.command" class="flex flex-row bg-surface-800 items-center justify-between rounded-lg px-2 py-1.5" v-for="menu in item.items" :to="menu.link ?? '#'">
          <div class="flex flex-row items-center gap-3">
            <div v-if="menu.icon" class="size-8 flex justify-center items-center bg-primary-600 rounded-full">
              <component :is="menu.icon" :size="16" />
            </div>
            <p>{{menu.label}}</p>
          </div>
          <div class="flex flex-row gap-2 items-center">
            <p v-if="menu.value">{{menu.value}}</p>
            <Badge v-if="menu.tag" :value="menu.tag" size="small" severity="danger" />
            <Badge v-if="menu.badge" size="small" rounded>{{menu.badge}}</Badge>
            <ChevronRight v-if="menu.chevron" />
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>