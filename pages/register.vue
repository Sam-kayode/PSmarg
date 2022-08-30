<template>
  <div class="register d-flex align-items-center justify-content-center">
    <div class="row align-items-center">
      <div class="left col-lg d-none d-lg-block pr-5">
        <p class="helping">HELPING DIGITAL PRODUCTS</p>
        <h1 class="workplace">
          The workplace for remote <span> contracts</span> <br />
          gigs.
        </h1>
        <p class="remote">Smarg is a remote contract facilitators</p>
        <p class="member">
          Already a member ?
          <span> <Nuxt-link to="/login">Sign In</Nuxt-link> </span>
        </p>
      </div>
      <div class="right col-lg">
        <form class="form-contain" @submit.prevent="registerUser">
          <BasicInput
            v-model="email"
            :placeholder="email_holder"
            type="email"
            required
          />
          <div class="name d-flex">
            <BasicInput
              v-model="fname"
              :placeholder="fname_holder"
              class="first_name"
              type="text"
              required
            />
            <BasicInput
              v-model="lname"
              :placeholder="lname_holder"
              type="text"
              required
            />
          </div>
          <SelectCountry @selectCountry="selectCountry" />
          <p class="error">{{ country_error }}</p>

          <PasswordInput
            v-model="password"
            :placeholder="password_holder"
            required
            :show="show"
          />
          <p class="error">{{ error }}</p>
          <p class="policy mx-auto">
            By signing up, I agree to the product’s
            <span> Privacy Policy</span> and
            <span>Terms of Service</span>
          </p>
          <div class="buttons row px-2">
            <GoogleButton
              :button-content="googlebtn_holder"
              class="col p-1 soft"
            />
            <Button
              :button-content="signup_holder"
              class="col p-1"
              :loading="loading"
              :disabled="loading"
              @click.native="registerUser()"
            />
          </div>
          <p class="member text-center mt-3 d-lg-none">
            Already a member ?
            <Nuxt-link to="/login"> <span> Sign In </span></Nuxt-link>
          </p>
        </form>
      </div>
    </div>
    <b-toast id="my-toast" :variant="variant" solid>
      {{ feedback }}
    </b-toast>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
import GoogleButton from '@/components/GoogleButton.vue'
import Button from '@/components/BlueButton.vue'
import BasicInput from '@/components/BasicInput.vue'
import PasswordInput from '@/components/PasswordInput.vue'

declare module 'vue/types/vue' {
  interface Vue {
    $bvToast: any
  }
}

export default Vue.extend({
  components: { BasicInput, PasswordInput, Button, GoogleButton },
  layout: 'auth',
  middleware: 'auth_2',

  data() {
    return {
      email: '' as string,
      fname: '' as string,
      country_code: '' as string,
      lname: '' as string,
      password: '' as string,
      fname_holder: 'First Name' as string,
      signup_holder: 'Sign Up' as string,
      googlebtn_holder: 'Sign Up with Google' as string,
      lname_holder: 'Last Name' as string,
      email_holder: 'Email Address' as string,
      password_holder: 'Create a Password' as string,
      error: '',
      country_error: '',
      loading: false,
      feedback: '',
      variant: '',
      show: false,
    }
  },
  watch: {
    password() {
      this.show = true
    },
  },
  methods: {
    ...mapActions(['auth/register']),
    selectCountry(country: string) {
      this.country_code = country
    },
    async registerUser() {
      this.loading = true
      const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&]{6,15}/
      const result = pattern.test(this.password)
      if (result) {
        const data = {
          email: this.email,
          password: this.password,
          first_name: this.fname,
          last_name: this.lname,
          country_code: this.country_code,
          strategy: 'normal',
          wallet: {},
        }
        console.log(data)
        try {
          await this['auth/register']({ data })
        } catch (error: any) {
          if (error) {
            const err = error.response.data.message
            this.variant = 'danger'
            this.feedback = err
            this.$bvToast.show('my-toast')
          }
        }
      } else if (!this.country_code) {
        this.country_error = 'Country not selected'
        setTimeout(() => {
          this.country_error = ''
        }, 5000)
      } else {
        this.error =
          'Password must be minimum of 6 characters containing a uppercase,lowercase and numeric character '
        this.loading = false

        setTimeout(() => {
          this.error = ''
          this.country_error = ''
        }, 5000)
      }
      this.loading = false
    },
  },
})
</script>

<style lang="scss" scoped>
.register {
  height: calc(100vh - 250px);
}
.helping {
  font-family: Visuelt Pro, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px;
  letter-spacing: 0.175em;
  text-align: left;
  color: $primary-gradient;
}

.workplace {
  font-family: Visuelt Pro, sans-serif;
  font-size: 45px;
  font-style: normal;
  font-weight: 600;
  line-height: 53px;
  letter-spacing: 0em;
  text-align: left;

  span {
    background-image: url('/contract.png');
    background-size: contain;
    background-repeat: no-repeat, repeat;
    background-position: center bottom;
  }
}

.form-contain {
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.05);
  padding: 41px 35px;
  border-radius: 8px;
  max-width: 515px;
  max-height: 80vh;
}
.remote {
  font-family: SF Pro Text;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  color: $sub-text;
}

.member {
  font-family: Sofia Pro, sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  color: $dark-text;

  a {
    color: $primary-color;
  }
  span {
    font-family: Sofia Pro, sans-serif;
    font-size: 15px;
    color: $primary-color;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0em;
  }
}

.right {
  form {
    max-width: 530px;
  }
}
.first_name {
  margin-right: 23px;
}

.policy {
  font-family: Sofia Pro, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 20px;
  text-align: center;
  color: $dark-text;
  margin-top: 25px;
  max-width: 330px;
  span {
    font-weight: bold;
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
  .form-contain {
    padding: 41px 10px;
  }
  .register {
    height: 100%;
  }

  .policy {
    margin-top: 28px;
  }

  // .right{
  //   // margin-top:25vh;
  // }

  // .member{
  //   // padding-bottom:71px;
  // }
}
</style>
