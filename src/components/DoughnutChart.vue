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
  computed: {
    chartOptions() {
      return {
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
      const chartOptions = {...this.chartOptions, series};
      const chart = new ApexCharts(document.querySelector('#chart'), chartOptions)
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
