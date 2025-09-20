<template>
    <div class="flex flex-row gap-3 justify-between p-3 rounded-lg mx-3 h-[150px]" :class="data.class">
        <div class="flex flex-col justify-between">
            <p>{{ data.text }}</p>
            <Button as="router-link" :to="data.link" class="w-fit" rounded>{{ data.button }}</Button>
        </div>
        <div class="mt-3" :class="data.imageClass">
            <img :src="data.image" class="w-full" />
        </div>
    </div>
</template>
<script setup lang="ts">
import {Button} from 'primevue'

defineProps<{
    data: any
}>()
</script>