<script setup>
const route = useRoute();
</script>
<template>
  <main class="bg-slate-100">
    <TheHero><template #title>Placeholder Title</template></TheHero>
    <BlogPostList :key="route.params.category" />
  </main>
</template>
