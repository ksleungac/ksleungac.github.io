<script setup>
import { ref } from "vue";
const isMobileNavOpen = ref(false);

const toggle = () => {
  isMobileNavOpen.value = !isMobileNavOpen.value;
};
const setOff = () => {
  isMobileNavOpen.value = false;
};
</script>

<template>
  <header>
    <div class="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 sm:py-6 lg:px-8">
      <div class="flex items-center justify-between">
        <div class="text-center sm:text-left">
          <h1 class="text-xl font-bold text-gray-900 sm:text-3xl">
            Oscar Leung's Playground
          </h1>

          <p class="mt-1.5 text-sm text-gray-500">Hi, Nice to meet you. 🎉</p>
        </div>

        <div class="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
          <nav aria-label="Global" class="hidden md:block">
            <ul class="flex items-center gap-6 text-sm">
              <li><NavBarLink link="/">Home</NavBarLink></li>
              <li><NavBarLink link="/blog/comp4621">COMP4621</NavBarLink></li>
              <li><NavBarLink class="nowrap" link="/blog/test">Trinity Site</NavBarLink></li>
            </ul>
          </nav>
          <div class="block md:hidden" @click="toggle" v-click-outside="setOff">
            <button
              class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <Transition>
        <div
          v-if="isMobileNavOpen"
          class="md:hidden absolute end-4 w-1/3 grid grid-cols-1 rounded-md border border-gray-100 bg-white shadow-lg"
        >
          <NavBarLink link="/">Home</NavBarLink>
          <NavBarLink link="/blog/comp4621">COMP4621</NavBarLink>
          <NavBarLink class="nowrap" link="/blog/test">Trinity Site</NavBarLink>
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
}</style>
