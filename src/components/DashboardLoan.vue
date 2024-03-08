
<template>
  <div class="py-8">
    <div class="flex justify-between w-4/5 mx-auto bg-white shadow-md mb-3">
      <div class="">
        <p class="text-xl font-bold">Next payment due in 30 days</p>
        <p class="text-2xl font-extrabold">{{ loanData.loanAmount }}<span class="text-sm font-normal"> Ksh</span></p>
        <p class="text-sm font-thin">Amount due by {{ loanData.loanDate }} </p>
      </div>
      <button class="bg-green-400 border px-2 py-1 my-auto rounded">Make payment</button>
    </div>

    <div class="loan-view flex justify-around  m-auto w-4/5 mb-3 shadow-md">
      <div class="loan-type py-1 px-4">
        <p class="text-center text-2xl font-bold  ">{{ loanData.loanType }} </p>
        <p class="text-gray-500 text-sm">Loan Type</p>
      </div>
      <div class="loan-date py-1 px-2">
        <p class="text-center  text-2xl font-bold">{{ loanData.loanDate }}</p>
        <p class="text-gray-500 text-sm">Date Borrowed</p>
      </div>
      <div class="loan-amount py-1 px-2">
        <p class="text-2xl font-bold text-center ">{{ loanData.loanAmount }}</p>
        <p class="text-gray-500 text-sm">Amount Borrowed</p>
      </div>
      <div class="loan-balance  py-1 px-2">
        <p class="text-2xl font-bold text-center"> {{ loanData.loanBalance }}</p>
        <p class="text-gray-500 text-sm">Loan Balance</p>
      </div>
    </div>
    <div class="bg-white w-5/6 m-auto">
      <p class="text-2xl">Repayment Schedule</p>
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
      </table>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LoanPage',
  props: {
    loanData: {
          type: Object,
          required: true,
          default: () => ({
            loanType: 'Sample Loan',
            loanDate: '2022-01-01',
            loanAmount: 10000,
            loanBalance: 5000
          }),
        },
      },
  data() {
    return {
      transactions: [
      {
          date: '2022-01-01',
          amount: 100,
          balance: 500,
          status: 'Completed'
        },
        {
          date: '2022-01-02',
          amount: 200,
          balance: 300,
          status: 'Pending'
        },
        {
          date: '2022-01-03',
          amount: 150,
          balance: 150,
          status: 'Failed'
        },
        {
          date: '2022-01-03',
          amount: 150,
          balance: 150,
          status: 'Completed'
        }
      ]
    }
  },
  methods: {
    getbg: (status)=>{
      if (status == 'Completed'){
        return 'bg-green-500';
      }
      else if (status == 'Pending'){
        return 'bg-orange-500'
      }
      else {
        return 'bg-gray-500'
      }
    }
  }

    };
</script>
