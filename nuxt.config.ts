// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/tailwindcss", "@pinia/nuxt", "nuxt-primevue"],
  css: ["primevue/resources/themes/aura-light-green/theme.css"],
});
