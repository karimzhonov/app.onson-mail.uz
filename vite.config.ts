import { defineConfig } from 'vite'
// @ts-ignore
import vue from '@vitejs/plugin-vue'
// @ts-ignore
import tailwindcss from '@tailwindcss/vite'
// @ts-ignore
import { resolve } from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  server: {
    port: 3000,
    allowedHosts: [
        'onson-mail.loca.lt'
    ]
  },
  preview: {
    port: 7000,
    host: '0.0.0.0',
    allowedHosts: [
        'app.onson-mail.uz',
    ]
  },
  resolve: {
    alias: {
      // @ts-ignore
      "@": resolve(__dirname, "./src"),
    },
  },
})
