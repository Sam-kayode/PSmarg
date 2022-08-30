<template>
  <div class="login-container mt-md-5">
    <div class="text-center login m-auto">
      <h1 class="welcome">Welcome Back</h1>
      <p class="enter">Enter your account details to Sign In</p>
      <div class="">
        <form @submit.prevent="onLogin">
          <BasicInput
            v-model="email"
            :placeholder="email_holder"
            type="email"
            required
          />
          <PasswordInput
            v-model="password"
            :placeholder="password_holder"
            required
          />
          <p class="policy">Forgot Password ?</p>
          <div class="buttons row px-3">
            <GoogleButton
              :button-content="googlebtn_holder"
              class="col p-1 login_btn"
            /><Button
              :button-content="signin_holder"
              class="col p-1 login_btn"
              :loading="loading"
              :disabled="loading"
              @click.native="onLogin"
            />
          </div>
        </form>
        <p class="member text-center mt-5">
          Not a member ?
          <Nuxt-link to="/register"> <span>Sign Up</span></Nuxt-link>
        </p>
      </div>
    </div>
    <b-toast id="my-toast" :variant="variant" solid>
      {{ feedback }}
    </b-toast>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '@/components/BlueButton.vue'
import BasicInput from '@/components/BasicInput.vue'
export default Vue.extend({
  components: { BasicInput, Button },

  beforeRouteEnter(to, from, next) {
    next((vm: any) => {
      vm.from = from.path
      vm.to = to.path
    })
  },
  layout: 'auth',
  data() {
    return {
      email: '',
      password: '',
      signin_holder: 'Sign In',
      googlebtn_holder: 'Sign in with Google',
      email_holder: 'Email Address',
      password_holder: 'Enter Password',
      loading: false,
      feedback: '',
      variant: '',
      from: '',
      to: '',
    }
  },
  middleware: 'auth_2',
  computed: {},
  // created() {
  //   if (this.$store.state.auth.user) {
  //     this.$router.push({ path: '/dashboard' })
  //   }
  // },
  methods: {
    async onLogin(e: any) {
      this.loading = true
      e.preventDefault()
      const data = {
        strategy: 'normal',
        email: this.email,
        password: this.password,
      }

      try {
        await this.$store.dispatch('auth/login', data)
        if (this.from.includes('accept' || 'confirmation')) {
          this.$router.push({ path: this.from })
          console.log(this.from)
          this.from = ''
        } else {
          this.$router.push({ path: '/dashboard' })
        }
      } catch (error: any) {
        if (error) {
          console.log(error)
          let err
          if (error.response !== undefined) {
            err = error.response.data.message
          } else {
            err = 'Error Signing into Account'
          }

          this.variant = 'danger'
          this.feedback = err
          this.$bvToast.show('my-toast')
        }
      }
      this.loading = false
    },

    pass(value: string) {
      this.password = value
    },
  },
})
</script>

<style lang="scss" scoped>
.login-container {
  height: calc(100vh - 117px);
}

.login {
  max-width: 515px;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.05);
  padding: 30px 36px;
  border-radius: 8px;

  .welcome {
    font-family: Visuelt Pro, sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: center;
    color: #040403;
  }

  .enter {
    font-family: Sofia Pro, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;
    color: #5a5a5a;
  }
}

.member {
  font-family: Sofia Pro, sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;

  span {
    font-family: Sofia Pro, sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: $primary-color;
  }
}

.policy {
  font-family: Sofia Pro, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
  margin-top: 40px;
  span {
    font-weight: bold;
  }
}

@include tablet {
  .login {
    max-width: 400px;
    padding: 40px 10px;
  }
}
</style>
