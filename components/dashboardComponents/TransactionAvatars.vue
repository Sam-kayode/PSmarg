<template>
  <span class="notification credit">
    <img src="/notification.svg" alt="" />
  </span>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
<style lang="scss" scoped>
.notification {
  width: 18px;
  height: 20px;
  position: relative;
  cursor:pointer;
}

.credit::before {
  content: ' ';
  border-radius: 50%;
  display: block;
  position: absolute;
  top: 0;
  right: -2px;
  width: 12px;
  height: 12px;
  background: #fea520;
  border: 2px solid #ffffff;
}
</style>
