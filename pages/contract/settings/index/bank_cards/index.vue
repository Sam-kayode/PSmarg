<template>
  <div>
    <div class="bank-nav">
      <Nuxt-link to="/contract/settings/bank_cards/">
        <span clas="nav">Cards</span></Nuxt-link
      >
      <Nuxt-link to="/contract/settings/bank_cards/banks">
        <span clas="nav">Banks</span>
      </Nuxt-link>
      <Nuxt-link to="/contract/settings/bank_cards/wallets">
        <span clas="nav">wallets</span>
      </Nuxt-link>
      <NuxtChild />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
<style lang="scss" scoped>
.bank-nav {
  margin-top: 39px;
  span {
    margin-left: 29px;
    font-family: Visuelt Pro, sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: left;
    color: $light-text;
  }
  a {
    text-decoration: none;
  }
}

.nuxt-link-exact-active {
  span {
    font-weight: 500;
    border-bottom: 2px solid #09005d;
    color: $dark-text;
  }
}
</style>
