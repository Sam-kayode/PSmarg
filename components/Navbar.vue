<template>
  <div class="navbar">
    <div class="sec1 col-2 col-md-2 d-flex p-0">
      <Sidenav class="d-lg-none" />
      <img class="logo" src="/logo.svg" alt="" />
    </div>
    <div class="sec2 col-6 d-none d-lg-flex">
      <Navlink
        v-for="route in routes"
        :key="route.id"
        :route="route.path"
        :icon="route.icon"
        :route-name="route.name"
      />
    </div>
    <div class="sec3 col-2 p-0 d-none d-lg-block">
      <!-- <Search /> -->
    </div>
    <div
      class="
        sec4
        d-flex
        align-items-center
        justify-content-end
        p-0
        m-0
        col-6 col-md-2
      "
    >
      <Notification class="mr-3" />
      <Avatar class="avatar-component" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import Search from './dashboardComponents/Search.vue'
export default Vue.extend({
  components: {
    // Search,
  },
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
    toggle() {},
  },
})
</script>

<style lang="scss" scoped>
.navbar {
  padding: 0 49px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background: #ffffff;
  height: 100px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
  z-index: 100;
}

.logo {
  position: relative;
  z-index: 9;
}

@include lg-tablet {
  .navbar {
    padding: 0 10px;
    height: 80px;
  }

  .avatar-component {
    margin-right: 20px;
  }
}

@include mobile {
  .avatar-component {
    margin-right: 6px;
  }
  .navbar {
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.12);
  }
}
</style>
