<!-- MainPage.vue -->
/* eslint-disable */
<template>
  <div class="min-height-screen">
    <!-- Include NavBar component -->
    <!-- <NavBar /> -->

    <div class="container mx-auto mt-2 grid grid-cols-1 md:grid-cols-2">
      <!-- Left Card Section -->
      <div class="m-auto bg-green-700 h-3/4 p-8 flex flex-col justify-center items-center">
        <div class="p-4 rounded shadow ">
          <h1 class="text-4xl text-white font-bold mb-4">{{ header }}</h1>
          <h2 class="text-2xl text-gray-700 mb-4">{{ description }}</h2>
          <button @click="showLogin = !showLogin" class="border-2 text-white py-2 px-10 rounded-3xl">{{ message }}</button>
        </div>
      </div>

      <!-- Right Form Section (either Login or Signup) -->
      <div class="m-auto">
        <LogIn v-if="showLogin" />
        <SignUp v-else />
      </div>
    </div>

    <!-- Correct placement of LogIn and SignUp components -->
    
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
// import NavBar from './NavBar.vue';
import LogIn from './LogIn.vue';
import SignUp from './SignUp.vue';

// const username = ref('');
const showLogin = ref(false); 
const message = computed(() =>{
  return showLogin.value? 'SignUp': 'Login'
})
const header = computed(() => {
  return showLogin.value? 'Welcome Back!' : 'Hello, Friend!';
})
const description = computed(() => {
  return showLogin.value? 'To Keep Connected, Enter Your personal Details With Us' : 'Enter Your Personal Details and Start Your Journey with Us';
})
</script>

