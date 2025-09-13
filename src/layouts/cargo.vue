<template>
    <div
        class="h-screen w-screen relative"
        :class="{'pt-16': isFullscreen, 'pt-3': !isFullscreen}">
        <RouterView />
    </div>
</template>
<script setup lang="ts">
import {useTelegram} from "@/hooks/telegram";

const {isFullscreen} = useTelegram()
</script>