<template>
    <div class="transaction-card flex justify-between">
        <table v-if="transactions" class="w-full">
            <tr class=" border-solid border-b-2 text-left">
                <th>Date</th>
                <th>Amount</th>
                <th>Type</th>
            </tr>
            <tr v-for="(transaction, idx) in transactions" :key="idx" class="border-b border-solid">
                <td>{{ transaction.date }}</td>
                <td>{{ transaction.amount }}</td>
                <td><span class = "px-2 py-1 rounded-md" :class="{'bg-green-500': transaction.money_in, 'bg-red-500': !(transaction.money_in)}">{{ transaction.type }}</span></td>

            </tr>
        </table>

    </div>
</template>


<!-- <script setup> -->
<script>
export default {
  props: {
    transactions: {
      type: Array,
      required: true
    },
  }}
</script>
