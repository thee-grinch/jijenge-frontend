<template ref="landing">
        <FirstPage />
        <FeatureSection ref="feature"/>
        <TestmonialSection ref="testmonials"/>
        <WorksSection />
        <FooterSection />
</template>
<script>
import FirstPage from '@/components/FirstPage.vue';
import FeatureSection from '@/components/FeatureSection.vue';
import TestmonialSection from '@/components/TestmonialSection.vue';
import WorksSection from '@/components/WorksSection.vue';
import FooterSection from '@/components/FooterSection.vue';
export default {
        name: 'LandingPage',
        components: {
                FirstPage,
                FeatureSection,
                TestmonialSection,
                WorksSection,
                FooterSection
        }
}
</script>