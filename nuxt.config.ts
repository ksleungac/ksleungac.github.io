import { defineNuxtConfig } from "nuxt/config";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
  content: {
    highlight: {
      theme: "one-dark-pro",
    },
    markdown: {
      anchorLinks: false,
      toc: {
        depth: 3,
        searchDepth: 3
      }
    }
  }
});
