<script setup></script>
<template>
  <div class="mt-4 drop-shadow-lg lg:mt-10">
    <div
      class="group relative block h-20 bg-black transition-all hover:h-[22rem] sm:h-auto sm:hover:h-auto"
    >
      <img
        alt="Developer"
        src="/img/avatar.jpg"
        class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity duration-300 group-hover:opacity-50"
      />

      <div class="relative p-4 sm:p-6 lg:p-8">
        <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
          About me
        </p>

        <p class="text-xl font-bold text-slate-100 sm:text-2xl">
          Leung King Suen, Oscar
        </p>

        <div class="mt-32 hidden group-hover:block sm:mt-48 sm:block lg:mt-64">
          <div
            class="translate-y-8 transform opacity-0 transition-all group-hover:block group-hover:translate-y-0 group-hover:opacity-100"
          >
            <p class="text-base text-white">
              Hi, I am a year 3 undergraduate studying Computer Science at
              HKUST. Lorem ipsum dolor...
            </p>
            <br />
            <ul class="text-sm text-white">
              <p class="text-sm text-white">Find me on:</p>
              <li>
                <a
                  href="https://github.com/ksleungac"
                  class="underline decoration-solid"
                  >Github</a
                >
              </li>
              <li>
                <a
                  href="mailto:ksleungac@connect.ust.hk"
                  class="underline decoration-solid"
                  >School Email</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
