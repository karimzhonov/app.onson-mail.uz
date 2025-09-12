<script setup lang="ts">
import MenuList from "@/components/MenuList.vue";
import {useMenu} from "@/hooks/cargo/menu";

const menu = useMenu()
</script>

<template>
<MenuList :items="menu" />
</template>