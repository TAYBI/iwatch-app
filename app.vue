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
  ],
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/MaterialSymbolsAodWatchRounded.ico",
    },
  ],
});
</script>

<style>
/* Example of setting default light mode styles */
body {
  background-color: white;
  color: black;
}

.fade-enter-active,
.fade-leave-active {
  @apply transition-opacity duration-300 ease-in-out;
}
.fade-enter,
.fade-leave-to {
  @apply opacity-0;
}
</style>
