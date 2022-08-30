<template>
  <div>
    <h1 class="header">Account Settings</h1>
    <div class="settings-contain">
      <div
        class="d-flex justify-content-between align-items-center settings-nav"
      >
        <Nuxt-link
          v-for="(route, index) in childRoutes"
          :key="index"
          :to="route.path"
        >
          <span class="settings-nav-item">{{ route.name }}</span></Nuxt-link
        >
      </div>
      <NuxtChild />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Settings',
  data() {
    return {
      childRoutes: [
        { name: 'Profile', path: '/contract/settings' },
        {
          name: 'Security',
          path: '/contract/settings/security',
        },
        {
          name: 'Cards & Banks',
          path: '/contract/settings/bank_cards/',
        },
      ],
    }
  },
})
</script>
<style lang="scss" scoped>
.settings-contain {
  max-width: 580px;
  margin: 41px auto 200px auto;
}
.header {
  font-family: Visuelt Pro, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  max-width: 750px;
  margin: 0 auto;
}

.settings-nav {
  max-width: 400px;

  span {
    font-family: Sofia Pro, sans-serif;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0em;
    text-align: left;
    padding: 11px 30px;
    border-radius: 25px;
    color: $light-text;
    transition: 0.4s ease-out;
  }
  a {
    text-decoration: none !important;
  }
}
// .nuxt-link-active,
.nuxt-link-exact-active {
  .settings-nav-item {
    font-weight: 600;
    line-height: 13px;
    color: $primary-color !important;
    transition: 0.4s ease-out;

  }
}
@include mobile {
  .header {
    padding: 0px 25px;
  }
}
</style>
