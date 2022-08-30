<template>
  <div class="total-contract">
    <p class="available">TOTAL CONTRACTS VALUE</p>
    <h1 class="total-val mb-2">$ 340,000 <span> .78</span></h1>

    <div class="d-flex align-items-center mt-2">
      <!-- <b-icon class="stat-icon" icon="caret-left-fill"></b-icon> -->
      <!-- <p class="stats m-0">36.5%</p> -->
    </div>
    <img src="/graph.svg" alt="" class="graph" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: '',
})
</script>

<style lang="scss" scoped>
.total-contract {
  width: 100%;
  height: 100%;
  border-radius: 7px;
  padding: 33px 37px;
  color: $light;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
  border-radius: 7px;

  .available {
    font-family: Visuelt Pro, sans-serif;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0.055em;
    text-align: left;
    color: rgba(7, 1, 70, 0.64);
  }

  .total-val {
    font-family: Visuelt Pro, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: left;
    color: #070146;

    span {
      font-weight: 300;
    }
  }

  .bubble {
    position: absolute;
    right: -30px;
    top: 0;
  }
}

.stats {
  color: rgba(7, 160, 85, 1);
  font-family: Visuelt Pro, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
}
.stat-icon {
  color: rgba(7, 160, 85, 1);
}

.graph {
  position: absolute;
  max-width: 187px;
  right: 0;
  bottom: 0;
}
</style>
