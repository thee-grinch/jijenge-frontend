<script>
import ApexCharts from 'apexcharts'

export default {
  props: {
    series: {
      type: Array,
      required: true
    },
    names: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: 'donut',
        },
        labels: this.names // Use the names prop as the labels for the chart
      }
    }
  },
  mounted() {
    this.renderChart(this.series)
  },
  methods: {
    renderChart(series) {
      this.chartOptions.series = series;
      const chart = new ApexCharts(document.querySelector('#chart'), this.chartOptions)
      chart.render()
    },
  }
}
</script>
<template>
  <div>
    <div id="chart"></div>
  </div>
</template>
