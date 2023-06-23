<script setup>
const isMobileNavOpen = ref(false);
</script>

<template>
  <header>
    <div class="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 sm:py-6 lg:px-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <div class="text-center sm:text-left">
          <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">
            Welcome to Oscar Leung's Playground
          </h1>

          <p class="mt-1.5 text-sm text-gray-500">Hi, Nice to meet you. 🎉</p>
        </div>

        <div
          class="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center"
        >
          <NavBarLink link="/">Home</NavBarLink>
          <NavBarLink link="/blog/comp4621">COMP4621 Diaries</NavBarLink>
        </div>
      </div>
    </div>
  </header>
</template>

<style></style>
