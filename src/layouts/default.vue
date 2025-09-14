<template>
    <div
        class="h-screen w-screen relative">
        <div class="h-full w-full" v-if="isAuth"> 
            <RouterView class="p-3" />
            <BottomMenu />
        </div>
        <div v-else class="w-full h-full mt-[100px]">
            <img src="/logo.png" width="100" class="blink-fade mx-auto" />
        </div>
    </div>
</template>

<script setup lang="ts">
import BottomMenu from '@/components/layouts/BottomMenu.vue'
import { useAuth } from '@/hooks/account'
import { useTelegramUser } from '@/hooks/telegram'
import { ref } from 'vue'

const isAuth = ref(false)

const {mutate} = useAuth({
    onSuccess: () => {
        isAuth.value = true
    }
})
const {initData} = useTelegramUser()

mutate({initData})
</script>
<style>
.blink-fade {
  animation: blink-fade 1.2s ease-in-out infinite;
}

@keyframes blink-fade {
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .blink-fade { animation: none; }
}
</style>