<template>
    <div v-if="statusCode" class="bg-slate-100 shadow-2xl p-8 mx-auto max-w-72">
        <img src="@/assets/verified.png" alt="verified" />
        <h1 class="text-center text-green-950 font-bold text-2xl">Verified</h1>
        <p class='py-4'>Your email has been verified. You can now login to your account</p>
        <button class="w-1/2 text-center mx-auto"><router-link to="/login" class="bg-green-500 max-w-fit text-center text-white px-4 py-2 rounded">Login</router-link></button>
    </div>
    <div v-if="loading" class="flex items-center justify-center h-screen">
      <svg class="animate-spin h-10 w-10 text-gray-500" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0012 20c4.411 0 8-3.589 8-8h-2c0 3.309-2.691 6-6 6s-6-2.691-6-6H6c0 3.309-2.691 6-6 6z"></path>
      </svg>
    </div>
    <div v-if="error" class="bg-red-100 shadow-2xl p-8 mx-auto max-w-72">
        <img src="@/assets/error.png" alt="error" />
        <h1 class="text-center text-red-950 font-bold text-2xl">Error</h1>
        <p class='py-4'>An error occurred while verifying your email. Please try again later</p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const statusCode = ref(false);
const error = ref(false);
const loading = ref(true);

onMounted(async () => {
  const token = route.query.token;
  try {
    const response = await axios.get(`https://jijenge.muvandii.tech/verify/${token}`);
    if (response.statusCode === 200) {
      loading.value = false;
      statusCode.value = true;
    }
    else {
      loading.value = false;
      error.value = true;
    }
  } catch (error) {
    loading.value = false;
    error.value = true;
  }
});
</script>
