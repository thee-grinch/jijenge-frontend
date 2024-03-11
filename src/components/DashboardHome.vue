<template>
    <div class="flex">
      <div class="h-full">
        <div class="grid grid-cols-4 gap-2">
          <BalanceCard v-for="card in [1, 2, 3, 4]" :key="card" class="bg-white shadow-md"/>         
        </div>
        <main class="grid grid-cols-2 h-64 bg-white shadow-md">
            <div class="graph">
            <!-- <p class="h-32 border border-solid"> this is the graph holder</p> -->
            <MyChart />
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
<script>
import BalanceCard from './BalanceCard.vue';
import MyChart from './MyChart.vue';
import NotificationCard from './NotificationCard.vue';
import sendGet from '@/utils/sendGet.js';

// const sendGet = require('@/utils/sendGet.js')
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
  },
  beforeMount() {

    sendGet('http://jijenge.muvandii.tech/app/user')
    .then((response) => {
      this.notifications = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  },
}
</script>