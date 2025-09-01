<script setup lang="ts"></script>
<template>
  <div class="bg-slate-50 dark:bg-slate-900 w-screen h-screen">
    <Toast :base-z-index="999" />
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
