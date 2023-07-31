<script setup></script>
<template>
  <main>
    <div
      class="mx-auto grid w-11/12 max-w-screen-xl grid-cols-none gap-x-4 sm:grid-cols-6"
    >
      <ProfileCard class="col-span-4 sm:col-span-2" />
      <div class="col-span-4 mt-10 justify-self-center sm:col-start-3">
        <h1 class="font-mono text-8xl font-bold text-white">
          Void
          <p class="font-sans text-sm font-normal xl:inline">
            (Well technically there's WebGL running in the background)
          </p>
        </h1>
        <h1 class="mt-3 text-2xl text-white sm:text-3xl">
          I will put up something soooon
        </h1>
        <h1 class="text-2xl text-white sm:text-3xl">
          So, consider reading my
          <NavBarLink link="/blog/"
            ><h1 class="text-5xl text-white">blogs</h1></NavBarLink
          >
          first?
        </h1>
      </div>
    </div>
  </main>
  <WebGLxDotCloud />
</template>
