<template>
  <div class="mx-auto">
    <client-only>
      <div class="chart-contain mx-auto">
        <Doughnut :data="dataCollection" :options="options" :height="280" class="pl-2">
        </Doughnut>
      </div>
    </client-only>
    <div class="legends  mt-2">
       <div class="legend mx-auto"> <div class="color-1 mr-2"></div>Successful Conract</div> 
          <br>
      <div class="legend mx-auto"> <div class="color-2 mr-2"></div>Unsuccessful Conract
      </div>
     
      </div> 
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'AnalyticBar',
  data() {
    return {
      dataCollection: {
        labels: ['Successful Contract', 'Unsuccessful Contract'],
        datasets: [
          {
            backgroundColor: ['#1E96FC', '#09005D'],
            data: [65, 35],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        legend: {
          display: false,
        },
        cutoutPercentage: 87,
      },
    }
  },
})
</script>
<style lang="scss" scoped>
.chart-contain {
  max-width: 100%;
}

.legends{
    font-family: Sofia Pro, sans-serif;
font-size: 11px;
font-style: normal;
font-weight: 500;
line-height: 11px;
letter-spacing: 0em;
text-align: left;

}
.legend{
    max-width:130px;
    text-align: left;
}
.color-1{
    width:10px;
    height:10px;
background: #1E96FC;
display: inline-block;
}.color-2{
    width:10px;
    height:10px;
background: #09005D;
display: inline-block;
}
</style>
