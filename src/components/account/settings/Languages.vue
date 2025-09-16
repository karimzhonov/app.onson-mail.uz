<script setup lang="ts">
import MenuList from "@/components/MenuList.vue";
import { locales, locale } from "@/plugins/i18n";
import { useI18n } from "vue-i18n";


const i18n = useI18n()


const menu = [
        {
            items: Object.values(locales).map(v => ({
                label: v.name,
                command: () => {
                    i18n.locale.value = v.code
                    locale.value = v.code
                },
                link: '/account'
            }))
        },
    ]

</script>

<template>
  <h2 class="text-center text-lg">{{$t('Язык')}}</h2>
  <MenuList :items="menu" />
</template>