<script setup>
</script>
<template>
  <div class="mt-3 sm:mt-5 lg:mt-10">
    <div class="group relative block bg-black h-20 sm:h-auto hover:h-auto">
      <img
        alt="Developer"
        src="/img/avatar.jpg"
        class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
      />

      <div class="relative p-4 sm:p-6 lg:p-8">
        <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
          About me
        </p>

        <p class="text-xl font-bold text-slate-100 sm:text-2xl">Leung King Suen, Oscar</p>

        <div class="mt-32 sm:mt-48 lg:mt-64">
          <div
            class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
          >
            <p class="text-sm text-white">
              Hi, I am a year 3 undergraduate studying Computer Science at HKUST.       
              Lorem ipsum dolor...
            </p>
            <br />
            <p class="text-sm text-white">
              Find me on:
              <a href="https://github.com/ksleungac" class="underline decoration-solid">Github</a> <br />
              <a href="mailto:ksleungac@connect.ust.hk" class="underline decoration-solid">School Email</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>