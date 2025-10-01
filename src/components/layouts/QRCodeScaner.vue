<template>
    <div class="rounded-full p-2 absolute -top-4 left-1/2 -translate-x-1/2 border-2 border-primary bg-primary">
        <ScanQrCode :size="40" @click="click" />
    </div>
    
</template>
<script setup lang="ts">
import { useTelegram } from '@/hooks/telegram';
import {ScanQrCode} from 'lucide-vue-next'

const {showScanQrPopup} = useTelegram()

const click = () => {
    showScanQrPopup({
        text: 'Отсканируйте QR-код на каробке заказа и получите бонусы',
    }, (text) => {
        console.log(text)
    })
}

</script>