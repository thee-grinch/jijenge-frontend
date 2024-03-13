<template>
    <div class="flex">
      <div class="h-full">
        <div class="grid grid-cols-4 gap-2">
          <!-- <BalanceCard v-for="card in [1, 2, 3, 4]" :key="card" class="bg-white shadow-md"/>  -->
          <div class="max-w-xs rounded overflow-hidden shadow-lg  bg-white">
            <div class="px-6 py-4 space-y-1">
              <i class="fa fa-money-bill-alt text-gray-600 mr-2"></i>
              <span class="font-bold text-xl text-gray-800">Savings</span>
              <p class="text-gray-700 text-base">Amount Saved: Sh {{ user.savings }}</p>
            </div>
          </div>
          <div class="max-w-xs rounded overflow-hidden shadow-lg bg-white">
            <div class="px-6 py-4 space-y-1">
              <i class="fa fa-money-check-alt text-gray-600 mr-2"></i>
              <span class="font-bold text-xl text-gray-800">Loans</span>
              <p class="text-gray-700 text-base">LOan Amount: sh {{ user['loans']}} </p>
            </div>
          </div>
          <div class="max-w-xs rounded overflow-hidden shadow-lg bg-white">
            <div class="px-6 py-4 space-y-1">
              <i class="fa fa-users text-gray-600 mr-2"></i>
              <span class="font-bold text-xl text-gray-800">Projects</span>
              <p class="text-gray-700 text-base">Project Contribution: Sh {{ user.contributions }}</p>
            </div>
          </div>
          <div class="max-w-xs rounded overflow-hidden shadow-lg bg-white">
            <div class="px-6 py-4 space-y-1">
              <i class="fa fa-share-alt text-gray-600 mr-2"></i>
              <span class="font-bold text-xl text-gray-800">Shares</span>
              <p class="text-gray-700 text-base">Share Contribution: $19.99</p>
            </div>
          </div>   
        </div>
        <main class="grid grid-cols-2 bg-white shadow-md">
            <div class="graph">
            <!-- <p class="h-32 border border-solid"> this is the graph holder</p> -->
            <MyChart />
          </div>
          <div class="donut">
            <!-- <BarChart /> -->
            <DoughnutChart :series="[1, 2, 3,4]" :names="['Loans', 'Projects', 'Constributions', 'shares']"  />
          </div>
          </main>
          <div class="grid grid-cols-2 mt-4">
            <div>
              transactions
            </div>
            <div>
              planning
            </div>
          </div>
          <!-- gefgergef
          this is the announcements holder
          </div> -->
      </div><!-- end of the main div -->
      <div>
        <div v-if="notifications">
                <p class="text-2xl font-bold">Notifications</p>
                <NotificationCard v-for="notification in notifications" :key="notification.id" :data="notification" />
          </div>
          <div v-else>
                <p>No notifications currently</p>
          </div>
        </div>
      </div>
</template>
<script setup>
// Import necessary components and utilities
import MyChart from './MyChart.vue';
// import BarChart from './BarChart.vue'
import DoughnutChart from './DoughnutChart.vue';
import NotificationCard from './NotificationCard.vue';
import sendGet from '@/utils/sendGet.js';
import { ref, reactive, onBeforeMount } from 'vue';

// Define reactive properties
const name = ref("");
const group = reactive({
  loans: 0,
  savings: 0,
  contributions: 0
});
const user = reactive({
  loans: 0,
  savings: 0,
  contributions: 0
});
const notifications = ref([]);

// Define a function to fetch data
const fetchData = async () => {
  try {
    const response = await sendGet('http://jijenge.muvandii.tech/app/user');

    // Assign properties directly to reactive objects
    name.value = response.name;
    Object.assign(group, response.group);
    Object.assign(user, response.user);
    notifications.value = response.notifications;

    console.log(user.loans);
    console.log(group);
  } catch (error) {
    console.error('Error:', error);
  }
};

// Trigger data fetching before component mounting
onBeforeMount(() => {
  fetchData();
});
// const label = "User"
// const data = ref([10, 20, 30])
// Debugging console logs
console.log(name);
console.log(group);
console.log(user);
</script>
