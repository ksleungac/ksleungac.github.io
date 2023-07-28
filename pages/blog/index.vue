<script setup>
const category = ref("")

let { data: blogPostList } = await useAsyncData("blogPostList", () => {
  const text = queryContent("/blog").find();
  return text;
});
blogPostList = blogPostList._value

const filteredList = computed (() => {
  if (category.value == "")
    return blogPostList
  return blogPostList.filter(blogPost => blogPost._dir == category.value)
});

</script>
<template>
  <main class="bg-slate-100">
    <TheHero>
      <template #title>{{ "Blogs" }}</template>
      <template #subtitle>{{ "Blogs for Course Projects" }}</template>
    </TheHero>
    <div class="w-11/12 grid grid-cols-none md:grid-cols-6 mx-auto max-w-screen-xl gap-x-4">
      <BlogSideMenu class="col-span-4 md:col-span-2 mt-4 lg:mt-10" v-model="category" />
      <BlogPostList class="col-span-4 w-full lg:w-11/12" :blogPostList="filteredList" />
    </div>
  </main>
  <TheFooter />
</template>

<style scoped>
</style>