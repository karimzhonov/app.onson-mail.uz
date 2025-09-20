<template>
    <div class="flex flex-col gap-4">
        <NewsCard v-for="item in items" :key="item.link" :data="item" />
    </div>
</template>
<script setup lang="ts">
import { useNews } from '@/hooks/news';
import NewsCard from './NewsCard.vue';
const items = useNews()
</script>