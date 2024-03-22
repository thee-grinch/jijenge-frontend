<template>
    <div class="flex flex-col bg-green-100 py-8 px-4 rounded">
        <h1 class="text-green-950 font-bold text-3xl">Welcome to the Admin Dashboard</h1>
        <div class="flex flex-col">
            <label for="transactionType">Select an option:</label>
            <select v-model="selectedOption" id='transactionType'>
                <option value="pay_loan">Loan Payment</option>
                <option value="add_shares">Add shares</option>
                <option value="add_contribution">Add Contribution</option>
                <!-- <option value="add_savings">Add Savings</option> -->
                <option value="new_loan_type">New Loan Type</option>
                <option value="new_loan">Issue loan</option>
            </select>
        </div>
        <div v-if="selectedOption === 'add_loan_type'" class="flex flex-col" >
            <label for="loanType">Loan Type:</label>
            <input type="text" id="loanType" v-model="typeName"/>
            <label for="interestRate">Interest Rate:</label>
            <input type="number" id="interestRate" v-model="interestRate"/>
            <label for="loanPeriod">Loan Period:</label>
            <input type="number" id="loanPeriod" v-model="loanPeriod"/>
            <label for="multiplier">Multiplier:</label>
            <input type="number" id="multiplier" v-model="multiplier"/>
            <label for="guarantord">Guarantors:</label>
            <int type="number" id="guarantord" v-model="guarantors" />
        </div> 
        <div v-else class="flex flex-col">
            <label for="amount">Amount:</label>
            <input type="number" id="amount" v-model="amount"/>
            <label for="userId">User ID:</label>
            <input type="number" id="userId" v-model="userId"/>
            <label v-if="selectedOption === 'new_loan'">Loan Type:</label>
            <select v-if="selectedOption === 'new_loan'" v-model="loanType">
                <option v-for='(loan, index) in loanTypes' :key='index' :value='index'>{{loan}} Loan</option>
            </select>
        </div>
        <p v-if="error" class="text-red-300 animate-pulse italic ">please input all the fields</p>
        <button class="px-4 py-2 bg-green-500 w-fit mt-2 mx-auto rounded-xl" @click="submitTransaction">Submit</button>

    </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import sendGet from '@/utils/sendGet';
import sendPost from '@/utils/sendPost';
const selectedOption = ref('');
const loanTypes = ref('[]')
const amount = ref(0);
const userId = ref(0);
const loanType = ref(0);
const typeName = ref('');
const interestRate = ref(0);
const loanPeriod = ref(1);
const multiplier = ref(0);
const guarantors = ref(0);
const error = ref(false)
const data = {};

let url = 'https://jijenge.muvandii.tech/app';
const submitTransaction = async () => {
    url = url + '/' + selectedOption.value;
    if (selectedOption.value === 'add_loan_type') {
    data['loan_type'] = typeName.value;
    data['interest_rate'] = interestRate.value;
    data['loan_period'] = loanPeriod.value;
    data['multiplier'] = multiplier.value;
    data['guarantors'] = guarantors.value;
} else if (selectedOption.value === 'new_loan'){
    data['amount'] = amount.value;
    data['user_id'] = userId.value;
    data['loan_type'] = loanTypes.value[loanType.value];
} else {
    data['amount'] = amount.value;
    data['user_id'] = userId.value;
}
for (let key in data){
    if (key == 'guarantors'){
        continue;
    }
    else if (!(data[key])){
        error.value = true; 
        return;
    }
   let c =  sendPost(url, data);
   console.log(c)

}
submitTransaction();
    
}
const fetchData = async () => {
    const response = await sendGet('https://jijenge.muvandii.tech/app/get_loan_types')
    loanTypes.value = response;
}
onBeforeMount(() => {
    fetchData();
})  

</script>