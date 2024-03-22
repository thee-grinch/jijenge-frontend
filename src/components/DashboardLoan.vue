
<template>
  <div class="py-8">
    <div class="flex justify-between w-4/5 mx-auto bg-white shadow-md mb-3">
      <div class="" v-if="loanData">
        <p class="text-xl font-bold">Next payment due in {{ loanData.numberOfDays }} days</p>
        <p class="text-2xl font-extrabold">{{ loanData.paymentSchedule }}<span class="text-sm font-normal"> Ksh</span></p>
        <p class="text-sm font-thin">Amount due by {{ loanData.nextDate }} </p>
      </div>
      <button class="bg-green-400 border px-2 py-1 my-auto rounded">Make payment</button>
    </div>

    <div class="loan-view flex justify-around  m-auto w-4/5 mb-3 shadow-md">
      <div class="loan-type py-1 px-4">
        <p class="text-center text-2xl font-bold  ">{{ loanData.loanType }} </p>
        <p class="text-gray-500 text-sm">Loan Type</p>
      </div>
      <div class="loan-date py-1 px-2">
        <p class="text-center  text-2xl font-bold">{{ loanData.dateBorrowed }}</p>
        <p class="text-gray-500 text-sm">Date Borrowed</p>
      </div>
      <div class="loan-amount py-1 px-2">
        <p class="text-2xl font-bold text-center ">{{ loanData.totalAmount }}</p>
        <p class="text-gray-500 text-sm">Amount Borrowed</p>
      </div>
      <div class="loan-balance  py-1 px-2">
        <p class="text-2xl font-bold text-center"> {{ loanData.balance }}</p>
        <p class="text-gray-500 text-sm">Loan Balance</p>
      </div>
    </div>
    <div class="bg-white w-5/6 m-auto">
      <p class="text-2xl">Repayment History</p>
      <table class="w-full">
        <tr class="border-b-2 border-black">
          <th class="p-2 text-left">Due On</th>
          <th class="p-2 text-left">Amount Paid</th>
          <!-- <th>Total Paid</th> -->
          <th class="p-2 text-left">Balance</th>
          <th class="p-2 text-left">Status</th>
        </tr>

        <tr v-for="(transaction, index) in transactions" :key="index" class="border-b-2 border-black">
        <td class="p-2 text-left">{{ transaction.date }}</td>
        <td class="p-2 text-left"> {{ transaction.amount }}</td>
        <td class="p-2 text-left">{{ transaction.balance }}</td>
        <td class="p-2 text-left"><span class="rounded-lg px-2 py-1" :class="getbg(transaction.status)">{{ transaction.status }}</span></td>
        </tr>
        <p  v-if="transactions.length === 0" class="text-xl italic">No loan repayments yet</p>
      </table>
    </div>
  </div>

</template>

<script setup>
import sendGet from '@/utils/sendGet.js';
import { ref, reactive, onBeforeMount } from 'vue';
// Define reactive properties
const loanData = reactive({});
const transactions = ref([]);
const fetchData = async () => {
  try {
    const response = await sendGet('https://jijenge.muvandii.tech/app/loans');

    // Assign properties directly to reactive objects
    loanData.numberOfDays = response.number_of_days;
    loanData.nextDate = response.next_payment_date;
    loanData.loanType = response.loan_type;
    loanData.dateBorrowed = response.date_borrowed;
    loanData.totalAmount = response.total_amount;
    loanData.balance = response.balance;
    loanData.paymentSchedule = response.payment_schedule;
    return loanData;
  } catch (error) {
    console.error(error);
  }
};
// Trigger data fetching before component mounting
onBeforeMount(() => {
  fetchData();
});
console.log(loanData);
</script>
