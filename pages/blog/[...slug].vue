<script setup>
import { ref } from "vue";

const { path } = useRoute();
const { data: blogPost } = await useAsyncData(`content-${path}, params`, () => {
  return queryContent().where({ _path: path }).findOne();
});

const isTOCOpen = ref(false);
const toggle = () => {
  isTOCOpen.value = !isTOCOpen.value;
};
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
          class="flex grid grid-cols-1 md:grid-cols-6 lg:grid-cols-4 rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl"
        >
          <div class="grow col-span-4 lg:col-span-3 block rounded-b-xl md:rounded-l-xl bg-white p-4 sm:p-6 lg:p-8">
            <ContentDoc
              class="prose prose-img:transition prose-img:delay-100 prose-img:mx-auto prose-img:-mb-4 hover:prose-img:scale-125 
                     max-w-none prose-a:no-underline"
            />
          </div>
          <div class="sticky top-20 col-span-2 lg:col-span-1 block order-first md:order-last rounded-t-xl md:rounded-r-xl md:rounded-tl-none bg-white p-4 sm:p-6 lg:p-8 opacity-90">
            <ul class="sticky top-28 mx-5 md:mx-0">
              <p class="text-base -mx-3 font-medium transition opacity-100">Table of Contents 
                <svg @click="toggle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline mx-3 -mt-1 transition md:hidden opacity-100" :class="{'rotate-90' : isTOCOpen}">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </p>
              
              <li
                v-for="link of blogPost.body.toc.links"
                :key="link.id"
                class="hidden md:block group text-sm text-slate-500 mt-1 hover:text-black truncate transition opacity-100"
              >
                <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
                <ul>
                  <li v-for="child of link.children" :key="child.id" class="ps-4 my-1 group-hover:text-black">
                    <NuxtLink :to="`#${child.id}`">{{ child.text }}</NuxtLink>
                  </li>
                </ul>
              </li>
              <li
                v-if="isTOCOpen"
                v-for="link of blogPost.body.toc.links"
                :key="link.id"
                class="md:hidden group text-sm text-slate-500 mt-1 hover:text-black truncate transition opacity-100"
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