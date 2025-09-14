<template>
    <div class="aspect-video cursor-pointer rounded-xl bg-[url(/passport/passport.png)] bg-cover p-[10px] pt-[50px]">
        <div class="flex flex-row">
            <div class="col-span-3 h-full w-[30%] ml-2">
                <img class="w-full" v-if="data.image" :src="data.image" />
                <img class="w-full" v-else src="/passport/default_user.png" />
            </div>  
            <div class="col-span-5 flex flex-col text-black h-full ml-3">
                <div class="text-xs mb-2">
                    <p>ФИО / FIO</p>
                    <p class="font-semibold">{{ data.fio }}</p>
                </div>
                <div class="text-xs mb-2">
                    ПИНФЛ / PINFL
                    <p class="font-semibold text-nowrap">{{ data.pnfl }}</p>
                </div>
                <div class="text-xs mb-2">
                    Пасспорт / Passport
                    <p class="font-semibold text-nowrap">{{ data.passport }}</p>
                </div>
                <div class="text-xs">
                    Адрес / Manzil
                    <p class="font-semibold">{{ data.address }}</p>
                </div>
            </div>            
        </div>
    </div>
</template>
<script setup lang="ts">
defineProps<{
    data: Record<string, any>
}>()
</script>