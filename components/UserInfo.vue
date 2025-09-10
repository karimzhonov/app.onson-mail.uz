<template>
    <div class="flex flex-col justify-center items-center">
        <Avatar :image="lp.tgWebAppData?.user?.photo_url" size="xlarge" shape="circle" />
        <h2 class="text-lg">{{ lp.tgWebAppData?.user?.first_name }} {{ lp.tgWebAppData?.user?.last_name }}</h2>
        <p class="text-xs">@{{ lp.tgWebAppData?.user?.username }}</p>
    </div>
</template>
<script lang="ts" setup>
import { retrieveLaunchParams } from '@telegram-apps/sdk-vue'

const lp = retrieveLaunchParams()
</script>