<template>
  <div>
    <button class="button px-1 px-md-3">
      <img
        class="pr-2"
        src="https://img.icons8.com/fluency/20/000000/google-logo.png"
      />{{ buttonContent }}
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'GoogleButton',
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
  width: 100%;
  height: 56px;
  border: 0.5px solid $primary-color;
  background: #f9f8ff;
  border-radius: 7px;
  color: #000000;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
}

@include mobile {
  .button {
    font-size: 14px;
  }
}
</style>
