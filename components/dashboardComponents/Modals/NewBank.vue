<template>
  <div class="newCard-contain">
    <h1 class="add-new">Add New Bank Account</h1>
    <div class="bank-contain">
      <BasicInput
        v-model="acc_num"
        :placeholder="'Account Number'"
        class="account-number"
        type="number"
      />
       <BasicInput
        v-model="bank_name"
        :placeholder="'Card Number'"
        class="card-number"
        type="number"
      />
      <p class="error">{{ bank_error }}</p>
    </div>


    <BlueButton
      :button-content="'Add Bank Account'"
      class="addCard-btn mx-auto mt-4"
      @click.native="addBank()"
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
      card_number: '',
      card_error: '' as string,
      cvv: '',
      cvv_error: '',
      year: '',
      year_error: '',
      month: '',
      error: '',
    }
  },
  watch: {
  },
  methods: {
    addBank() {
     
    },
    checkDetails() {
    
    },
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
