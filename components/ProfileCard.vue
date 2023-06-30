<script setup>
</script>
<template>
  <div class="mt-3 lg:mt-10 drop-shadow-lg">
    <div class="group relative block bg-black h-20 sm:h-auto hover:h-full sm:hover:h-auto transition-[height]">
      <img
        alt="Developer"
        src="/img/avatar.jpg"
        class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity duration-300 group-hover:opacity-50"
      />

      <div class="relative p-4 sm:p-6 lg:p-8">
        <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
          About me
        </p>

        <p class="text-xl font-bold text-slate-100 sm:text-2xl">Leung King Suen, Oscar</p>

        <div class="mt-32 sm:mt-48 lg:mt-64">
          <div
            class="hidden sm:block translate-y-8 transform opacity-0 transition-all group-hover:block group-hover:translate-y-0 group-hover:opacity-100"
          >
            <p class="text-base text-white">
              Hi, I am a year 3 undergraduate studying Computer Science at HKUST.       
              Lorem ipsum dolor...
            </p>
            <br />
            <p class="text-sm text-white">
              Find me on:
              <ul class="text-white text-sm">
                <li>
                  <a href="https://github.com/ksleungac" class="underline decoration-solid">Github</a>
                </li>
                <li>
                  <a href="mailto:ksleungac@connect.ust.hk" class="underline decoration-solid">School Email</a>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>