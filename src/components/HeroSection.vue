<template>
<section class="py-4 md:flex justify-between my-16 w-5/6 mx-auto">
    <!-- Text and Buttons on the Left -->
    <div class="md:w-1/2">
      <h1 class="text-5xl text-white font-bold mb-2">Empowering Financial Growth, One Member at a Time</h1>
      <p class="text-lg text-gray-100 mb-2">Welcome to Jijenge Financial Group, where financial empowerment meets community collaboration. Discover a new way to achieve your financial goals through our innovative platform. Join a community of like-minded individuals, access resources for financial literacy, and embark on a journey towards sustainable prosperity.
        Are You Ready to:  Save, Invest and Thrive?
      </p>
      <div class="flex space-x-4">
        <router-link to="/login">
        <button class="bg-green-500 text-white px-4 py-2 rounded-md">Get Started</button>
        </router-link>
        <router-link to="/about">
        <button class="bg-white text-black px-4 py-2 rounded-md">Learn More</button>
        </router-link>
      </div>
    </div>

    <!-- Image on the Right -->
    <div class="md:w-1/2 mt-4 md:mt-0">
      <img class="m-auto rounded-md" src="../assets/youth.jpg" alt="Description of the image">
    </div>
  </section>
</template>
<script setup>
</script>