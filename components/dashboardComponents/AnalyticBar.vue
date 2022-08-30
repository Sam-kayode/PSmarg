<template>
  <client-only>
    <div class="chart-contain">
      <bar-chart :data="dataCollection" :options="options" :height="height">
      </bar-chart>
    </div>
  </client-only>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'AnalyticBar',
  props: {
    dataCollection: {
      type: Object,
      default: null,
    },
    height:{

      type:Number,
      default:200,
    }
  },
  data() {
    return {
      options: {
        scales: {
          xAxes: [
            {
              gridLines: {
                color: 'rgba(0, 0, 0, 0)',
              },
            },
          ],
          yAxes: [
            {
              display: false,
              gridLines: {
                color: 'rgba(0, 0, 0, 0)',
              },
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
        legend: {
          display: false,
        },
        responsive: true,
        maintainAspectRatio: true,
      },

    }
  },
})
</script>
<style lang="scss" scoped>
.chart-contain {
  max-width: 100%;
}
</style>
