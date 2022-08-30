<template>
  <div :ref="sentinalName" class="w-full h-px relative">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'IntersectionObserver',
  props: {
    sentinalName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isIntersectingElement: false,
    }
  },
  watch: {
    isIntersectingElement(value) {
      this.$emit('on-intersection-element', value)
    },
  },
  mounted() {
    const sentinal = this.$refs[this.sentinalName] as any

    const handler = (entries: any) => {
      if (entries[0].isIntersecting) {
        this.isIntersectingElement = true
      } else {
        this.isIntersectingElement = false
      }
    }

    const observer = new window.IntersectionObserver(handler)

    observer.observe(sentinal)
  },
})
</script>
