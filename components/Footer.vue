<template>
  <!-- ========== FOOTER ========== -->
  <footer class="w-full py-10 px-4 sm:px-6 lg:px-8 bg-gray-50">
    <div class="container mx-auto">
      <!-- Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
        <div>
          <h4 class="text-xs font-semibold text-gray-900 uppercase">Product</h4>

          <div class="mt-3 grid space-y-1 text-sm">
            <p>
              <a
                class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800"
                href="#"
                >Pricing</a
              >
            </p>
            <p>
              <a
                class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800"
                href="#"
                >Changelog</a
              >
            </p>
            <p>
              <a
                class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800"
                href="#"
                >Docs</a
              >
            </p>
            <p>
              <a
                class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800"
                href="#"
                >Download</a
              >
            </p>
          </div>
        </div>
        <!-- End Col -->

        <div>
          <h4 class="text-xs font-semibold text-gray-900 uppercase">Company</h4>

          <div class="mt-3 grid space-y-1 text-sm">
            <p>
              <a
                class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800"
                href="#"
                >About us</a
              >
            </p>
            <p>
              <a
                class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800"
                href="#"
                >Blog</a
              >
            </p>
            <p>
              <a
                class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800"
                href="#"
                >Careers</a
              >
            </p>
            <p>
              <a
                class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800"
                href="#"
                >Customers</a
              >
            </p>
            <p>
              <a
                class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800"
                href="#"
                >Newsroom</a
              >
            </p>
            <p>
              <a
                class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800"
                href="#"
                >Sitemap</a
              >
            </p>
          </div>
        </div>
        <!-- End Col -->

        <div>
          <h4 class="text-xs font-semibold text-gray-900 uppercase">
            Resources
          </h4>

          <div class="mt-3 grid space-y-1 text-sm">
            <p>
              <a
                class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800"
                href="#"
                >Community</a
              >
            </p>
            <p>
              <a
                class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800"
                href="#"
                >Help & Support</a
              >
            </p>
            <p>
              <a
                class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800"
                href="#"
                >eBook</a
              >
            </p>
            <p>
              <a
                class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800"
                href="#"
                >What's New</a
              >
            </p>
            <p>
              <a
                class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800"
                href="#"
                >Status</a
              >
            </p>
          </div>
        </div>
        <!-- End Col -->

        <div>
          <h4 class="text-xs font-semibold text-gray-900 uppercase">
            Developers
          </h4>

          <div class="mt-3 grid space-y-1 text-sm">
            <p>
              <a
                class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800"
                href="#"
                >Api</a
              >
            </p>
            <p>
              <a
                class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800"
                href="#"
                >Status</a
              >
            </p>
            <p>
              <a
                class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800"
                href="#"
                >GitHub</a
              >
            </p>
          </div>

          <h4 class="mt-7 text-xs font-semibold text-gray-900 uppercase">
            Industries
          </h4>

          <div class="mt-3 grid space-y-1 text-sm">
            <p>
              <a
                class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800"
                href="#"
                >Financial Services</a
              >
            </p>
            <p>
              <a
                class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800"
                href="#"
                >Education</a
              >
            </p>
          </div>
        </div>
        <!-- End Col -->
        <div class="col-span-full hidden lg:col-span-1 lg:block">
          <a
            class="flex bg-[#f0f0f0] items-center gap-2 text-lg font-semibold rounded w-fit px-3 py-2"
            href="#"
            aria-label="Brand">
            <Icon name="bi:globe2" width="24" height="24" />
            Pays
          </a>
          <div class="space-x-3 mt-2">
            <a href="#">
              <Icon name="mdi:instagram" width="23" height="23" />
            </a>
            <a href="#">
              <Icon name="mdi:facebook-box" width="23" height="23" />
            </a>
            <a href="#">
              <Icon name="mdi:linkedin" width="23" height="23" />
            </a>
            <a href="#">
              <Icon name="mdi:twitter" width="23" height="23" />
            </a>
          </div>
        </div>
        <!-- End Col -->
      </div>
      <!-- End Grid -->

      <div class="pt-5 mt-5 border-t border-gray-200">
        <div class="sm:flex sm:justify-between sm:items-center">
          <div class="flex items-center gap-x-3">
            <div class="space-x-4 text-sm ms-4">
              <p
                class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800"
                href="#">
                &copy; {{ year }} All rights reserved.
              </p>
            </div>
          </div>

          <div class="flex justify-between items-center">
            <div class="mt-3 sm:hidden">
              <a
                class="flex-none text-xl font-semibold"
                href="#"
                aria-label="Brand"
                >Brand</a
              >
              <p class="mt-1 text-xs sm:text-sm text-gray-600">
                © 2022 Preline.
              </p>
            </div>
          </div>
          <!-- End Col -->
        </div>
      </div>
    </div>
  </footer>
  <!-- ========== END FOOTER ========== -->
</template>

<script setup>
import { ref } from "vue";

const year = ref(new Date().getFullYear());
</script>

<style lang="scss" scoped></style>
