<template>
  <section class="">
    <div
      class="flex flex-col items-center justify-center px-2 py-0 mx-auto lg:py-24 min-h-screen">
      <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-lg text-left font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Personal Information
          </h1>
          <input
            v-model="name"
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Name"
            required />
          <input
            v-model="lastname"
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Last Name" />
          <h1
            class="text-lg text-left font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Login information
          </h1>
          <div>
            <input
              v-model="email"
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Email"
              required />
          </div>
          <div>
            <div class="flex gap-1">
              <input
                v-model="password"
                :type="`${showPassword ? 'text' : 'password'}`"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="Password"
                required />
              <div
                class="bg-gray-50 border border-gray-300 rounded-lg px-2.5 pt-[6px] cursor-pointer"
                @click="showPassword = !showPassword">
                <Icon
                  v-if="showPassword"
                  name="zondicons:view-show"
                  color="black" />
                <Icon v-else name="zondicons:view-hide" color="black" />
              </div>
            </div>
          </div>
          <div>
            <div class="flex gap-1">
              <input
                v-model="password"
                :type="`${showPassword ? 'text' : 'password'}`"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="Validate Password"
                required />
            </div>
          </div>
          <UButton block :loading="loading" @click="signup">Sign Up</UButton>
          <!-- 
          <button
            class="w-full text-white bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            @click="signup">
            Sign Up
          </button> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import axios from "axios";

const name = ref();
const lastname = ref();
const email = ref();
const password = ref();
const router = useRouter();
const showPassword = ref(false);
const loading = ref(false);

const signup = async () => {
  loading.value = true;

  try {
    const response = await axios.post(
      "https://iwatch-api.onrender.com/api/user",
      {
        email: email.value,
        password: password.value,
        firstName: name.value,
        lastName: lastname.value,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      const user = response.data.token;
      loading.value = false;
      router.push("/sign-in");
    }
  } catch (error) {
    console.log(error);
    router.push("/sign-up");
  }
};
</script>
