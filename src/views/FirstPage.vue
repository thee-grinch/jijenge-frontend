<template>
  <div class="bg-green-950 h-screen sm:h-fit">
        <!-- <NavBar /> -->
        <HeroSection />
        <ContributorsList />
  </div>
</template>
<script>
// import NavBar  from './NavBar.vue';
import HeroSection  from '@/components/HeroSection.vue';
import  ContributorsList from '@/components/Contributions.vue'
export default {
        name: 'FirstPage',
        components: {
                // NavBar,
                HeroSection,
                ContributorsList
        }
}
</script>