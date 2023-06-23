<script setup>
const props = defineProps({
  link: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <Nuxt-link
    :to="link"
    class="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
    type="button"
  >
    <span class="text-base font-medium"><slot /></span>
  </Nuxt-link>
</template>
