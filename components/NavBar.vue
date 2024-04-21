<template>
  <nav class="">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">Logo</div>
        <!-- Mega Menu -->
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
            <!-- Mega Menu Trigger -->
            <div class="relative">
              <button
                @click="open = !open"
                class="text-black duration-150 ease-in-out">
                Menu
              </button>
              <!-- Mega Menu Content -->
              <div
                v-if="open"
                @click.away="open = false"
                class="absolute z-50 mt-2 px-2 sm:px-0 lg:px-0 right-0 border rounded-xl transition-opacity duration-300 ease-in-out">
                <div class="bg-white shadow-lg rounded-lg">
                  <div class="flex">
                    <div class="w-1/4 p-4">
                      <h4 class="font-semibold text-gray-800 mb-2">Column 1</h4>
                      <ul>
                        <li>
                          <a href="#" class="text-gray-600 hover:text-gray-800"
                            >Link 1</a
                          >
                        </li>
                        <li>
                          <a href="#" class="text-gray-600 hover:text-gray-800"
                            >Link 2</a
                          >
                        </li>
                        <li>
                          <a href="#" class="text-gray-600 hover:text-gray-800"
                            >Link 3</a
                          >
                        </li>
                      </ul>
                    </div>
                    <!-- Column 2 -->
                    <div class="w-1/4 p-4">
                      <h4 class="font-semibold text-gray-800 mb-2">Column 2</h4>
                      <ul>
                        <li>
                          <a href="#" class="text-gray-600 hover:text-gray-800"
                            >Link 4</a
                          >
                        </li>
                        <li>
                          <a href="#" class="text-gray-600 hover:text-gray-800"
                            >Link 5</a
                          >
                        </li>
                        <li>
                          <a href="#" class="text-gray-600 hover:text-gray-800"
                            >Link 6</a
                          >
                        </li>
                      </ul>
                    </div>
                    <!-- Column 3 -->
                    <div class="w-1/4 p-4">
                      <h4 class="font-semibold text-gray-800 mb-2">Column 3</h4>
                      <ul>
                        <li>
                          <a href="#" class="text-gray-600 hover:text-gray-800"
                            >Link 7</a
                          >
                        </li>
                        <li>
                          <a href="#" class="text-gray-600 hover:text-gray-800"
                            >Link 8</a
                          >
                        </li>
                        <li>
                          <a href="#" class="text-gray-600 hover:text-gray-800"
                            >Link 9</a
                          >
                        </li>
                      </ul>
                    </div>
                    <!-- Column 4 -->
                    <div class="w-1/4 p-4">
                      <h4 class="font-semibold text-gray-800 mb-2">Column 4</h4>
                      <ul>
                        <li>
                          <a href="#" class="text-gray-600 hover:text-gray-800"
                            >Link 10</a
                          >
                        </li>
                        <li>
                          <a href="#" class="text-gray-600 hover:text-gray-800"
                            >Link 11</a
                          >
                        </li>
                        <li>
                          <a href="#" class="text-gray-600 hover:text-gray-800"
                            >Link 12</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
const open = ref(false);
</script>
