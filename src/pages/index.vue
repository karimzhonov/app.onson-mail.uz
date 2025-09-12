<template>
  <div class="flex flex-col items-center gap-3 mb-3">
    <img class="mr-2" src="/logo.png" width="50"/>
    <p class="mb-0 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary-400 to-primary-700">
      ONSON MAIL GROUP
    </p>
  </div>
  <div class="p-3">
    <Projects />
  </div>
</template>
<script setup lang="ts">

import Projects from "@/components/Projects.vue";
</script>