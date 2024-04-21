<script lang="ts" setup>
const items = ref();

const images = [
  {
    img: "https://www.aviandco.com/media/magefan_blog/1_9.jpg",
    text: "Rolex Submariner",
  },
  {
    img: "https://www.analogshift.com/cdn/shop/products/Omega_Speedmaster_145_022-69ST_AS01438_1.jpg?v=1458742610&width=1445",
    text: "Omega Speedmaster Professional",
  },
  {
    img: "https://monochrome-watches.com/wp-content/uploads/2023/01/TAG-Heuer-Carrera-Chronograph-Year-of-the-Rabbit-BN2A1L-FC6521-3.jpg",
    text: "TAG Heuer Carrera",
  },
  {
    img: "https://images.pexels.com/photos/9978926/pexels-photo-9978926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Patek Philippe Nautilus",
  },
];

const carouselRef = ref();

onMounted(async () => {
  const res = await fetch(`https://iwatch-api.onrender.com/api/products`);
  items.value = await res.json();

  setInterval(() => {
    if (!carouselRef.value) return;

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0);
    }

    carouselRef.value.next();
  }, 3000);
});
</script>

<template>
  <!-- <cards /> -->
  <UCarousel
    ref="carouselRef"
    :items="images"
    :ui="{ item: 'basis-full' }"
    class="overflow-hidden mb-4 h-96"
    indicators>
    <template #default="{ item }">
      <img
        :src="item.img"
        class="h-96 w-full object-center object-cover"
        draggable="false" />
    </template>

    <template #indicator="{ onClick, page, active }">
      <UButton
        :label="images[page - 1].text"
        :variant="active ? 'solid' : 'solid'"
        :color="active ? 'gray' : 'black'"
        class="rounded-full min-w-6 justify-center bg-gray"
        @click="onClick(page)" />
    </template>
  </UCarousel>
  <!-- gallery -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-1">
    <div
      class="flex flex-col items-center bg-gray-50 rounded p-2 row-span-2 pt-20">
      <div class="text-center">
        <h2 class="mb-3 text-2xl mx-auto font-bold text-dark w-1/2">
          OLEVS Leather Multifunctional Waterproof Luminous
        </h2>
        <p class="mb-5 text-xl text-base text-body-color font-semibold">
          480 DH
        </p>
        <a href="#" class="block mb-4 text-md font-semibold text-blue">
          More info <Icon name="material-symbols:chevron-right" />
        </a>
      </div>
      <img src="/images/image-1.png" alt="watch" class="max-h-72" />
    </div>
    <div class="bg-gray-50 rounded p-2">
      <div
        class="flex flex-col lg:flex-row items-center bg-gray-50 rounded p-2 row-span-2 py-8">
        <div class="text-center">
          <h2 class="mb-3 text-2xl mx-auto font-bold text-dark w-1/2">
            OLEVS Leather Multifunctional Waterproof Luminous
          </h2>
          <p class="mb-5 text-xl text-base text-body-color font-semibold">
            480 DH
          </p>
          <a href="#" class="block mb-4 text-md font-semibold text-blue">
            More info <Icon name="material-symbols:chevron-right" />
          </a>
        </div>
        <img src="/images/image-2.png" alt="watch" class="w-52" />
      </div>
    </div>
    <div class="bg-gray-50 rounded p-2">
      <div
        class="flex flex-col lg:flex-row items-center bg-gray-50 rounded p-2 row-span-2 py-8">
        <div class="text-center">
          <h2 class="mb-3 text-2xl mx-auto font-bold text-dark w-1/2">
            OLEVS Leather Multifunctional Waterproof Luminous
          </h2>
          <p class="mb-5 text-xl text-base text-body-color font-semibold">
            480 DH
          </p>
          <a href="#" class="block mb-4 text-md font-semibold text-blue">
            More info <Icon name="material-symbols:chevron-right" />
          </a>
        </div>
        <img src="/images/image-3.png" alt="watch" class="w-52" />
      </div>
    </div>
  </div>

  <!--carousels  -->
  <div class="container mx-auto">
    <div class="w-full px-4">
      <div class="mx-auto mt-[60px] mb-8 max-w-[510px] text-center">
        <span class="text-primary mb-2 block text-lg font-semibold"> </span>
        <h2
          class="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
          New OLEVS Watches
        </h2>
        <p class="text-body-color text-base mb-2">
          Acheter | Maintenant disponible
        </p>
        <a href="#" class="block mb-4 text-md font-semibold text-blue">
          More info <Icon name="material-symbols:chevron-right" />
        </a>
      </div>
    </div>
  </div>
  <div class="container mx-auto border rounded">
    <UCarousel
      :items="items"
      :ui="{
        indicators: { wrapper: 'relative bottom-0 my-4' },
      }"
      indicators
      :prev-button="{
        color: 'gray',
        icon: 'i-heroicons-arrow-left-20-solid',
      }"
      :next-button="{
        color: 'gray',
        icon: 'i-heroicons-arrow-right-20-solid',
      }"
      class="rounded overflow-hidden">
      <template #default="{ item }">
        <Card :product="item" />
      </template>

      <template #indicator="{ onClick, page, active }">
        <UButton
          :variant="active ? 'solid' : 'outline'"
          size="2xs"
          color="gray"
          class="rounded-full min-w-6 justify-center"
          @click="onClick(page)" />
      </template>
    </UCarousel>
  </div>

  <!--  -->
  <div class="container mx-auto">
    <div class="w-full px-4">
      <div class="mx-auto my-[60px] max-w-[510px] text-center">
        <span class="text-primary mb-2 block text-lg font-semibold"> </span>
        <h2
          class="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
          New OLEVS Watches
        </h2>
        <p class="text-body-color text-base mb-2">
          Acheter | Maintenant disponible
        </p>
        <a href="#" class="block mb-4 text-md font-semibold text-blue">
          More info <Icon name="material-symbols:chevron-right" />
        </a>
      </div>
    </div>
  </div>
  <div class="container mx-auto border rounded">
    <UCarousel
      :items="items"
      :ui="{
        indicators: { wrapper: 'relative bottom-0 my-4' },
      }"
      indicators
      :prev-button="{
        color: 'gray',
        icon: 'i-heroicons-arrow-left-20-solid',
      }"
      :next-button="{
        color: 'gray',
        icon: 'i-heroicons-arrow-right-20-solid',
      }"
      class="rounded overflow-hidden">
      <template #default="{ item }">
        <Card :product="item" />
      </template>

      <template #indicator="{ onClick, page, active }">
        <UButton
          :variant="active ? 'solid' : 'outline'"
          size="2xs"
          color="gray"
          class="rounded-full min-w-6 justify-center"
          @click="onClick(page)" />
      </template>
    </UCarousel>
  </div>

  <!--  -->
  <div class="container mx-auto">
    <div class="w-full px-4">
      <div class="mx-auto my-[60px] max-w-[510px] text-center">
        <span class="text-primary mb-2 block text-lg font-semibold"> </span>
        <h2
          class="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
          New OLEVS Watches
        </h2>
        <p class="text-body-color text-base mb-2">
          Acheter | Maintenant disponible
        </p>
        <a href="#" class="block mb-4 text-md font-semibold text-blue">
          More info <Icon name="material-symbols:chevron-right" />
        </a>
      </div>
    </div>
  </div>
  <div class="container mx-auto border rounded">
    <UCarousel
      :items="items"
      :ui="{
        indicators: { wrapper: 'relative bottom-0 my-4' },
      }"
      indicators
      :prev-button="{
        color: 'gray',
        icon: 'i-heroicons-arrow-left-20-solid',
      }"
      :next-button="{
        color: 'gray',
        icon: 'i-heroicons-arrow-right-20-solid',
      }"
      class="rounded overflow-hidden">
      <template #default="{ item }">
        <Card :product="item" />
      </template>

      <template #indicator="{ onClick, page, active }">
        <UButton
          :variant="active ? 'solid' : 'outline'"
          size="2xs"
          color="gray"
          class="rounded-full min-w-6 justify-center"
          @click="onClick(page)" />
      </template>
    </UCarousel>
  </div>

  <!-- contact -->
  <section class="pt-20 pb-12 lg:py-[90px] dark:bg-dark">
    <div class="container mx-auto">
      <div class="flex flex-wrap gap-y-8">
        <div class="w-full px-4 md:w-1/2 lg:w-1/3">
          <div class="rounded-lg bg-gray-50 p-10 md:px-7 xl:px-10 text-center">
            <div
              class="bg-[#dd052c] mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl mx-auto">
              <Icon
                name="material-symbols:headset-mic-outline-sharp"
                width="36"
                height="36"
                color="white" />
            </div>
            <h4 class="text-dark mb-[14px] text-2xl font-semibold">
              Centre d'appel
            </h4>
            <p class="text-body-color dark:text-dark-6">
              We dejoy working with discerning clients, people for whom qualuty,
              service, integrity & aesthetics.
            </p>
          </div>
        </div>
        <div class="w-full px-4 md:w-1/2 lg:w-1/3">
          <div class="rounded-lg bg-gray-50 p-10 md:px-7 xl:px-10 text-center">
            <div
              class="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl mx-auto">
              <Icon
                name="ic:round-whatsapp"
                width="36"
                height="36"
                color="white" />
            </div>
            <h4 class="text-dark mb-[14px] text-2xl font-semibold">
              Refreshing Design
            </h4>
            <p class="text-body-color dark:text-dark-6">
              We dejoy working with discerning clients, people for whom qualuty,
              service, integrity & aesthetics.
            </p>
          </div>
        </div>
        <div class="w-full px-4 md:w-1/2 lg:w-1/3">
          <div class="rounded-lg bg-gray-50 p-10 md:px-7 xl:px-10 text-center">
            <div
              class="bg-[#dd052c] mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl mx-auto">
              <Icon
                name="mdi:truck-delivery"
                width="36"
                height="36"
                color="white" />
            </div>
            <h4 class="text-dark mb-[14px] text-2xl font-semibold">
              Refreshing Design
            </h4>
            <p class="text-body-color dark:text-dark-6">
              We dejoy working with discerning clients, people for whom qualuty,
              service, integrity & aesthetics.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
