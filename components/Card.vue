<template>
  <div class="w-64 bg-white overflow-hidden border">
    <a href="#" class="block">
      <div class="aspect-w-1 aspect-h-1">
        <img
          src="/images/tissot-seastar-1000-chronograph-quartz-black-dial-mens-watch-t1204171705102-t1204171705102-removebg-preview.png"
          alt="iPhone 15 Pro Max 256GB White Titanium"
          class="h-full" />
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
          @click="addToPanle"
          class="text-sm text-white bg-blue-800 px-4 py-2 rounded-full hover:bg-blue-900 focus:outline-none focus:bg-blue-600">
          Ajouter au panier
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useGlobalStore } from "@/stores/global";
const store = useGlobalStore();

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

const addToPanle = () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  store.$state.cart = cart;
};
</script>

<style lang="scss" scoped></style>
