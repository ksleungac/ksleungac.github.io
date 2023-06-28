<script setup>
const route = useRoute();
</script>
<template>
  <main class="bg-slate-100">
    <TheHero
      ><template #title>Testing Testing ?!!</template
      ><template #subtitle>You shall see all posts</template></TheHero
    >
    <BlogPostList />
  </main>
</template>
