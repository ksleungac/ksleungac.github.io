<script setup>
useHead({
  title: "Oscar Leung Playground",
  link: [
    {
      rel: "stylesheet",
      href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
    },
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/overlayscrollbars/1.9.1/css/OverlayScrollbars.min.css",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Open+Sans",
    },
  ],
});
</script>

<template>
  <TheNavbar />
  <div class="bg-slate-100 h-screen">
    <NuxtPage />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
