<script setup>
import { ref } from "vue";
const isMobileNavOpen = ref(false);

const toggle = () => {
  isMobileNavOpen.value = !isMobileNavOpen.value;
};
const setOff = () => {
  isMobileNavOpen.value = false;
};

const route = useRoute();
const home = computed(() => {
  return route.name === "index" && isMobileNavOpen != true;
});
</script>

<template>
  <header class="sticky top-0 z-10" :class="{ 'bg-white': !home }">
    <div class="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        <div class="text-center sm:text-left">
          <h1
            class="text-xl font-bold text-gray-900 sm:text-3xl"
            :class="{ 'text-white': home }"
          >
            Oscar Leung's Playground
          </h1>

          <p class="mt-1.5 text-sm text-gray-500">Hi, Nice to meet you. 🎉</p>
        </div>

        <div class="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
          <nav aria-label="Global" class="hidden md:block">
            <ul class="flex items-center gap-10 text-sm">
              <li><NavBarLink link="/">Home</NavBarLink></li>
              <li><NavBarLink link="/blog/">Blogs</NavBarLink></li>
            </ul>
          </nav>
          <div class="block md:hidden" @click="toggle" v-click-outside="setOff">
            <button
              class="rounded p-2 text-gray-600 transition"
              :class="{ 'text-white': home }"
            >
              <svg v-if="!isMobileNavOpen" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <Transition>
        <div
          v-if="isMobileNavOpen"
          class="md:hidden absolute end-4 w-32 grid grid-cols-1 rounded-md border border-gray-100 shadow-lg z-10"
          :class="{ 'bg-black': home, 'bg-white': !home, 'border-white': home }"
        >
          <NavBarLink link="/">Home</NavBarLink>
          <NavBarLink link="/blog/">Blogs</NavBarLink>
        </div>
      </Transition>
    </div>
  </header>
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
