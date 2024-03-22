<template>
  <nav class="p-2 bg-green-950 border-b-2">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-white text-2xl font-bold">🫂JiJengeYouth</div>

      <div class="hidden md:flex space-x-4 ">
        <a href="#" class="text-white">Home</a>
        <a href="#" class="text-white">About</a>
        <!-- <a @click="scrollToSection('testmonials')" class="text-white">Testmonials</a> -->
        <a href="#" class="text-white">Contact</a>
        <router-link class="text-white" to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </div>
      <div class="space-x-2">
        <router-link to="/login">
          <button class="navlink text-white border-2 px-4 py-2 rounded-2xl">Log In</button>
        </router-link>
        <button class="navlink bg-green-500 text-white px-4 py-2 rounded-md">Sign In</button>
      </div>
      <button class="navb"><i class="fa fa-bars text-white" aria-hidden="true"></i></button>
    </div>
  </nav>
</template>
<!-- 
<script setup>
import { ref, onMounted } from 'vue';

let parent = ref(null);

onMounted(() => {
  parent.value = document.querySelector('#landing');
});

const scrollToSection = (sectionRef) => {
  parent.value.$refs[sectionRef].scrollIntoView({ behavior: 'smooth' });
};

</script> -->

<style scoped>
@media (max-width: 640px) {
  .navb {
    display: block;
  }
  .navlink {
    display: none;
  }
}
.navb {
  display: block;
}
</style>