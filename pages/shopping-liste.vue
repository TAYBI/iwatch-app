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
              class="w-[132px] rounded-md h-full"
              :src="`/images/tissot-seastar-1000-chronograph-quartz-black-dial-mens-watch-t1204171705102-t1204171705102-removebg-preview.png`" />
            <div id="body" class="flex flex-col ml-5 py-3">
              <h4 id="name" class="text-xl font-semibold mb-2">
                {{ item.name }}
                <span
                  class="py-0.5 px-1.5 rounded-full text-xs font-medium border">
                  {{ item.count }}
                </span>
              </h4>
              <p id="job" class="text-gray-800 mt-2">
                {{ item.brand }}
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

<script setup>
const store = useGlobalStore();
const cart = ref();
import { useRouter } from "vue-router";
const router = useRouter();

onMounted(() => {
  const productCounts = {};
  store.$state.cart.forEach((product) => {
    if (!productCounts[product._id]) {
      productCounts[product._id] = 0;
    }
    productCounts[product._id]++;
  });

  const uniqueProducts = [];
  store.$state.cart.forEach((product) => {
    if (!uniqueProducts.some((p) => p._id === product._id)) {
      uniqueProducts.push({
        ...product,
        count: productCounts[product._id],
      });
    }
  });

  cart.value = uniqueProducts;
});
const PlaceOrder = () => {
  if (store.$state.currentUser) {
    alert("You're order has been placed");
    store.$state.cart = [];
    router.push("/");
  } else {
    router.push("/sign-in");
  }
};
</script>

<style lang="scss" scoped></style>
