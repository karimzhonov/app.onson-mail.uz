<template>
    <div
        class="h-screen w-screen bg-surface-900 text-surface-50 relative"
        :class="{'pt-12': isFullscreen, 'pt-3': !isFullscreen}">
        <IsTelegram>
          <RouterView />
        </IsTelegram>
    </div>
</template>
<script setup lang="ts">
import IsTelegram from "@/components/layouts/IsTelegram.vue";
import {useTelegram} from "@/hooks/telegram";

const {isFullscreen} = useTelegram()
</script>