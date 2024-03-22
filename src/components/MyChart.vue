<template>
  <div class="chart-container">
    <apexchart width="100%" height="100%" :options="chartOptions" :series="series" type="bar" />
  </div>
</template>
<script>
import { reactive } from 'vue';
import VueApexCharts from 'vue3-apexcharts';

export default {
  components: {
    apexchart: VueApexCharts,
  },
  props: {
    data: {
      type: Array,
      required: true
    },
    categories: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const chartOptions = reactive({
      chart: {
        id: 'basic-line',
        toolbar: {
          show: false
        }
      },
      xaxis: {
        categories: props.categories
      }
    });

    const series = reactive([{
      name: 'Series 1',
      data: props.data
    }]);

    return {
      chartOptions,
      series
    };
  }
};
</script>

<style scoped>
.chart-container {
  /* min-height: 200px; */
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
</style>
