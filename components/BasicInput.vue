<template>
  <input
    class="basic-input"
    :type="type"
    :value="value"
    :placeholder="placeholder"
    :readonly="readonly"
    @input="onInput"
  />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    value: {
      type: String || Number,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onInput(event: any) {
      this.$emit('input', event.target.value)
    },
  },
})
</script>
<style lang="scss">
.basic-input {
  width: 100%;
  height: 56px;
  border: 0.5px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 7px;
  outline: none;
  padding: 21px 28px;
  margin: 10px 0;
  font-family: Visuelt Pro;
  font-size: 14.1px;
  color: $dark-text;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: left;
  line-height: 38px !important;
}

::placeholder {
  font-family: Sofia Pro, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  letter-spacing: 0em;
  text-align: left;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}
</style>
