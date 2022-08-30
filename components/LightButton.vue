<template>
  <div>
    <button class="button" :style="{}">
      <slot> </slot>
      {{ buttonContent }}
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Button',
  props: {
    buttonContent: {
      type: String,
      default: null,
    },
  },
})
</script>

<style lang="scss" scoped>
.button {
  background: #edf1ff;
  border-radius: 7px;
  color: $primary-color;
  font-family: Sofia Pro, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: center;
  padding: 12px 18px;
  border: none;
  transition: ease-out 0.3s;
  height: 100%;
  width: 100%;
      
  &:hover {
    background: $primary-color;
    color: $light;
    transition: ease-in 0.3s;
  }

  .copy-img {
    width: 18px;
    background-color: $light;
    padding: 0;
  }
}
</style>
