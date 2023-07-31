<script setup>
const props = defineProps({
  author: {
    type: String,
    required: true
  }
});

const formattedDate = computed(() => {
  return new Date(props.date).toDateString();
});
</script>

<template>
  <span
    class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-2 text-sm text-purple-700"
    >{{ author }}</span
  >
</template>

<style></style>
