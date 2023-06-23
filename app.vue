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
    // {
    //   rel: 'stylesheet',
    //   href: 'https://unpkg.com/bulma@0.9.3/css/bulma.min.css'
    // }
  ],
});
</script>

<template>
  <TheNavbar />
  <div>
    <NuxtPage />
  </div>
</template>

<style></style>
