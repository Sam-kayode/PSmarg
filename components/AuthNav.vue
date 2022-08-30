<template>
  <div class="authnav d-flex">
    <NuxtLink to="/" class="mr-auto">
      <img src="/logo.svg" class="logo" alt="" />
    </NuxtLink>

    <div class="d-none d-md-flex align-items-center">
      <NuxtLink to="/" class="authnav-link"><p>Privacy Policy</p></NuxtLink>
      <NuxtLink to="/" class="authnav-link"> <p>Terms of Service</p> </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'AuthNav' as string,
})
</script>

<style lang="scss" scoped>
.authnav {
  width: 100% !important;
  padding: 45px 20px;
}
.logo {
  width: 88px;
  height:40px;
}

.authnav-link {
  padding-left: 46px;
  color: $dark-text;
  text-decoration: none;
  font-family: Sofia Pro, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0em;

  p {
    margin-bottom: 0;
  }
}

@include mobile{
  .authnav {
  width: 100% !important;
  padding: 30px 20px;
}
}
</style>
