<template>
  <div class="login-container d-flex justify-content-center">
    <div class="login">
      <div class="inner-login">
        <img src="/streamline.png" alt="" />
        <h4>Confirmation Link Sent</h4>
        <p>
          We sent a confirmation link to your email address. Kindly click the
          link to confirm
        </p>
        <Button :button-content="open_email" class="open_email mx-auto" />
      </div>
      <div class="inner-bottom d-md-flex text-center">
        <p class="wrong">Wrong Email?</p>
        <p class="resend ml-md-auto">
          Didn’t get the link? <span>Resend Code</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '@/components/BlueButton.vue'

export default Vue.extend({
  components: { Button },
  layout: 'auth',
  middleware: 'auth_2',

  data() {
    return {
      open_email: 'Open Email App',
    }
  },
})
</script>

<style lang="scss" scoped>
.login {
  max-width: 600px;
}
.inner-login {
  text-align: center;
  max-width: 515px;
  padding: 26px 91px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  margin-bottom: 26px;
  img {
    max-width: 167px;
  }
  h4 {
    font-family: Visuelt Pro, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: center;
    color: $dark-text;
  }
  p {
    font-family: Sofia Pro, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;
    color: $light-text;
  }
  .open_email {
    font-family: Sofia Pro, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: center;
    margin-top: 41px;
  }
}

.inner-bottom {
  .wrong {
    font-family: Sofia Pro, sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0em;
    color: $primary-color;
  }

  .resend {
    font-family: Sofia Pro, sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 300;
    line-height: 22px;
    letter-spacing: 0em;
    span {
      font-family: Sofia Pro, sans-serif;
      font-size: 15px;
      font-style: normal;
      font-weight: 600;
      line-height: 22px;
      letter-spacing: 0em;
      color: $primary-color;
    }
  }
}

@include mobile {
  .inner-login {
    padding: 26px 20px;
  }
}
</style>
