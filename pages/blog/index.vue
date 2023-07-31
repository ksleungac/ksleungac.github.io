<script setup>
const category = ref('');

let { data: blogPostList } = await useAsyncData('blogPostList', () => {
  const text = queryContent('/blog').find();
  return text;
});
blogPostList = blogPostList._value;

const filteredList = computed(() => {
  if (category.value === '') return blogPostList;
  return blogPostList.filter((blogPost) => blogPost._dir === category.value);
});
</script>
<template>
  <main class="bg-slate-100">
    <TheHero>
      <template #title>{{ 'Blogs' }}</template>
      <template #subtitle>{{ 'Blogs for Course Projects' }}</template>
    </TheHero>
    <div
      class="mx-auto grid w-11/12 max-w-screen-xl grid-cols-none gap-x-4 md:grid-cols-6"
    >
      <BlogSideMenu
        v-model="category"
        class="col-span-4 mt-4 md:col-span-2 lg:mt-10"
      />
      <BlogPostList
        class="col-span-4 w-full lg:w-11/12"
        :blog-post-list="filteredList"
      />
    </div>
  </main>
  <TheFooter />
</template>

<style scoped></style>
