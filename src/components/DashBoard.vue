<template>
  <div class="h-screen lg:max-w-4/5 lg:mx-auto">
    <nav class="w-full  flex justify-between py-4 bg-green-400 text-green-900 px-2 rounded-md">
      <div class="flex space-x-2">
        <h2 class="hidden md:block font-bold text-white text-xl">JiJenge Youth Group</h2>
        <h1>DashBoard</h1>
      </div>
      
      <div class="flex">
        <input type="text" class="hidden sm:block rounded-lg px-1" placeholder="Search">
        <div class="flex px-2">
          <!-- <img src="" alt=""> -->
          <p class="capital">{{ name }}</p>
          <button class="px-2"><i class="fa-solid fa-caret-down"></i></button>
        </div>
        <button class="hidden md:block"><i class="fa-solid fa-bell"></i></button>
        <button @click="showAside = !showAside" class="block md:hidden"><i class="fa fa-bars text-white" aria-hidden="true"></i></button>

      </div>
    </nav>
    <div class="relative flex bg-slate-100">
      <aside v-if="showAside" @click="removeAside" :class="isSmallScreen? styles: ''" class="w-auto h-full flex flex-col space-y-4 pr-8 pl-4 bg-slate-200 shadow-md">
        <router-link to="/dashboard">Home</router-link>
        <router-link to="/dashboard/loantypes">Loans</router-link>
        <!-- <a href="#">Notif ications</a> -->
        <a href="#">Planing</a>
        <router-link to="/dashboard/loans">My LOans</router-link>
        <router-link to="/dashboard/transact">Transact</router-link>
        <router-link to="/dashboard/admin">Admin</router-link>
        <!-- <a href="#">Transact</a> -->
        <a href="#" class="border-b-2 pb-2 border-slate-700">Project</a>
        <a href="#">Profile</a>
        <a href="#">Theme</a>
        <!-- <a href="#">Logout</a> -->
        <router-link to="/">Logout</router-link>
        <div>
          <p class="font-bold">Found a bug?</p>
          <button class="bg-green-300 p-2 rounded mx-auto">Report</button>
        </div>
      </aside>
      <div @click="removeAside" class="w-full flex flex-col justify-center items-center bg-slate-100">
        <router-view/>
      </div>
    </div>
    </div>
  <!-- </div> -->
</template>

<script setup>
import sendGet from '@/utils/sendGet.js';
import { onBeforeMount, ref, onUnmounted, onMounted } from 'vue';

const showAside = ref(false);
const isSmallScreen = ref(false);

const styles = "absolute top-0 left-0 transition ease-in-out duration-500"
const name = ref('')
const admin = ref('false')
// Define an async function to fetch data
const removeAside = () => {

  if (window.innerWidth >= 768) {
    showAside.value = true;
  }
  else {
    showAside.value = false;
  
  } 
}

const checkScreenSize = () => {
  isSmallScreen.value = window.innerWidth < 768;
  showAside.value = window.innerWidth >= 768;
};

onMounted(() => {
  window.addEventListener('resize', checkScreenSize);
  checkScreenSize();
});

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize);
});
const fetchData = async () => {
  try {
    const data = await sendGet('https://jijenge.muvandii.tech/app/username');
    // Access the 'name' property from the data object
    console.log(data);
    name.value = data.name;
    admin.value = data.admin
    console.log(name);
  } catch (error) {
    console.error('Error:', error);
  }
};
onBeforeMount(() => {
  fetchData();
});

// Call the fetchData function to initiate the request
// fetchData();
</script>
<style scoped>
.capital{
  text-transform: capitalize;
}
</style>