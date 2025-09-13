import path from 'path'
import { defineConfig } from 'vite'
// @ts-ignore
import vue from '@vitejs/plugin-vue'
// @ts-ignore
import tailwindcss from '@tailwindcss/vite'
// @ts-ignore
import { resolve } from "node:path";

import vueI18n from '@intlify/unplugin-vue-i18n/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    tailwindcss(),
    vueI18n({
      include: path.resolve(__dirname, './src/locales/**')
    })
  ],
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
