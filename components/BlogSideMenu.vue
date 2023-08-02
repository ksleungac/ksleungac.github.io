<script setup>
let { data: blogCategory } = await useAsyncData('blogCategory', () => {
  const text = queryContent('/').where({ _dir: '' }).find();
  return text;
});
blogCategory = blogCategory._value[0].body;

defineProps({ modelValue: String });

const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <div class="h-fit bg-white p-4">
    <ul>
      <li v-for="cat in blogCategory" :key="cat.title" class="mb-4">
        <a
          href="javascript:;"
          class="group relative block h-20 sm:h-20 lg:h-20"
          @click="emit('update:modelValue', cat.value)"
        >
          <span
            class="absolute inset-0 border-2 border-dashed border-black"
          ></span>

          <div
            class="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
            :class="{
              '-translate-x-2 -translate-y-2': modelValue == cat.value
            }"
          >
            <div
              class="p-6 transition-opacity group-hover:absolute group-hover:opacity-0"
              :class="{ 'absolute p-4 opacity-0': modelValue == cat.value }"
            >
              <p
                class="truncate whitespace-nowrap text-base font-medium md:max-[900px]:w-40 xl:text-xl"
              >
                {{ cat.title }}
              </p>
            </div>

            <div
              class="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100"
              :class="{ 'relative opacity-100': modelValue == cat.value }"
            >
              <h3
                class="mt-2 truncate whitespace-nowrap text-base font-medium md:max-[900px]:w-40 xl:text-xl"
              >
                {{ cat.title }}
              </h3>

              <p class="text-xs">
                {{ cat.description }}
              </p>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
