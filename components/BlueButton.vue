<template>
  <div>
    <button
      :class="{ button: !outlined, outline: outlined }"
      :disabled="disabled"
    >
      <Spinner v-if="loading" /> {{ buttonContent }}

      <slot></slot>
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Button',
  props: {
    outlined: { type: Boolean, default: false },
    buttonContent: {
      type: String,
      default: null,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
.button {
  width: 100%;
  height: 56px;
  background: $primary-color;
  border-radius: 7px;
  color: #fbfbff;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  border: none;
  font-family: Sofia Pro, sans-serif;
  padding-top: 21px;
  padding-bottom: 21px;
}

.outline {
  background: #f9f8ff;
  border: 0.5px solid #2522a7;
  box-sizing: border-box;
  border-radius: 7px;
  color: $primary-color;
  width: 100%;
  height: 56px;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  font-family: Sofia Pro, sans-serif;
}
</style>
