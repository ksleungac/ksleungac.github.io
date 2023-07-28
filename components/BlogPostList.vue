<script setup>
import { ref } from 'vue';
let query= ref("");
const props = defineProps({
  blogPostList : {
    type: Array,
    required: true
  }
});
</script>

<template>
  <section class="flex flex-col mx-auto">
    <div class="relative mt-4 lg:mt-10">
          <label for="Search" class="sr-only"> Search </label>
          <input
            v-model="query"
            type="text"
            id="Search"
            placeholder="Search for..."
            class="w-full border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
          />

          <span class="absolute inset-y-0 end-0 grid w-10 place-content-center">
            <button type="button" class="text-gray-600 hover:text-gray-700">
              <span class="sr-only">Search</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </span>
        </div>
    <div v-for="blogPost in blogPostList" :key="blogPost._path">
      <Transition>
        <nuxt-link
          v-if="
            (blogPost.title.toLowerCase().includes(query) ||
              blogPost.description.toLowerCase().includes(query))
          "
          :to="blogPost._path"
          class="transition hover:scale-105 drop-shadow-xl mt-3 lg:mt-10 relative block overflow-hidden border border-gray-300 p-4 sm:p-6 lg:p-8 bg-white"
        >
          <span
            class="absolute inset-x-0 bottom-0 h-3 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
          ></span>

          <div class="text-center">
            <h3 class="text-xl xl:text-2xl font-bold text-gray-900">
              {{ blogPost.title }}
            </h3>
            <p class="mt-4 text-base text-gray-500">
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
      </Transition>
    </div>
  </section>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
