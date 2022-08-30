<template>
  <div class="Container">
    <div class="auth-contain"><AuthNav /></div>
    <div class="content-contain">
      <nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AuthNav from '@/components/AuthNav.vue'

export default Vue.extend({
  components: {
    AuthNav,
  },
  data() {
    return {}
  },
})
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 100%;
}

.Container {
  height: 100vh;
  overflow-y: hidden;
}

.auth-contain {
  max-width: 85rem;
  margin: 0 auto;
}
.content-contain {
  // max-width: 70rem;
  margin: 0 auto;
  padding: 0 20px;
}

@include mobile {
  .content-contain {
    // max-width: 70rem;
    margin: 0 auto;
    padding: 0 20px;
    height: calc(100% - 200px);
  }
}
</style>
