<template>
  <div class="bg-green-950 min-h-screen sm:h-fit">
        <NavBar />
        <HeroSection />
        <ContributorsList />
        <!-- <FeatureSection /> -->
  </div>
</template>
<script>
import NavBar  from './NavBar.vue';
import HeroSection  from './HeroSection.vue';
import  ContributorsList from './Contributions.vue'
// import FeatureSection from './FeatureSection.vue';
export default {
        name: 'FirstPage',
        components: {
                NavBar,
                HeroSection,
                ContributorsList,
                // FeatureSection
        }
}
</script>
<style scoped>
* {
        overflow: hidden;
}
</style>