<script setup lang="ts">
import IsTelegram from "@/components/layouts/IsTelegram.vue";
import { Toast } from "primevue";
import { onMounted } from "vue";

function disableZoomHandlers() {
  // 1) Запрет Ctrl/Cmd + колесо (desktop)
  window.addEventListener('wheel', (e) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
    }
  }, { passive: false });

  // 2) Запрет pinch-zoom (мобильные)
  window.addEventListener('touchmove', (e) => {
    if (e.scale && e.scale !== 1) {
      e.preventDefault();
    }
  }, { passive: false });

  // 3) iOS Safari gesturestart (предотвращает некоторые зумы)
  document.addEventListener('gesturestart', (e) => {
    e.preventDefault();
  });

  // 4) Блокировка двойного клика-зума (на всякий случай)
  let lastTouch = 0;
  document.addEventListener('touchend', (e) => {
    const now = Date.now();
    if (now - lastTouch <= 300) {
      e.preventDefault();
    }
    lastTouch = now;
  }, { passive: false });
}

onMounted(() => disableZoomHandlers())

</script>

<template>
  <Toast />
  <div class="bg-surface-900 text-surface-50 safe">
    <IsTelegram>
      <RouterView />
    </IsTelegram>
  </div>
</template>
<style>
.safe {
  padding-top: 60px;
}
</style>