<template>
  <div class="avatar">
    <dropdown-menu :direction="'right'" :overlay="false" :is-open="showDrop">
      <div slot="trigger" @click="showdrop()">
        <span class="avatar d-flex align-items-center">
          <img
            class="avatar-img"
            :src="$store.state.auth.user ? profilePic : ''"
            alt="" />
          <b-icon class="h6 p-0 m-0 ml-1 icon" icon="caret-down-fill"></b-icon
        ></span>
      </div>
      <div
        slot="body"
        class="
          avatar-ul
          d-flex
          flex-column
          align-items-center
          justify-content-center
          m-0
        "
      >
        <li class="avatar-li mb-3" @click="profile()">
          <span><img src="/profile.svg" alt="" /></span>My Profile
        </li>
        <li class="avatar-li mt-3" @click="logOut">
          <span><img src="/log-out.svg" alt="" /></span>Log Out
        </li>
      </div>
    </dropdown-menu>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
export default Vue.extend({
  data() {
    return {
      showDrop: false as boolean,
      userPic: '',
    }
  },
  computed: {
    profilePic() {
      return this.$store.state.auth.user.profile_picture
    },
  },
  mounted() {
    if (this.$store.state.auth.user) {
      this.userPic = this.$store.state.auth.user.profile_picture
    }
  },
  methods: {
    ...mapActions(['auth/logout']),
    showdrop() {
      this.showDrop = !this.showDrop
    },
    profile() {
      this.showdrop()
      this.$router.push({ path: '/contract/settings' })
    },
    logOut() {
      this.showdrop()
      this['auth/logout']()
      this.$router.replace({ path: '/login' })
    },
  },
})
</script>
<style lang="scss">
.avatar {
  display: inline-block;
  cursor: pointer;
  height: 50px;

  .v-dropdown-menu__container {
    position: absolute;
    top: 110%;
    bottom: auto;
    min-width: 147px !important;
    max-width: 148px !important;
    height: 116px;
    overflow: hidden;
    background-color: #fff;
    border-radius: 7px !important;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
  }
}
.avatar-img {
  width: 50px !important;
  height: 50px !important;
  border-radius: 11px;
  border: 1px solid rgba(184, 184, 184, 0.253);
}

.icon {
  color: rgba(1, 0, 63, 0.54);
  width: 10px;
}

.avatar-ul {
  width: 100%;
  height: 116px;
}
.avatar-li {
  list-style: none;
  cursor: pointer;
  font-family: Sofia Pro, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0em;
  width: 95px;
  margin: 0 auto;
  a {
    color: $dark-text;
  }
  span {
    margin-right: 15px;
  }
}

@include tablet {
  .avatar-img {
    width: 40px !important;
    height: 40px !important;
  }
}
</style>
