<template>
  <div class="profile-contain">
    <ProfilePic />
    <h1 class="header">Basic Information</h1>
    <p class="agree">By signing up, I agree to the product’s</p>
    <form @submit.prevent="">
      <div class="row">
        <div class="col-md-6 mt-3">
          <p class="input-desc">First Name</p>
          <BasicInput
            v-model="user.first_name"
            placeholder="First Name"
            :readonly="true"
          />
        </div>
        <div class="col-md-6 mt-3">
          <p class="input-desc">Last Name</p>
          <BasicInput
            v-model="user.last_name"
            placeholder="Last Name"
            :readonly="true"
          />
        </div>
        <div class="col-md-6 mt-3">
          <p class="input-desc">Phone Number</p>
          <BasicInput
            v-model="user.phone_number"
            placeholder="Phone Number"
            type="number"
            @wheel="$event.target.blur()"
          />
        </div>
        <div class="col-md-6 mt-3">
          <p class="input-desc">Email Address</p>
          <BasicInput
            v-model="user.email"
            placeholder="Email Address"
            :readonly="true"
          />
        </div>
        <!-- <div class="col-md-6 mt-3">
          <p class="input-desc mb-2">Date of Birth</p>
          <date-picker
            v-model="value1"
            format="YYYY-MM-DD"
            type="date"
            placeholder="Select date"
          ></date-picker>
        </div> -->

        <Signature />
      </div>
      <div class="changes ml-auto">
        <BlueButton
          :loading="loading"
          button-content="Save Changes"
          @click.native="changeProfile"
        />
      </div>
    </form>
    <b-toast id="my-toast" :variant="variant" solid>
      {{ feedback }}
    </b-toast>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
export default Vue.extend({
  data() {
    return {
      value1: null,
      user: JSON.parse(JSON.stringify(this.$store.state.auth.user)),
      loading: false,
      feedback: '',
      variant: '',
    }
  },
  methods: {
    ...mapActions(['auth/changeProfile']),
    async changeProfile() {
      this.loading = true
      const data = {
        phone_number: this.user.phone_number,
        profile_picture: this.$store.state.auth.user.profile_picture,
      }
      try {
        await this['auth/changeProfile']({ data })
        this.feedback = 'Profile Changed Successfully!'
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
      this.loading = false
    },
  },
})
</script>
<style lang="scss">
.profile-contain {
  padding-top: 48px !important;

  .header {
    font-family: Visuelt Pro, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    color: $dark-text;
    margin-top: 45px;
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

  .mx-datepicker {
    width: 100%;
    height: 56px;
  }

  .mx-input {
    height: 56px;
  }

  .changes {
    width: 180px;
    margin-top: 68px;
  }
}

@include mobile {
  .profile-contain {
    padding: 0px 25px 50px 25px;
  }
}
</style>
