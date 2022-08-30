<template>
  <div class="hamburger-container">
    <div v-if="toggled" class="overlay" @click="busToggle"></div>
    <Hamburger
      class="mr-2 mr-md-4"
      :class="{ move: toggled }"
      @click.native="toggle"
    />
    <transition name="slide">
      <div v-if="toggled" class="sidenav">
        <ul
          class="
            d-flex
            flex-column
            align-items-center
            justify-content-center
            mx-auto
          "
        >
          <li
            v-for="route in routes"
            :key="route.id"
            class="py-4 text-left"
            @click="busToggle"
          >
            <Nuxt-link :to="route.path">
              <div class="d-flex text">
                <img class="side-icon" :src="route.icon" alt="" />
                <p class="m-0 navlink pl-3">{{ route.name }}</p>
              </div></Nuxt-link
            >
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Sidenav',
  data() {
    return {
      toggled: false as boolean,
      routes: [
        { name: 'Home', path: '/dashboard', icon: '/group.svg', id: 1 },
        {
          name: 'Contracts',
          path: '/contract',
          icon: '/hand-shake.svg',
          id: 2,
        },
        {
          name: 'Payments',
          path: '/payments',
          icon: '/bank-card-fill.svg',
          id: 3,
        },
      ],
    }
  },
  methods: {
    toggle() {
      this.toggled = !this.toggled
    },
    busToggle() {
      this.toggle()
      this.$nuxt.$emit('toggle')
    },
  },
})
</script>
<style lang="scss" scoped>
.sidenav {
  position: fixed;
  left: 0;
  top: 0;
  width: 55vw;
  height: 100vh;
  z-index: 9;
  background: #f9f8ff;

  ul {
    width: 140px;
    height: 100vh;
    background: #f9f8ff;
    z-index:9999999999999;

    li {
      list-style: none;
      width: 100%;
    }
  }
  a:hover {
    text-decoration: none;
  }

  .navlink {
    font-family: Sofia Pro, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0em;
    text-align: center;
    color: #2522a7;
  }

  .side-icon {
    width: 30px;
    height: 30px;
  }
}

.move {
  position:relative;
  top:-20px;
  z-index:9999999999;
  left:calc(100vw - 50px) !important;
}

.overlay {
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.205);
  cursor: pointer;
  top: 0;
  left: 0;
  z-index: 9;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 250ms ease-in 0s;
}

@include tablet {
  .hamburger-container {
    position: relative;
    width: 100vw;
  }
}
</style>
