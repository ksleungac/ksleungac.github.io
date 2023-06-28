<script setup>
const { path } = useRoute();
const { data: blogPost } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne();
});
</script>

<template>
  <main class="bg-slate-100">
    <TheHero>
      <template v-slot:title>
        {{ blogPost.title }}
      </template>

      <template v-slot:subtitle>
        <BlogPostMeta :author="blogPost.author" />
      </template>
    </TheHero>
    <div>
      <section class="w-3/5 mx-auto mt-10">
        <div
          class="rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl"
        >
          <div class="block rounded-xl bg-white p-4 sm:p-6 lg:p-8" href="">
            <ContentDoc
              class="prose prose-img:transition prose-img:-mb-4 hover:prose-img:scale-150 max-w-none"
            />
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
