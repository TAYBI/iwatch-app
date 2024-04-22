<template>
  <header
    class="fixed md:justify-start md:flex-nowrap z-50 w-full py-2 bg-black/[.6] text-white backdrop-blur-sm">
    <nav
      class="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-6 md:px-8 mx-auto"
      aria-label="Global">
      <div class="md:col-span-3">
        <!-- Logo -->
        <NuxtLink
          to="/"
          class="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
          href="../templates/creative-agency/index.html"
          aria-label="Preline">
          Logo
        </NuxtLink>
        <!-- End Logo -->
      </div>

      <!-- Button Group -->
      <div
        class="flex items-center gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
        <UDropdown
          v-if="store.$state.currentUser"
          :items="items"
          :ui="{ item: { disabled: 'cursor-text select-text' } }"
          :popper="{ placement: 'bottom-start' }">
          <UAvatar src="/images/avatar.png" />

          <template #account="{ item }">
            <div class="text-left">
              <p>Signed in as</p>
              <p class="truncate font-medium text-gray-900 dark:text-white">
                {{ item.label }}
              </p>
            </div>
          </template>

          <template #item="{ item }">
            <span class="truncate">{{ item.label }}</span>

            <UIcon
              :name="item.icon"
              class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
          </template>
        </UDropdown>
        <!-- <UAvatar
          v-if="store.$state.currentUser"
          src="/images/avatar.png"
          alt="Avatar" /> -->
        <button
          v-else
          @click="Loggin"
          type="button"
          class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
          <Icon
            name="material-symbols:person-2-outline"
            color="white"
            width="18"
            height="18" />
        </button>
        <button
          @click="goToShoppingListe"
          type="button"
          class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-full">
          <Icon
            name="material-symbols:shopping-bag-sharp"
            color="white"
            width="24"
            height="24" />
          <span
            v-if="panelCount > 0"
            class="py-0.5 px-1.5 rounded-full text-xs font-medium bg-blue-50 border border-blue-200 text-blue-600 -ml-2.5 -mt-2.5">
            {{ panelCount }}
          </span>
        </button>

        <div class="md:hidden">
          <button
            type="button"
            class="hs-collapse-toggle size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
            <Icon
              name="material-symbols-light:menu"
              color="black"
              width="24"
              height="24" />
          </button>
        </div>
      </div>
      <!-- End Button Group -->

      <!-- Collapse -->
      <div
        class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6">
        <div
          class="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
          <div>
            <p
              class="inline-block hover:text-gray-200 cursor-pointer"
              @click="open = !open">
              Watches <Icon name="material-symbols:keyboard-arrow-down" />
            </p>

            <div
              v-if="open"
              class="absolute z-50 mt-2 px-2 sm:px-0 lg:px-0 right-96 border rounded-xl transition-opacity duration-300 ease-in-out">
              <div class="bg-white shadow-lg rounded-lg p-2">
                <div class="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
                  <NuxtLink
                    to="/watches-liste"
                    class="text-center cursor-pointer hover:bg-gray-50 hover:border p-1 rounded-xl">
                    <img
                      class="rounded-t-xl object-center object-cover max-h-[180px] mx-auto"
                      src="/images/rolex.png"
                      alt="Image Description" />
                    <div class="mt-2 sm:mt-4">
                      <h3
                        class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
                        Rolex Submariner
                      </h3>
                      <p class="text-xs text-gray-600 sm:text-sm lg:text-base">
                        in Oystersteel and gold
                      </p>
                    </div>
                  </NuxtLink>
                  <!-- End Col -->

                  <NuxtLink
                    to="/watches-liste"
                    class="text-center cursor-pointer hover:bg-gray-50 hover:border p-1 rounded-xl">
                    <img
                      class="rounded-t-xl object-center object-cover max-h-[180px] mx-auto"
                      src="/images/omega.png"
                      alt="Image Description" />
                    <div class="mt-2 sm:mt-4">
                      <h3
                        class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
                        OMEGA Speedmaster
                      </h3>
                      <p class="text-xs text-gray-600 sm:text-sm lg:text-base">
                        Moonwatch Professiona
                      </p>
                    </div>
                  </NuxtLink>
                  <!-- End Col -->

                  <NuxtLink
                    to="/watches-liste"
                    class="text-center cursor-pointer hover:bg-gray-50 hover:border p-1 rounded-xl">
                    <img
                      class="rounded-t-xl object-center object-cover max-h-[180px] mx-auto"
                      src="/images/carrera.avif"
                      alt="Image Description" />
                    <div class="mt-2 sm:mt-4">
                      <h3
                        class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
                        TAG Heuer Carrera
                      </h3>
                      <p class="text-xs text-gray-600 sm:text-sm lg:text-base">
                        Calibre 5 Automatic Men
                      </p>
                    </div>
                  </NuxtLink>
                  <!-- End Col -->
                </div>
              </div>
            </div>
          </div>
          <div>
            <a class="inline-block hover:text-gray-200" href="#">Services</a>
          </div>
          <div>
            <a class="inline-block hover:text-gray-200" href="#">About</a>
          </div>
          <div>
            <a class="inline-block hover:text-gray-200" href="#">Careers</a>
          </div>
          <div>
            <a class="inline-block hover:text-gray-200" href="#">Blog</a>
          </div>
        </div>
      </div>
      <!-- End Collapse -->
    </nav>
  </header>
