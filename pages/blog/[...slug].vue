<script setup>
const { path } = useRoute();
const { data: blogPost } = await useAsyncData(`content-${path}, params`, () => {
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
        Published: {{ blogPost.dates.published }}
      </template>
    </TheHero>

    <div>
      <section class="w-11/12 max-w-screen-xl mx-auto mt-10">
        <div
          class="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-4 rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl"
        >
          <div class="col-span-3 block rounded-b-xl md:rounded-l-xl bg-white p-4 sm:p-6 lg:p-8">
            <ContentDoc
              class="prose prose-img:transition prose-img:delay-100 prose-img:mx-auto prose-img:-mb-4 hover:prose-img:scale-125 
                     max-w-none prose-a:no-underline"
            />
          </div>
          <div class="col-span-2 lg:col-span-1 block order-first md:order-last rounded-t-xl md:rounded-r-xl md:rounded-tl-none bg-white p-4 sm:p-6 lg:p-8">
            <ul class="sticky top-10 mx-5 md:mx-0">
              <p class="text-base -mx-3 font-medium">Table of Contents</p>
              <li
                v-for="link of blogPost.body.toc.links"
                :key="link.id"
                class="group text-sm my-2 text-slate-400 hover:text-black truncate"
              >
                <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
                <ul>
                  <li v-for="child of link.children" :key="child.id" class="ps-4 my-1 group-hover:text-black">
                    <NuxtLink :to="`#${child.id}`">{{ child.text }}</NuxtLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </main>
  <TheFooter></TheFooter>
</template>

<style scoped>
</style>