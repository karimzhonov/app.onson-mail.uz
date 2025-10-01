<script setup lang="ts">
import PassportCard from '@/components/cargo/passport/PassportCard.vue';
import { CirclePlus } from 'lucide-vue-next';

const items = [{
    id: 1
}]

</script>

<template>
    <div>
        <h1 class="text-center text-lg mb-3">{{ $t('Паспорта') }}</h1>
        <div class="flex flex-col gap-4">
            <PassportCard v-for="item in items" :key="item.id" :data="item" />
            <div class="cursor-pointer aspect-video rounded-xl bg-surface-700 flex justify-center items-center">
                <CirclePlus :size="70" color="#ccc"/>
            </div>
        </div>
    </div>
</template>