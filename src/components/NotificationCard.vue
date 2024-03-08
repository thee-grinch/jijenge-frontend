<template>
    <div class="bg-white shadow-md rounded-lg p-4">
        <h2 class="text-xl font-bold mb-2">{{ data.title }}</h2>
        <p class="text-gray-600 mb-4">{{ data.message }}</p>
        <p class="text-gray-400 text-sm">{{ data.id }}</p>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped>
/* Add Tailwind CSS classes here for custom styling */
</style>
