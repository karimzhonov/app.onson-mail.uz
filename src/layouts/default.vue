<template>
    <div
        class="h-screen w-screen relative pt-3">
        <RouterView />
    </div>
</template>

<script setup lang="ts">
import { useAuth } from '@/hooks/account'
import { useTelegramUser } from '@/hooks/telegram'



const {mutate} = useAuth()
const {initData} = useTelegramUser()

const params =  new URLSearchParams(initData)

const data = Object.fromEntries(params.entries())
mutate(data)
</script>