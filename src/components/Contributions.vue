<template>
    <section class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-4">
      <!-- Grid Items (You can repeat this block for each item) -->
      <div v-for="item in items" :key="item.id" class="p-4 shadow-md rounded-md">
        <h3 class="text-xl font-semibold text-white text-center">{{ item.title }}</h3>
        <p class="text-gray-200 text-center">{{ item.description }}</p>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ContributorsList',
    data() {
      return {
        items: [
          { id: 1, title: 'Idea', description: 'Think of an idea' },
          { id: 2, title: 'Contribute', description: 'save the capital' },
          { id: 3, title: 'Invest', description: 'Invest in the project' },
          { id: 4, title: 'Profit', description: 'Earn Profit' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional styles for your grid items here */
  </style>
  