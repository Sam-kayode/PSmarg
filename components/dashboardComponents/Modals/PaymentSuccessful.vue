<template>
  <div class="p-success text-center">
    <img
      v-if="status == 'successful'"
      src="/success.svg"
      class="success ml-2 mb-4"
      alt=""
    />
    <div v-else class="failure"><p>&#215;</p></div>
    <p class="trans-success pt-2 text-center">
      Transaction <span v-if="status == 'successful'">Successful</span>
      <span v-else>Failed</span>
    </p>
    <p class="status mt-2 text-center">
      The status of a client or freelancer is based on who created the contract
      or who
    </p>
    <Nuxt-link to="/dashboard">
      <BlueButton
        class="got-btn mx-auto mt-5"
        :button-content="'Proceed to contract'"
    /></Nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TransacSuccesful',
  props: {
    status: { type: String, default: '' as string },
  },
})
</script>

<style lang="scss" scoped>
.p-success {
  max-width: 523px;
  padding: 36px 80px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
  @include mobile {
    padding: 36px 10px;
  }
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

  .failure {
    color: #ffffff;
    background: rgb(232, 62, 62);
    border-radius: 50%;
    height: 80px;
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    p {
      font-size: 80px;
      line-height: 90px;
      margin: 0;
    }
  }
}

@include mobile {
  .transaction {
    padding: 20px 10px;
  }
}
</style>
