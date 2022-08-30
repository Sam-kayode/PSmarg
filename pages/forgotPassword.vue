<template>
  <div class="login-container mt-5">
    <div class="text-center login m-auto">
      <h1 class="welcome">Forgot Password</h1>
      <p class="enter">Enter your email address to reset your password</p>
      <div class="">
        <form action="" class="form-contain mx-auto">
          <BasicInput v-model="email" :placeholder="email_holder" />
          <Nuxt-link to="/login"
            ><p class="policy">Back to Sign In</p></Nuxt-link
          >

          <div class="buttons row px-3">
            <Button :button-content="signin_holder" class="col p-1 login_btn" />
          </div>
        </form>

        <p class="member text-center mt-5">
          Already a member ?
          <Nuxt-link to="/login"> <span>Sign In</span></Nuxt-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '~/components/BlueButton.vue'
import BasicInput from '@/components/BasicInput.vue'

export default Vue.extend({
  components: { BasicInput, Button },
  layout: 'auth',
  middleware: 'auth_2',
  data() {
    return {
      email: '',
      signin_holder: 'Sign In',
      email_holder: 'Email Address',
    }
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
  padding: 59px 36px;
  border-radius: 8px;
  .welcome {
    font-family: Visuelt Pro, sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: center;
    color: $dark-text;
  }

  .enter {
    font-family: Sofia Pro, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;
    color: $light-text;
  }
}

.form-contain {
  max-width: 458px;
  max-height: 395px;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
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
  color: $primary-color;
  margin-top: 40px;
  font-weight: bold;
}

@include tablet {
  .login {
    max-width: 400px;
    padding: 40px 10px;
  }

  .policy {
    margin-top: 10px;
  }
}
</style>
