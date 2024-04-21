<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
useHead({
  title: "iWatch - Your Ultimate watch",
  meta: [
    {
      name: "description",
      content:
        "Discover the latest iWatch - the ultimate watch from Apple. Stay connected, track your fitness, and express your style.",
    },
    { name: "theme-color", content: "#ffffff" },
  ],
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/MaterialSymbolsAodWatchRounded.ico",
    },
  ],
  bodyAttrs: {
    class: "bg-gray-100",
  },
  script: [{ innerHTML: "console.log('Hello world')" }],
});
</script>

<style>
/* Example of setting default light mode styles */
body {
  background-color: white;
  color: black;
}
</style>
