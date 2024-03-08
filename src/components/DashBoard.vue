<template>
  <div class="h-screen lg:w-3/4 lg:mx-auto">
    <nav class="w-full  flex justify-between py-4 bg-green-400 text-green-900 px-2 rounded-md">
      <div class="flex space-x-2">
        <h2 class="font-bold text-white text-xl">JiJenge Youth Group</h2>
        <h1>DashBoard</h1>
      </div>
      
      <div class="flex">
        <input type="text" placeholder="Search" class="rounded-lg px-1">
        <div class="flex px-2">
          <!-- <img src="" alt=""> -->
          <p>John Doe</p>
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
        <a href="#">Transact</a>
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
      <div class="w-full bg-slate-100">
        <router-view/>
      </div>
    </div>
    </div>
  <!-- </div> -->
</template>

<!-- <script>
import BalanceCard from './BalanceCard.vue';
import MyChart from './MyChart.vue';
import NotificationCard from './NotificationCard.vue';
export default {
  name: 'DashBoard',
  components: { BalanceCard, MyChart, NotificationCard },
  data() {
    return {
      notifications: [{
        id: 1,
        title: 'New Loan',
        message: 'You have been approved for a loan of Ksh 10,000'
      }, {
        id: 2,
        title: 'New Loan',
        message: 'You have been approved for a loan of Ksh 140,000'
      }, {
        id: 3,
        title: 'New Loan',
        message: 'You have been approved for a loan of Ksh 120,000'
      }, {
        id: 4,
        title: 'New Loan',
        message: 'You have been approved for a loan of Ksh 1450,000'}]
    };
  }
}
</script>
   -->