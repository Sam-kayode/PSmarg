<template>
  <div class="nav-item">
    <Nuxt-link :to="route">
      <div class="navlink">
        <img :src="icon" alt="" class="icon" />
        <span class="link pl-2">{{ routeName }}</span>
      </div>
    </Nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Navlink' as string,
  props: {
    route: {
      type: String,
      default: '/',
    },
    icon: {
      type: String,
      default: '',
    },
    routeName: {
      type: String,
      default: '',
    },
  },
})
</script>

<style lang="scss" scoped>
.nav-item {
  box-sizing: border-box;
  padding-top: 43px;
  margin-right: 70px;
}

.link {
  font-family: Sofia Pro, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: center;
  color: #2522a7;
}

a:hover {
  text-decoration: none;
}

.navlink {
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 39px;
  overflow: hidden;
  transition: ease-in 0.2s;
}

.icon {
  opacity: 0;
  transition: ease-out 0.3s;
  width: 20px;
  height: 20px;
}

.navlink::after {
  height: 3px;
  content: ' ';
  top: 50px;
  width: 51px;
  background-color: #2522a7;
  position: absolute;
  display: block;
  transition: ease-out 0.3s;
  margin-top: 100%;
  opacity: 0;
}

.navlink:hover {
  transform: scale(1.05);
  transition: ease-out 0.2s;
}
/* exact link will show the primary color for only the exact matching link */
.nuxt-link-exact-active, .nuxt-link-active {
  .navlink {
    color: #dd7878;
    box-sizing: border-box;
    margin-bottom: 0;

    &:hover {
      transform: scale(1);
    }

    &::after {
      opacity: 1;
      transition: ease-out 0.3s;
      margin-top: 0%;
    }

    .icon {
      opacity: 1;
      transition: ease-in 0.3s;
    }
  }
}

@include desktop {
  .nav-item {
    margin-right: 45px;
  }
}
</style>
