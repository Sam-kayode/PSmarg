<template>
  <div class="profile-image">
    <dropdown-menu :direction="'right'" :overlay="false" :is-open="show">
      <div slot="trigger">
        <span class="profile-pic" @click="showdrop">
          <img :src="$store.state.auth.user ? profilePic : ''" alt="" />
          <span class="edit d-flex align-items-center justify-content-center">
            <b-icon icon="pencil-fill"></b-icon>
          </span>
        </span>
        <spinner v-if="loading" class="img-spinner" />
      </div>

      <div
        slot="body"
        class="d-flex flex-column align-items-center justify-content-center m-0"
      >
        <p class="p-0 m-0" @click="dropUpload">Upload Profile Picture</p>
      </div>
    </dropdown-menu>
    <div class="d-none">
      <span>Upload to Cloudinary</span>
      <input
        ref="fileInput"
        type="file"
        accept=".jpeg,.jpg,.png,image/jpeg,image/png"
        aria-label="upload image button"
        class="fileInput"
        single
        @change="selectFile"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'
declare module 'vue/types/vue' {
  interface Vue {
    $bvToast: any
    $cloudinary: any
  }
}

export default Vue.extend({
  data() {
    return {
      show: false,
      userPic: '',
      loading: false,
    }
  },
  computed: {
    profilePic() {
      return this.$store.state.auth.user.profile_picture
    },
  },
  methods: {
    ...mapMutations(['auth/changeProfile']),
    showdrop() {
      this.show = !this.show
    },
    dropUpload() {
      ;(this.$refs.fileInput as HTMLElement).click()
      this.showdrop()
    },

    async selectFile(e: any) {
      const file = e.target.files[0]
      this.loading = true
      /* Make sure file exists */
      if (!file) return

      /* create a reader */
      const readData = (f: any) =>
        new Promise((resolve) => {
          const reader = new FileReader()
          reader.onloadend = () => resolve(reader.result)
          reader.readAsDataURL(f)
        })

      /* Read data */
      const data = await readData(file)

      /* upload the converted data */
      const instance = await this.$cloudinary.upload(data, {
        folder: 'profile_pic',
        uploadPreset: 'lqcpluti',
      })

      const res = await instance
      const newPic = {
        profile_picture: await res.url,
      }
      this.$store.commit('auth/changeProfile', newPic)
      this.loading = false
    },
  },
})
</script>

<style lang="scss">
.profile-image {
  .v-dropdown-menu__container {
    position: absolute;
    top: 100%;
    left: 100%;
    bottom: auto;
    min-width: 190px !important;
    width: 200px !important;
    height: 40px !important;
    overflow: hidden;
    background-color: #fff;
    border-radius: 7px !important;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
    p {
      line-height: 40px;
      font-family: Sofia Pro, sans-serif;
      font-size: 15px;
      font-style: normal;
      cursor: pointer;
    }

    &:hover {
      background-color: rgb(230, 230, 230);
    }
  }
}
.profile-pic {
  width: 18px;
  height: 20px;
  position: relative;
  cursor: pointer;

  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
}
.edit {
  border-radius: 50%;
  display: block;
  position: absolute;
  top: 23px;
  right: 2px;
  width: 24px;
  height: 24px;
  background: $primary-color;
  border: 3px solid #ffffff;
  cursor: pointer;
  svg {
    border-bottom: 2px solid $light;
    width: 10px;
    height: 10px;
    color: $light;
  }
}

.img-spinner {
  position: relative;
  right: 24px !important;
  top: 24.5px !important;
}
</style>
