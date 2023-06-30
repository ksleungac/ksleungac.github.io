<script setup>
</script>
<template>
  <main>
    <TheHero
      ><template #title>Home</template
      ><template #subtitle>Showing all posts</template></TheHero
    >
    <div class="w-11/12 grid grid-cols-none sm:grid-cols-6 mx-auto max-w-screen-xl gap-x-4">
      <ProfileCard class="col-span-4 sm:col-span-2" />
      <BlogPostList class="col-span-4 w-full lg:w-11/12" />
    </div>
  </main>
</template>
