<template>
<div class="p-4">
  <p class="text-gray-600">Some introductory text.</p>
  <h1 class="text-3xl font-bold text-blue-700 my-4">Your H1 Heading</h1>
  <p class="text-gray-800">Another piece of text following the heading.</p>
</div>
<div class="flex flex-col md:flex-row">
  <div class="mb-4 md:mb-0 md:mr-4">
    <!-- First item content goes here -->
    <p>Item 1</p>
  </div>
  <div>
    <!-- Second item content goes here -->
    <p>Item 2</p>
  </div>
</div>

</template>
<script setup>
import { NameCard } from "NameCard.vue";

</script>