<script setup lang="ts">
import MenuList from "@/components/MenuList.vue";
import { locales, useLocale } from "@/i18n";
import { useI18n } from "vue-i18n";


const {locale} = useI18n()


const menu = [
        {
            label: 'Язык',
            items: Object.values(locales).map(v => ({
                label: v.name,
                command: () => {
                    locale.value = v.code
                    useLocale.value = v.code
                },
                link: '/account'
            }))
        },
    ]

</script>

<template>
  <MenuList :items="menu" />
</template>