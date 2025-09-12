<template>
    <div class="h-screen w-screen pt-12 bg-surface-900 text-surface-50 relative">
      <IsTelegram>
        <RouterView />
      </IsTelegram>
    </div>
</template>
<script setup lang="ts">
import IsTelegram from "@/components/layouts/IsTelegram.vue";
</script>