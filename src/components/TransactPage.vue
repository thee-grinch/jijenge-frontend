<template>
    <h1 class="text-2xl text-bold">Welcome to Our transaction Page,</h1>
    <h2 class="text-xl italic mb-2">The automated way to make your Transaction</h2>
    <form class="h-3/4 flex flex-col justify-space-between items-center space-y-2
     bg-slate-100 border-gray-500 rounded-md border-solid border-2">
        <label for="selection" class="text-xl">Select Transaction Type:</label>
        <select class="bg-green-400 rounded-md" id="selection" v-model="selectedOption">
            <option value="loan">Borrow Loan</option>
            <option value="pay_loan">Pay Loan</option>
            <option value="contribution">Monthly Contribution</option>
            <option value="project">Project</option>
        </select>
        <label for="loanType"  v-if="selectedOption == 'loan'">Loan Type</label>
        <select class="bg-green-400" v-if="selectedOption == 'loan'">
            <option v-for='(loan, index) in loanTypes' :key='index' :value='loan'>{{loan}} Loan</option>
        </select>
        <label for="amount">Amount</label>
        <input type="number" id="amount" class="w-4/5 rounded-md p-1" placeholder="Enter Amount" v-model="Amount">

        <button @click="submit">Submit</button>
    </form>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            selectedOption: '',
            Amount: null,
            loanTypes: ['Normal', 'Emergency', 'Development']
        };
    },
    methods: {
        submit() {
            token = localStorage.getItem('token');
            if (!token) {
                this.$router.push('/login');
            }
            else {
                const headers = {Authentication: token}
            }
            axios.post('http://jijenge.muvandii.tech/app/transaction', {
                transaction_type: this.selectedOption,
                amount: this.Amount
            }, {headers: headers})
            
            console.log(this.selectedOption, this.Amount);
        }
    }
};
</script>