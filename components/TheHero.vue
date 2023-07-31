<script setup></script>

<template>
  <section class="-mb-32 bg-gray-900 text-white">
    <div
      class="mx-auto max-w-screen-xl px-4 pb-32 pt-8 sm:h-full sm:pt-16 lg:flex lg:items-center"
    >
      <div class="mx-auto max-w-3xl text-center">
        <h1
          class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text p-3 text-2xl font-extrabold text-transparent md:text-4xl"
        >
          <slot name="title" />
        </h1>

        <p class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
          <slot name="subtitle">Someone didn't put a subtitle!</slot>
        </p>
      </div>
    </div>
  </section>
</template>

<style></style>
