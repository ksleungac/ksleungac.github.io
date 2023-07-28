<script setup>
const props = defineProps({
  link: {
    type: String,
    required: true,
  }
});

const route = useRoute();
const home = computed (() => {
  return route.name == "index";
});
</script>

<template>
  <Nuxt-link
    :to="link"
    :class="{ 'text-white' : home , 'before:bg-white' : home }"
    class="inline-flex items-center justify-center py-1 text-gray-500
          hover:before:scale-x-100 hover:before:origin-left focus:before:scale-x-100 focus:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-black before:absolute before:bottom-0"
  >
    <span class="text-base font-medium whitespace-nowrap"><slot /></span>
  </Nuxt-link>
</template>
