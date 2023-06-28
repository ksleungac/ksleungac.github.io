<script setup>
const category = useRoute().params.category;
const heroTitle = [
  {
    category: "comp4621",
    title: "COMP4621 Diaries",
    subtitle: "For COMP4621 course project submission",
  },
  {
    category: "test",
    title: "Testing Ground",
    subtitle:
      "*The first nuclear weapon experiment was conducted at the Trinity Site.",
  },
];
let spanTitle = "";
let spanSubtitle = "";
heroTitle.forEach((obj) => {
  if (category == obj.category) {
    spanTitle = obj.title;
    spanSubtitle = obj.subtitle;
  }
});
</script>
<template>
  <main class="bg-slate-100">
    <TheHero
      ><template #title>{{ spanTitle }}</template
      ><template #subtitle>{{ spanSubtitle }}</template></TheHero
    >
    <div class="w-11/12 grid grid-cols-none sm:grid-cols-6 mx-auto max-w-screen-xl gap-x-4">
      <ProfileCard class="col-span-4 sm:col-span-2" />
      <BlogPostList class="col-span-4 w-full lg:w-11/12" />
    </div>
  </main>
</template>

<style scoped>
</style>