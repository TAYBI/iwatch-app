<template>
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
      <h2 class="text-2xl font-bold md:text-4xl md:leading-tight pt-10">
        Watches Liste
      </h2>
    </div>

    <div class="flex gap-2">
      <div class="filter border w-96 rounded pt-2 px-4">
        <h1 class="font-bold mt-2">Price</h1>
        between {{ priceRange[0] }} and {{ priceRange[1] }}
        <Slider
          v-model="priceRange"
          range
          class="w-14rem bg-red mt-2"
          color="blue"
          @change="filterProducts" />
        <h1 class="font-bold mt-2">Brand</h1>
        <UCheckbox
          @change="filterProducts"
          v-for="(item, i) in brandList"
          :key="i"
          :ui="{
            background: 'bg-gray-90 dark:bg-gray-90',
            label: 'text-sm font-medium text-gray-900 dark:text-gray-900',
          }"
          v-model="item.selected"
          :name="item.brand"
          :label="`${item.brand} (${item.count})`"
          class="text-red" />
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-12">
        <Card v-for="(item, i) in filteredProducts" :key="i" :product="item">
          {{ item }}
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup>
const products = ref();
const filteredProducts = ref();
const priceRange = ref([50, 1000]);
const brandList = ref();

const filterProducts = () => {
  filteredProducts.value = products.value.filter((product) => {
    const isInPriceRange =
      product.price >= priceRange.value[0] &&
      product.price <= priceRange.value[1];
    const isSelectedBrand = brandList.value
      .filter((brand) => brand.selected)
      .map((brand) => brand.brand)
      .includes(product.brand);
    return isInPriceRange && isSelectedBrand;
  });
};

onMounted(async () => {
  const res = await fetch(`https://iwatch-api.onrender.com/api/products`);
  products.value = await res.json();
  filteredProducts.value = products.value;
  const brandCounts = products.value.reduce((acc, product) => {
    const { brand } = product;
    acc[brand] = (acc[brand] || 0) + 1;
    return acc;
  }, {});

  brandList.value = Object.keys(brandCounts).map((brand) => ({
    brand,
    count: brandCounts[brand],
    selected: false,
  }));

  // priceRange.value = [10, Math.max(...products.value.map((e) => e.price))];

  console.log(filteredProducts.value);
});
</script>

<style lang="scss" scoped></style>
