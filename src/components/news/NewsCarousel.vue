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
            <NewsCard :data="slotProps.data" />
        </template>
    </Carousel>
</template>
<script setup lang="ts">
import { useNews } from '@/hooks/news';
import { Carousel } from 'primevue';
import NewsCard from './NewsCard.vue';
const items = useNews()
</script>