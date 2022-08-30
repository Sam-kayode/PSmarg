<template>
  <div>
    <button
      class="harmburger"
      :class="[{ opened: toggled }]"
      aria-label="Harmburger Menu"
      @click="toggle"
    >
      <svg width="100" height="100" viewBox="0 0 100 100">
        <path
          class="line line1"
          d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
        />
        <path class="line line2" d="M 20,50 H 80" />
        <path
          class="line line3"
          d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
        />
      </svg>
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Hamburger',
  data() {
    return { toggled: false as boolean }
  },
  created() {
    this.$nuxt.$on('toggle', this.toggle)
  },

  methods: {
    toggle() {
      this.toggled = !this.toggled
    },
  },
})
</script>

<style lang="scss" scoped>
.harmburger {
  background-color: #ffffff00;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 40;
  transition: 1s ease-out;

}

.line {
  fill: none;
  stroke: black;
  stroke-width: 6;
  

}
.line1 {
  stroke-dasharray: 60 207;
  stroke-width: 8;
}
.line2 {
  stroke-dasharray: 60 60;
  stroke-width: 8;
}
.line3 {
  stroke-dasharray: 60 207;
  stroke-width: 8;
}
.opened {
  background-color:$light;
  .line1 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 8;
    
  }
  .line2 {
    stroke-dasharray: 1 90;
    stroke-dashoffset: -90;
    stroke-width: 8;
    
  }
  .line3 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 8;
    
  }

  .line1, .line2, .line3{
    transition: stroke-dasharray 250ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 10ms;
  }
}
button {
  outline: none !important;
}

svg {
  height: 40px;
  width: 40px;
}
</style>
