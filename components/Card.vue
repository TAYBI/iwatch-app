<template>
  <div class="w-64 bg-white overflow-hidden border">
    <a href="#" class="block">
      <div class="aspect-w-1 aspect-h-1">
        <img
          src="https://istyle.ma/media/catalog/product/cache/small_image/240x240/beff4985b56e3afdbeabfc89641a4582/i/p/iphone_15_pro_max_white_titanium_pdp_image_position-1__en-me_3_4.jpg"
          alt="iPhone 15 Pro Max 256GB White Titanium"
          class="object-cover w-full h-full" />
      </div>
    </a>
    <div class="p-4">
      <a
        href="#"
        class="block text-gray-900 font-semibold leading-tight hover:underline"
        >{{ product.name }}</a
      >
      <div class="text-gray-700 my-2">
        <span class="text-sm">MAD {{ product.price }}</span>
      </div>
      <div class="text-gray-700">
        <p class="text-sm text-primary">En stock</p>
      </div>
      <div class="mt-4 flex justify-between items-center">
        <a href="#" class="text-sm text-blue-800 hover:underline"
          >Plus d'info</a
        >
        <button
          class="text-sm text-white bg-blue-800 px-4 py-2 rounded-full hover:bg-blue-900 focus:outline-none focus:bg-blue-600">
          Ajouter au panier
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps({
  product: {
    type: Object,
    required: true,
    validator: (value) => {
      return (
        value.hasOwnProperty("brand") &&
        value.hasOwnProperty("name") &&
        value.hasOwnProperty("description") &&
        value.hasOwnProperty("price") &&
        value.hasOwnProperty("stock")
      );
    },
  },
});
</script>

<style lang="scss" scoped></style>
