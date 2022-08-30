<template>
  <div class="">
    <Navbar />
    <div class="spacer"></div>
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '@/components/Navbar.vue'

export default Vue.extend({
  components: { Navbar },
  middleware: 'authenticated',
  async fetch() {
    if (this.$store.state.auth.user) {
      await this.$store.dispatch('contract/getContracts',1)
      await this.$store.dispatch('payment/getWallet')
      await this.$store.dispatch('payment/getCards')
    }
  },
})
</script>

<style lang="scss">
* {
  box-sizing: border-box !important;
  margin: 0;
  padding: 0;
}

html {
  width: 100vw;
}

body {
  font-family: sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  overflow-x: hidden;
}

.spacer {
  height: 150px;
}

@include lg-tablet {
  .spacer {
    height: 120px;
  }
}
@include mobile {
  .spacer {
    height: 110px;
  }
}
</style>
