<template>
    <div v-if="statusCode" class="bg-slate-100 shadow-2xl p-8 mx-auto max-w-72">
        <img src="@/assets/verified.png" alt="verified" />
        <h1 class="text-center text-green-950 font-bold text-2xl">Verified</h1>
        <p class='py-4'>Your email has been verified. You can now login to your account</p>
        <button class="w-1/2 text-center mx-auto"><router-link to="/login" class="bg-green-500 max-w-fit text-center text-white px-4 py-2 rounded">Login</router-link></button>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const statusCode = ref(false);

onMounted(async () => {
  const token = route.query.token;
  try {
    const response = await axios.get(`https://jijenge.muvandii.tech/${token}`);
    statusCode.value = response.statusCode === 200;
  } catch (error) {
    console.error(error);
  }
});
</script>