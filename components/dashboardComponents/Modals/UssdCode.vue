<template>
  <div class="ussd-code text-center mx-auto">
    <img src="/phonebub.svg" class="" alt="" />
    <h2 class="ussd">USSD Code</h2>
    <p class="copy">
      Copy and dial the code below on your phone to pay <span>$55,000 </span>
    </p>
    <LightButton class="copy-btn px-3">
      *894*0004*0204#
      <img
        src="/copy.svg"
        alt=""
        class="ml-3 copy-img img-fluid d-inline-block"
      />
    </LightButton>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'UssdCode',
})
</script>

<style lang="scss" scoped>
.ussd-code {
  max-width: 305px;
  padding: 70px 0px;
  img {
    width: 102px;
  }
}
.ussd {
  font-family: Visuelt Pro, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: center;
  margin-top: 41px;
}

.copy {
  font-family: Sofia Pro, sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;
  margin-top: 12px;

  span {
    font-weight: 600;
  }
}

.copy-btn {
  margin-top: 32px;

  box-sizing: border-box;
}

.copy-img {
  width: 18px;
}
</style>
