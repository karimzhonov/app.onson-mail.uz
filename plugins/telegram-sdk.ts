import { init } from '@telegram-apps/sdk-vue'
import { viewport } from '@telegram-apps/sdk';

export default defineNuxtPlugin(async () => {
  init()


  if (viewport.mount.isAvailable()) {
    viewport.mount();
    viewport.isMounted(); // true
  }

  if (viewport.expand.isAvailable()) {
    viewport.expand();
  }

  if (viewport.requestFullscreen.isAvailable()) {
    await viewport.requestFullscreen();
    viewport.isFullscreen(); // true
  }
})
