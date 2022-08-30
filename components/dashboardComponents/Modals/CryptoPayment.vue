<template>
  <div class="crypto-container text-center mx-auto">
    <h1 class="crypto-p">Crypto Payment</h1>
    <p class="status">The status of a client or freelancer is based on</p>
    <BasicInput :placeholder="'Crypto Address'" class="text-left" />
    <p class="policy mx-auto">
      By signing up, I agree to the product’s <span> Privacy Policy </span> and
      <span>Terms of Service</span>
    </p>
    <BlueButton
      class="crypto-button mx-auto"
      :button-content="'Pay $55,000 '"
      @click.native="$bvModal.show('modal-5')"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'CryptoPayment',
})
</script>

<style lang="scss" scoped>
.crypto-container {
  max-width: 400px;
  padding: 20px 10px;
}

.crypto-p {
  font-family: Visuelt Pro, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: center;
}

.status {
  font-family: Sofia Pro, sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;
  color: $light-text;
  margin-top: 12px;
}

.policy {
  max-width: 322px;
  font-family: Sofia Pro, sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: 20px;
  letter-spacing: 0em;
  color: $light-text;
  text-align: center;
  margin-top: 91px;

  span {
    font-weight: 400;
    color: $dark-text;
  }
}

.crypto-button {
  margin-top: 42px;
  max-width: 190px;
}
</style>
