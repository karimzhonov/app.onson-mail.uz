<template>
    <div class="flex justify-center items-center gap-3" :class="directionClass">
        <Avatar :image="user.photo_url" size="xlarge" shape="circle" />
        <div class="flex justify-center flex-col text-center">
          <h2 class="text-xl">{{ user.first_name }} {{ user.last_name }}</h2>
          <p v-if="user.username" class="text-xs">@{{ user.username }}</p>
        </div>
    </div>
</template>
<script lang="ts" setup>
import {useTelegramUser} from "@/hooks/telegram";
import {Avatar} from "primevue";
import {computed} from "vue";

const user = useTelegramUser()

const {
  direction = 'column'
} = defineProps<{
  direction?: 'column' | 'row';
}>()

const directionClass = computed(() => direction === 'column' ? 'flex-col' : 'flex-row');
</script>