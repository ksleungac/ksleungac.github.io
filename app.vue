<script setup>
useHead({
  title: 'Oscar Leung Playground',
  link: []
});
</script>

<template>
  <div class="min-h-screen">
    <TheNavbar />
    <NuxtPage />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
h2,
h3 {
  scroll-margin-top: 10rem;
}
</style>
