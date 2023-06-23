<script setup>
const { path } = useRoute();
const { data: blogPost } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne();
});
</script>

<template>
  <main>
    <TheHero>
      <template v-slot:default>
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
            <div>
              <ContentDoc class="prose" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
