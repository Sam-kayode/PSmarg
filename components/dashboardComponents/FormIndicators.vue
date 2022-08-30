<template>
  <div
    class="
      indicator-contain
      d-flex
      align-items-center
      justify-content-center
      m-auto
    "
  >
    <div class="indicator-cont d-flex justify-content-center p-2">
      <div
        class="
          initial
          indicator
          d-flex
          align-items-center
          justify-content-center
        "
        :class="[currentView > 1 ? 'final' : 'current']"
      >
        <b-icon
          v-if="currentView > 1"
          e
          icon="check2"
          class="p-0 m-0 check h4"
        ></b-icon>
        <p v-else class="number m-0">1</p>
      </div>
      <p class="indicator-desc text-center">Basic Information</p>
    </div>
    <hr class="hr-line" />
    <div class="indicator-cont d-flex justify-content-center p-2">
      <div
        class="
          initial
          indicator
          d-flex
          align-items-center
          justify-content-center
        "
        :class="[
          2 < currentView ? 'final' : '',
          2 == currentView ? 'current' : '',
        ]"
      >
        <b-icon
          v-if="2 < currentView"
          icon="check2"
          class="p-0 m-0 check h4"
        ></b-icon>
        <p v-else class="number m-0">2</p>
      </div>
      <p class="indicator-desc text-center">Upload Contract</p>
    </div>
    <hr class="hr-line" />
    <div class="indicator-cont d-flex justify-content-center p-2">
      <div
        class="
          initial
          indicator
          d-flex
          align-items-center
          justify-content-center
        "
        :class="[
          3 < currentView ? 'final' : '',
          3 == currentView ? 'current' : '',
        ]"
      >
        <p class="number m-0">3</p>
        <!-- <b-icon v-if="basic" icon="check2" class="p-0 m-0 check h4"></b-icon> -->
      </div>
      <p class="indicator-desc text-center">Payment</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'FormIndicators',
  props: { currentView: { type: Number, default: 1 } },
  data() {
    return {
      basic:false
    }
  },
})
</script>

<style lang="scss" scoped>
.indicator-contain {
  max-width: 433px;
}

.indicator {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}

.initial {
  color: $dark-text;
  font-family: Sofia Pro, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  border: 1px solid #e5e5e5;
}

.current {
  color: $light;
  background: black;
  transition: 0.5s ease-out;
}
.final {
  background-color: #61c9a8;
  color: $light;
  transition: 0.5s ease-out;
}

.hr-line {
  width: 34%;
  background-color: #61c9a8;
  height: 1px;
}

.indicator-cont {
  position: relative;
}
.indicator-desc {
  position: absolute;
  top: 50px;
  font-family: Sofia Pro, sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  width: 120px;
}
@include mobile {
  .hr-line {
    width: 25%;
    background-color: #61c9a8;
    height: 1px;
  }

  .indicator-desc {
    width: 80px;
  }
}
</style>
