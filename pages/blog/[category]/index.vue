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
    <BlogPostList />
  </main>
</template>
