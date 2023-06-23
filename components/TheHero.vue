<script setup></script>

<template>
  <section class="bg-gray-900 text-white -mb-32">
    <div
      class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-full lg:items-center"
    >
      <div class="mx-auto max-w-3xl text-center">
        <h1
          class="p-3 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
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

<style>
.a {
  width: 100%;
}
</style>