</template>
<script setup>
// <nav class="">
//   <div class="mx-auto px-4 sm:px-6 lg:px-8">
//     <div class="flex items-center justify-between h-16">
//       <!-- Logo -->
//       <div class="flex-shrink-0">Logo</div>
//       <!-- Mega Menu -->
//       <div class="hidden md:block">
//         <UAvatar
//           src="https://avatars.githubusercontent.com/u/739984?v=4"
//           alt="Avatar" />
//         <div class="ml-4 flex items-center md:ml-6">
//           <!-- Mega Menu Trigger -->
//           <div class="relative">
//             <button
//               @click="open = !open"
//               class="text-black duration-150 ease-in-out">
//               Menu
//             </button>
//             <!-- Mega Menu Content -->
//             <div
//               v-if="open"
//               @click.away="open = false"
//               class="absolute z-50 mt-2 px-2 sm:px-0 lg:px-0 right-0 border rounded-xl transition-opacity duration-300 ease-in-out">
//               <div class="bg-white shadow-lg rounded-lg">
//                 <div class="flex">
//                   <div class="w-1/4 p-4">
//                     <h4 class="font-semibold text-gray-800 mb-2">Column 1</h4>
//                     <ul>
//                       <li>
//                         <a href="#" class="text-gray-600 hover:text-gray-800"
//                           >Link 1</a
//                         >
//                       </li>
//                       <li>
//                         <a href="#" class="text-gray-600 hover:text-gray-800"
//                           >Link 2</a
//                         >
//                       </li>
//                       <li>
//                         <a href="#" class="text-gray-600 hover:text-gray-800"
//                           >Link 3</a
//                         >
//                       </li>
//                     </ul>
//                   </div>
//                   <!-- Column 2 -->
//                   <div class="w-1/4 p-4">
//                     <h4 class="font-semibold text-gray-800 mb-2">Column 2</h4>
//                     <ul>
//                       <li>
//                         <a href="#" class="text-gray-600 hover:text-gray-800"
//                           >Link 4</a
//                         >
//                       </li>
//                       <li>
//                         <a href="#" class="text-gray-600 hover:text-gray-800"
//                           >Link 5</a
//                         >
//                       </li>
//                       <li>
//                         <a href="#" class="text-gray-600 hover:text-gray-800"
//                           >Link 6</a
//                         >
//                       </li>
//                     </ul>
//                   </div>
//                   <!-- Column 3 -->
//                   <div class="w-1/4 p-4">
//                     <h4 class="font-semibold text-gray-800 mb-2">Column 3</h4>
//                     <ul>
//                       <li>
//                         <a href="#" class="text-gray-600 hover:text-gray-800"
//                           >Link 7</a
//                         >
//                       </li>
//                       <li>
//                         <a href="#" class="text-gray-600 hover:text-gray-800"
//                           >Link 8</a
//                         >
//                       </li>
//                       <li>
//                         <a href="#" class="text-gray-600 hover:text-gray-800"
//                           >Link 9</a
//                         >
//                       </li>
//                     </ul>
//                   </div>
//                   <!-- Column 4 -->
//                   <div class="w-1/4 p-4">
//                     <h4 class="font-semibold text-gray-800 mb-2">Column 4</h4>
//                     <ul>
//                       <li>
//                         <a href="#" class="text-gray-600 hover:text-gray-800"
//                           >Link 10</a
//                         >
//                       </li>
//                       <li>
//                         <a href="#" class="text-gray-600 hover:text-gray-800"
//                           >Link 11</a
//                         >
//                       </li>
//                       <li>
//                         <a href="#" class="text-gray-600 hover:text-gray-800"
//                           >Link 12</a
//                         >
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </nav>
const store = useGlobalStore();
const open = ref(false);
const panelCount = ref(store.$state.cart.length);
import { useRouter } from "vue-router";
const router = useRouter();
const user = ref();

const items = ref();

watch(
  () => store.$state.cart,
  (cart) => {
    panelCount.value = cart.length;
  }
);

watch(
  () => store.$state.currentUser,
  (user) => {
    items.value = [
      [
        {
          label: `${user.user.email}`,
          slot: "account",
          disabled: true,
        },
      ],
      [
        {
          label: "Settings",
          icon: "i-heroicons-cog-8-tooth",
        },
      ],
      [
        {
          label: "Documentation",
          icon: "i-heroicons-book-open",
        },
        {
          label: "Changelog",
          icon: "i-heroicons-megaphone",
        },
        {
          label: "Status",
          icon: "i-heroicons-signal",
        },
      ],
      [
        {
          label: "Sign out",
          icon: "i-heroicons-arrow-left-on-rectangle",
          click: () => {
            if (process.client) localStorage.clear();
            router.push("/");
            window.location.reload();
          },
        },
      ],
    ];

    console.log(user.user.email);
  }
);

onMounted(() => {
  console.log(store.$state.currentUser);
  if (store.$state.currentUser) {
    user.value = store.$state.currentUser.user;
  }
});

const goToShoppingListe = () => {
  if (panelCount.value > 0) {
    router.push("/shopping-liste");
  }
};

const Loggin = () => {
  router.push("/sign-in");
};
</script>
