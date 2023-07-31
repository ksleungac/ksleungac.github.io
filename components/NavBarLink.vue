<script setup>
const props = defineProps({
  link: {
    type: String,
    required: true
  }
});

const route = useRoute();
const home = computed(() => {
  return route.name === 'index';
});
</script>

<template>
  <Nuxt-link
    :to="link"
    :class="{ 'text-white': home, 'before:bg-white': home }"
    class="relative inline-flex items-center justify-center py-1 text-gray-500 before:absolute before:bottom-0 before:h-1 before:w-full before:origin-right before:scale-x-0 before:bg-black before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100 focus:before:origin-left focus:before:scale-x-100"
  >
    <span class="whitespace-nowrap text-base font-medium"><slot /></span>
  </Nuxt-link>
</template>
