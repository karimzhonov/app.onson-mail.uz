<template>
    <Carousel 
        :value="items" :numVisible="1" :numScroll="1" 
        circular :autoplayInterval="5000" :showNavigators="false"
        :pt="{
            contentContainer: {class: 'relative'},
            indicatorList: {class: 'absolute bottom-0 right-3'},
            indicatorButton: {class: '!w-2 !h-2 !rounded-full'},
        }"
        >
        <template #item="slotProps">
            <div class="flex flex-row gap-3 justify-between bg-surface-800 p-3 rounded-lg mx-3 h-[150px]">
                <div class="flex flex-col justify-between">
                    <p>{{ slotProps.data.text }}</p>
                    <Button as="router-link" :to="slotProps.data.link" class="w-fit" rounded>{{ slotProps.data.button }}</Button>
                </div>
                <div class="size-[70px] mt-3">
                    <img :src="slotProps.data.image" class="w-full" />
                </div>
            </div>
        </template>
    </Carousel>
</template>
<script setup lang="ts">
import { useNews } from '@/hooks/news';
import { Button, Carousel } from 'primevue';
const items = useNews()
</script>