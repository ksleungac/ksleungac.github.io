<script setup>
const route = useRoute();
const category = route.params.category;
const { data: blogPostList } = await useAsyncData("blogPostList", () => {
  const text = queryContent("/blog").find();
  return text;
});
</script>

<template>
  <section class="flex flex-col mx-auto">
    <div
      v-for="blogPost in blogPostList"
      :key="blogPost._path"
    >
      <nuxt-link
        v-if="blogPost._dir == category || category === undefined"
        :to="blogPost._path"
        class="transition hover:scale-105 drop-shadow-xl mt-3 lg:mt-10 relative block overflow-hidden border border-gray-300 p-4 sm:p-6 lg:p-8 bg-white"
      >
        <span
          class="absolute inset-x-0 bottom-0 h-3 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
        ></span>

        <div class="text-center">
          <h3 class="sm:text-2xl lg:text-3xl font-bold text-gray-900">
            {{ blogPost.title }}
          </h3>
          <p class="mt-4 sm:text-lg text-gray-500">
            {{ blogPost.description }}
          </p>
        </div>

        <dl class="mt-6 flex gap-4 sm:gap-6 justify-center">
          <div class="flex flex-col-reverse">
            <dd class="text-xs text-gray-500">
              {{ blogPost.dates.published }}
            </dd>
            <dt class="text-sm font-medium text-gray-600">Published</dt>
          </div>
        </dl>
      </nuxt-link>
    </div>
  </section>
</template>

<style>
</style>
