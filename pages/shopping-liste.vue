<template>
  <section class="">
    <div
      class="flex flex-col items-center justify-center px-2 py-0 mx-auto lg:py-24 min-h-screen">
      <div
        class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 flec flex-col">
        <ul class="p-6 space-y-1 md:space-y-3 sm:p-8">
          <div
            v-if="cart"
            id="header"
            class="flex border rounded-xl"
            v-for="(item, i) in cart"
            :key="i">
            <img
              alt="mountain"
              class="w-20 rounded-md"
              :src="`${item.imageUrl}`" />
            <div id="body" class="flex flex-col ml-5 py-3">
              <h4 id="name" class="text-xl font-semibold mb-2">
                {{ item.name }}
              </h4>
              <p id="job" class="text-gray-800 mt-2">
                {{ item.description }}
              </p>
              <div class="flex mt-5">
                <p class="ml-3">{{ item.price }}</p>
              </div>
            </div>
          </div>
          <button
            class="w-full text-white bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            @click="PlaceOrder">
            Place Order
          </button>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const store = useGlobalStore();
const cart = ref(store.$state.cart);

const PlaceOrder = () => {};
</script>

<style lang="scss" scoped></style>
