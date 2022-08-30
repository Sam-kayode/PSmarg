<template>
  <div class="security-contain">
    <h1 class="header">Update Password</h1>
    <p class="agree">By signing up, I agree to the product’s</p>
    <form @submit.prevent="changePass">
      <div class="row">
        <div class="col-md-6 mt-4">
          <p class="input-desc">Old Password</p>
          <PasswordInput
            v-model="old_pass"
            placeholder="Old Password"
            @sendPass="sendPass"
          />
        </div>
        <div class="col-md-6 mt-4">
          <p class="input-desc">New Password</p>
          <PasswordInput
            v-model="new_pass"
            placeholder="New Password"
            @sendPass="sendPass2"
          />
        </div>
      </div>
      <p class="error">{{ error }}</p>

      <div class="changes ml-auto">
        <BlueButton
          button-content="Save Changes"
          :loading="loading"
          @click="changePass"
        />
      </div>
    </form>
    <div>
      <b-toast id="my-toast" :variant="variant" solid>
        {{ feedback }}
      </b-toast>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
export default Vue.extend({
  data() {
    return {
      old_pass: '',
      new_pass: '',
      feedback: '',
      loading: false,
      variant: '',
      error: '',
    }
  },

  methods: {
    ...mapActions(['auth/changePassword']),
    async changePass() {
      this.loading = true
      const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&]{6,15}/
      const result1 = pattern.test(this.new_pass)

      if (result1) {
        const data = {
          old_password: this.old_pass,
          password: this.new_pass,
        }
        try {
          await this['auth/changePassword']({ data })
          this.feedback = 'Password Changed Successfully!'
          this.variant = 'success'
          this.$bvToast.show('my-toast')
        } catch (error: any) {
          if (error) {
            const err = error.response.data.message
            this.variant = 'danger'

            this.feedback = err

            this.$bvToast.show('my-toast')
          }
        }
        this.old_pass = ''
        this.new_pass = ''
        this.loading = false
        setTimeout(() => {
          this.$router.push({ path: '/contract/settings/profile' })
        }, 3000)
      } else {
        this.error =
          'Password must be minimum of 6 characters containing a uppercase,lowercase and numeric character '
        this.loading = false

        setTimeout(() => {
          this.error = ''
        }, 5000)
      }
    },
    sendPass(value: string) {
      this.old_pass = value
    },
    sendPass2(value: string) {
      this.new_pass = value
    },
  },
})
</script>
<style lang="scss" scoped>
.security-contain {
  .header {
    font-family: Visuelt Pro, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    color: $dark-text;
    margin-top: 46px;
  }
  .agree {
    font-family: Sofia Pro, sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: 12px;
    letter-spacing: 0em;
    text-align: left;
    color: $light-text;
  }

  .input-desc {
    font-family: Visuelt Pro, sans-serif;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
    margin: 0;
    color: $light-text;
  }

  .changes {
    width: 180px;
    margin-top: 68px;
  }
}

.error {
  font-family: Sofia Pro, sans-serif;
  font-style: normal;
  font-size: 12px;
  line-height: 20px;
  text-align: left;
  color: red;
  margin-top: 14px;
}
@include mobile {
  .security-contain {
    padding: 0px 25px 50px 25px;
  }
}
</style>
