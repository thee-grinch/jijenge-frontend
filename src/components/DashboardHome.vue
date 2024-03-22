<template>
    <div class="flex">
      <div class="h-full">
        <div class="md:flex justify-between ">
          <!-- <BalanceCard v-for="card in [1, 2, 3, 4]" :key="card" class="bg-white shadow-md"/>  -->
          <div class="max-w-xs rounded overflow-scroll shadow-lg  bg-white">
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
              <p class="text-gray-700 text-base">LOan Amount: Sh {{ user['loans']}} </p>
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
              <p class="text-gray-700 text-base">Share Contribution: Sh {{ user['shares'] }}</p>
            </div>
          </div>   
        </div>
        <main class="md:grid grid-cols-2 bg-white shadow-md">
            <div class="graph">
              <my-chart :data="[30, 40, 35, 50, 49, 60, 70, 91]" :categories="['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August']" />
          </div>
          <div class="donut" v-if="user_data.length > 0">
            <DoughnutChart :series="user_data" :names="['savings', 'loans', 'project', 'shares']"  />
          </div>
          </main>
          <div class="grid grid-cols-1 mt-4">
            <div class="overflow-y-auto max-h-full">
              <div v-if="transactions.length > 0" class="transactions">
                <p class="text-2xl font-bold">Transactions</p>
                <TransactionCard :transactions="transactions" :key=1 />
              </div>
              <div v-else class="transactions">
                <p>No transactions currently</p>
              </div>
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
        <div v-if="notifications" class="notifications">
                <p class="text-2xl font-bold">Notifications</p>
                <NotificationCard v-for="notification in notifications" :key="notification.id" :data="notification" />
          </div>
          <div v-else class="notifications">
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
import TransactionCard from './TransactionCard.vue';
import sendGet from '@/utils/sendGet.js';
import { ref, reactive, onBeforeMount } from 'vue';

// Define reactive properties
const name = ref("");
const user_data = ref([])
const transactions = ref([]);
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
    const response = await sendGet('https://jijenge.muvandii.tech/app/user');

    // Assign properties directly to reactive objects
    name.value = response.name;
    Object.assign(group, response.group);
    Object.assign(user, response.user);
    notifications.value = response.notifications;
    user_data.value = [user.savings, user.loans, user.contributions, user.shares]
    transactions.value = response.transactions;
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
</script>
