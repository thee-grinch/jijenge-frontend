<template>
    <div class="transaction-card flex justify-between">
        <p>{{ transaction.date }}</p>
        <p>{{ transaction.amount }}</p>
        <p>{{ transaction.type }}</p>
    </div>
</template>

<script>
export default {
    name: 'TransactionCard',
    props: {
        transaction: {
            type: Object,
            required: true
        }
    }
}
</script>

