<template>
    <div
        class="h-screen w-screen relative"
        :class="{'pt-12': isFullscreen, 'pt-3': !isFullscreen}">
        
        <UserInfo />
        <RouterView />
        
    </div>
</template>
<script setup lang="ts">
import UserInfo from "@/components/account/UserInfo.vue";
import {useTelegram} from "@/hooks/telegram";

const {isFullscreen} = useTelegram()
</script>