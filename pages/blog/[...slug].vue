<script setup>
import { ref } from 'vue';

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
      <template #title>
        {{ blogPost.title }}
      </template>

      <template #subtitle> Published: {{ blogPost.dates.published }} </template>
    </TheHero>

    <div>
      <section class="mx-auto mt-10 w-11/12 max-w-screen-xl">
        <div
          class="flex grid grid-cols-1 rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl md:grid-cols-6 lg:grid-cols-4"
        >
          <div
            class="col-span-4 block grow rounded-b-xl bg-white p-4 sm:p-6 md:rounded-l-xl lg:col-span-3 lg:p-8"
          >
            <ContentDoc
              class="prose max-w-none prose-a:no-underline prose-img:mx-auto prose-img:-mb-4 prose-img:transition prose-img:delay-100 hover:prose-img:scale-125"
            />
          </div>
          <div
            class="sticky top-20 order-first col-span-2 block rounded-t-xl bg-white p-4 opacity-90 sm:p-6 md:order-last md:rounded-r-xl md:rounded-tl-none lg:col-span-1 lg:p-8"
          >
            <ul class="sticky top-28 mx-5 md:mx-0">
              <p class="-mx-3 text-base font-medium opacity-100 transition">
                Table of Contents
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="mx-3 -mt-1 inline h-4 w-4 opacity-100 transition md:hidden"
                  :class="{ 'rotate-90': isTOCOpen }"
                  @click="toggle"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </p>

              <li
                v-for="link of blogPost.body.toc.links"
                :key="link.id"
                class="group mt-1 hidden truncate text-sm text-slate-500 opacity-100 transition hover:text-black md:block"
              >
                <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
                <ul>
                  <li
                    v-for="child of link.children"
                    :key="child.id"
                    class="my-1 ps-4 group-hover:text-black"
                  >
                    <NuxtLink :to="`#${child.id}`">{{ child.text }}</NuxtLink>
                  </li>
                </ul>
              </li>
              <ul v-if="isTOCOpen">
                <li
                  v-for="link of blogPost.body.toc.links"
                  :key="link.id"
                  class="group mt-1 truncate text-sm text-slate-500 opacity-100 transition hover:text-black md:hidden"
                >
                  <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
                  <ul>
                    <li
                      v-for="child of link.children"
                      :key="child.id"
                      class="my-1 ps-4 group-hover:text-black"
                    >
                      <NuxtLink :to="`#${child.id}`">{{ child.text }}</NuxtLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </main>
  <TheFooter></TheFooter>
</template>

<style scoped></style>
