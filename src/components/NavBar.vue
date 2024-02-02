<template>
<nav class="p-2 bg-green-950 border-b-2">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-white text-2xl font-bold">🫂JiJengeYouth</div>

      <div class="hidden md:flex space-x-4 ">
        <a href="#" class="text-white">Home</a>
        <a href="#" class="text-white">About</a>
        <a href="#" class="text-white">Services</a>
        <a href="#" class="text-white">Contact</a>
        <router-link  class="text-white" to="/">Home</router-link>
        <router-link to="/about">About</router-link>


      </div>
      <div class="space-x-2">
        <router-link to="/login">
        <button class="text-white border-2 px-4 py-2 rounded-2xl">Log In</button>
        </router-link>
        <button class="bg-green-500 text-white px-4 py-2 rounded-md">Sign In</button>
      </div>
    </div>
  </nav>
</template>
<script setup>

</script>