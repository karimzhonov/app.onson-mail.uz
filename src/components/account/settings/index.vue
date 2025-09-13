<script setup lang="ts">
import MenuList from "@/components/MenuList.vue";
import {useSettings} from "@/hooks/account/settings";


const menu = useSettings()
</script>

<template>
  <MenuList :items="menu" />
</template>