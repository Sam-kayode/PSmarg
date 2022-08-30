<template>
  <div class="transaction text-center">
    <img src="/success.svg" class="success ml-2 mb-4" alt="" />

    <p class="trans-success pt-2 text-center">Transaction Successful</p>
    <p class="status mt-2 text-center">
      The status of a client or freelancer is based on who created the contract
      or who
    </p>
    <Nuxt-link to="/dashboard">
        <BlueButton
        class="got-btn mx-auto mt-5"
        :button-content="'Okay, Got it'"
        @click.native=";[$bvModal.hide(modalId)]"
    /></Nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TransacSuccesful',
  props: {
    modalId: { type: String, default: '' as string },
  },

})
</script>

<style lang="scss" scoped>
.transaction {
  max-width: 523px;
  padding: 36px 109px;

  .success {
    width: 102px;
  }

  .trans-success {
    font-family: Visuelt Pro, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
  }
  .status {
    font-family: Sofia Pro, sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    color: $light-text;
  }
  .got-btn {
    width: 190px;
    height: 56px;
  }
}

@include mobile {
  .transaction {
    padding: 20px 10px;
  }
}
</style>
