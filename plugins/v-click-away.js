import VueClickAway from 'vue3-click-away'

export default defineNuxtPlugin((useNuxtApp) => {
  useNuxtApp.vueApp.use(VueClickAway);
})