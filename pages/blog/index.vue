<script setup>

</script>
<template>
  <main class="bg-slate-100">
    <TheHero>
      <template #title>{{ "Blogs" }}</template>
      <template #subtitle>{{ "Blogs for Course Projects" }}</template>
    </TheHero>
    <div class="w-11/12 grid grid-cols-none sm:grid-cols-6 mx-auto max-w-screen-xl gap-x-4">
      <BlogSideMenu class="col-span-4 sm:col-span-2 mt-4 lg:mt-10" />
      <BlogPostList class="col-span-4 w-full lg:w-11/12" />
    </div>
  </main>
</template>

<style scoped>
</style>