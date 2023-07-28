<script setup>
</script>
<template>
  <main>
    <div class="w-11/12 grid grid-cols-none sm:grid-cols-6 mx-auto max-w-screen-xl gap-x-4">
      <ProfileCard class="col-span-4 sm:col-span-2" />
      <div class="col-span-4 sm:col-span-3 mx-auto mt-10">
        <h1 class="text-8xl text-white font-bold font-mono">Void<p class="xl:inline text-sm font-normal font-sans">(Well technically there's WebGL running in the background)</p></h1>
        <h1 class="text-2xl sm:text-3xl text-white mt-3">I will put up something soooon</h1>
        <h1 class="text-2xl sm:text-3xl text-white">So, consider reading my 
          <NavBarLink link="/blog/"><h1 class="text-5xl text-white">blogs</h1></NavBarLink> 
          first?</h1>
      </div>  
    </div>
  </main>
  <WebGLxDotCloud />
</template>
