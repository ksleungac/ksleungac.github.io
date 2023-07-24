<script setup>
const props = defineProps({
  link: {
    type: String,
    required: true,
  }
});

const route = useRoute();
const home = computed (() => {
  return route.params.category === undefined;
});
</script>

<template>
  <Nuxt-link
    :to="link"
    :class="{ 'text-white' : home }"
    class="inline-flex items-center justify-center rounded-lg px-5 py-3 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700"
  >
    <span class="text-base font-medium whitespace-nowrap"><slot /></span>
  </Nuxt-link>
</template>
