<template>
  <div class="newCard-contain">
    <h1 class="add-new">Add New Wallet Address</h1>
    <p class="status">By signing up, I agree to the product’s</p>

    <div class="bank-contain">
      <BasicInput
        v-model="wallet_address"
        :placeholder="'Wallet Address'"
        class="account-number"
        type="number"
      />
      <BasicInput
        v-model="wallet_name"
        :placeholder="'Wallet Name'"
        class="card-number"
        type="number"
      />
      <p class="error">{{ bank_error }}</p>
    </div>

    <BlueButton
      :button-content="'Add Wallet Address'"
      class="addCard-btn mx-auto mt-4"
      @click.native="addWallet()"
    />
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'NewCard',
  data() {
    return {
      wallet_name:"",
      wallet_address:""
    }
  },
  watch: {},
  methods: {
    addWallet() {},
    checkDetails() {},
  },
})
</script>
<style lang="scss" scoped>
.newCard-contain {
  padding: 44px 5%;

  .add-new {
    font-family: Visuelt Pro, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: center;
    color: $dark-text;
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
  }

  .account-number {
    padding-right: 58px;
  }

  .addCard-btn {
    max-width: 190px;
  }

  .bank-contain {
    position: relative;
    img {
      display: inline-block;
      position: absolute;
      top: 30px;
      right: 18px;
    }
  }

  .expiry h1 {
    color: rgb(169, 169, 169);
  }

  .error {
    color: red;
    font-family: Sofia Pro, sans-serif;
    font-size: 15px;
  }
}
</style>
