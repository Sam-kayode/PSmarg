<template>
  <div class="card-contain">
    <h1 class="header">Saved Banks</h1>
    <p class="agree">By signing up, I agree to the product’s</p>
    <BankList />
    <p class="new" @click="$bvModal.show('modal-bank')">Add New Bank</p>
    <b-modal id="modal-bank" centered hide-footer hide-header no-stack>
        <NewBank/>
      </b-modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
 
})
</script>
<style lang="scss" scoped>
.card-contain {
  margin-left: 29px;
}
.header {
  font-family: Visuelt Pro, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 51px;
}

.agree {
  font-family: Sofia Pro, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: left;
  color: $light-text;
  margin-bottom: 28px;
}

.new {
  font-family: Sofia Pro, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 0em;
  color: $primary-color;
  margin-top: 34px;
  cursor: pointer;
}
</style>
