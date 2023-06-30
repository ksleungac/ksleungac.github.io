<script setup>
const { path } = useRoute();
const { data: blogPost } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne();
});
</script>

<template>
  <main>
    <TheHero>
      <template v-slot:title>
        {{ blogPost.title }}
      </template>

      <template v-slot:subtitle>
        Published: {{ blogPost.dates.published }}
      </template>
    </TheHero>
    <div>
      <section class="w-11/12 sm:w-4/5 lg:w-3/5 max-w-screen-xl mx-auto mt-10">
        <div
          class="rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl"
        >
          <div class="block rounded-xl bg-white p-4 sm:p-6 lg:p-8">
            <ContentDoc
              class="prose prose-img:transition prose-img:delay-100 prose-img:mx-auto prose-img:-mb-4 hover:prose-img:scale-125 max-w-none prose-a:no-underline"
            />
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
</style>