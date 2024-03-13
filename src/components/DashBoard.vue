<template>
  <div class="h-screen lg:max-w-4/5 lg:mx-auto">
    <nav class="w-full  flex justify-between py-4 bg-green-400 text-green-900 px-2 rounded-md">
      <div class="flex space-x-2">
        <h2 class="font-bold text-white text-xl">JiJenge Youth Group</h2>
        <h1>DashBoard</h1>
      </div>
      
      <div class="flex">
        <input type="text" placeholder="Search" class="rounded-lg px-1">
        <div class="flex px-2">
          <!-- <img src="" alt=""> -->
          <p class="capital">{{ name }}</p>
          <button class="px-2"><i class="fa-solid fa-caret-down"></i></button>
        </div>
        <button><i class="fa-solid fa-bell"></i></button>
      </div>
    </nav>
    <div class="flex bg-slate-100">
      <aside class="w-auto h-full flex flex-col space-y-4 pr-8 pl-4 bg-slate-200 shadow-md">
        <a href="#">Loans</a>
        <a href="#">Notifications</a>
        <a href="#">Planing</a>
        <router-link to="/dashboard/loans">My LOans</router-link>
        <router-link to="/dashboard/transact">Transact</router-link>
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
      <div class="w-full flex flex-col justify-center items-center bg-slate-100">
        <router-view/>
      </div>
    </div>
    </div>
  <!-- </div> -->
</template>

<script setup>
import sendGet from '@/utils/sendGet.js';
import { onBeforeMount, ref } from 'vue';
const name = ref('bagwell')
// Define an async function to fetch data
const fetchData = async () => {
  try {
    const data = await sendGet('http://jijenge.muvandii.tech/app/username');
    // Access the 'name' property from the data object
    console.log(data);
    name.value = data.name;
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