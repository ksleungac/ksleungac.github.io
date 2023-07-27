<script setup>
let { data: blogCategory } = await useAsyncData('blogCategory', () => {
  const text = queryContent('/').where({ _dir : '' }).find();
  return text;
});
blogCategory = blogCategory._value[0].body;

defineProps({
  modelValue: String
});

let emit = defineEmits(['update:modelValue']);
</script>

<template>
  <div class="bg-white h-fit p-4">
    <ul>
      <li v-for="cat in blogCategory" :key="cat.title"
        class="mb-4">
        <a href="javascript:;" class="group relative block h-20 sm:h-20 lg:h-20" @click="emit('update:modelValue', cat.value)">
          <span class="absolute inset-0 border-2 border-dashed border-black"></span>

          <div
            class="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
          >
            <div
              class="transition-opacity group-hover:absolute group-hover:opacity-0 p-6"
            >
              <span class="text-base lg:text-xl font-medium">{{ cat.title }}</span>
            </div>

            <div
              class="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100"
            >
              <h3 class="mt-4 text-base lg:text-xl font-medium">{{ cat.title }}</h3>

              <p class="text-sm">
                {{ cat.description }}
              </p>
            </div>
          </div>
        </a>
      </li>
      
    </ul>
  </div>
</template>