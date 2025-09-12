<template>
    <div class="flex flex-col justify-center items-center">
        <Avatar class="mb-3" :image="user.photo_url" size="xlarge" shape="circle" />
        <h2 class="text-xl">{{ user.first_name }} {{ user.last_name }}</h2>
        <p class="text-xs">@{{ user.username }}</p>


    </div>
</template>
<script lang="ts" setup>
import {useTelegramUser} from "@/hooks/telegram";
import {Avatar} from "primevue";

const user = useTelegramUser()
</script>