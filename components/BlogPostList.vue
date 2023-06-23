<script setup>
const { data: blogPostList } = useAsyncData("blogPostList", () => {
  return queryContent("/blog").find();
});
</script>

<template>
  <section class="flex flex-col w-3/5 mx-auto">
    <div
      v-for="blogPost in blogPostList"
      :key="blogPost._path"
      class="rounded-lg"
    >
      <nuxt-link
        :to="blogPost._path"
        class="drop-shadow-xl mt-10 h-60 relative block overflow-hidden rounded-lg border border-gray-300 p-4 sm:p-6 lg:p-8 bg-white"
      >
        <span
          class="absolute inset-x-0 bottom-0 h-3 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
        ></span>

        <div class="text-center">
          <h3 class="text-3xl font-bold text-gray-900">
            {{ blogPost.title }}
          </h3>
          <p class="mt-4 text-lg text-gray-500">
            {{ blogPost.description }}
          </p>
        </div>

        <dl class="mt-6 flex gap-4 sm:gap-6 justify-center">
          <div class="flex flex-col-reverse">
            <dt class="text-sm font-medium text-gray-600">Published</dt>
            <dd class="text-xs text-gray-500">
              {{ blogPost.dates.published }}
            </dd>
          </div>
          <BlogPostMeta :author="blogPost.author" />
        </dl>
      </nuxt-link>
    </div>
  </section>
</template>

<style>
.blog-post-card {
  padding-top: 2.5rem;
  padding-bottom: 3rem;
}

.blog-post-card .card-content {
  padding: 1rem;
}

.blog-post-card .title {
  margin-bottom: 1rem;
}
</style>
