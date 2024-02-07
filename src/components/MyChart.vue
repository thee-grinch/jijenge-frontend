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
    data() {
      return {
        chartOptions: reactive({
          // Your chart options here
          chart: {
            id: 'basic-line',
            toolbar: {
              show: false
            }
          },
          xaxis: {
            categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August']
          }
        }),
        series: reactive([{
          name: 'Series 1',
          data: [30, 40, 35, 50, 49, 60, 70, 91]
        }])
      };
    }
  };
  </script>
  
  <style scoped>
  .chart-container {
    width: 100%;
    height: 100%;
  }
  </style>
  