<template>
  <div class="login">
    <div class="inner-login">
      <img src="/shake.jpg" alt="" />
      <h4>Contract Invitation</h4>
      <p>
        {{ superAdmin }} has Invited you as a Collaborator to Contract
        <span class="">{{ contractName }}</span>
      </p>
      <Button
        :button-content="'Accept Invitation'"
        class="open_email mx-auto"
        :loading="loading"
        @click.native="acceptInvite"
      />
    </div>
    <b-toast id="accept-toast" :variant="variant" solid>
      {{ feedback }}
    </b-toast>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '@/components/BlueButton.vue'

export default Vue.extend({
  components: { Button },
  layout: 'auth',
  middleware: 'authenticated',

  data() {
    return {
      loading: false,
      error: '',
      feedback: '',
      variant: '',
      superAdmin: '',
      contractName: '',
    }
  },
  async created() {
    const id = this.$route.params.accept
    const userEmail = this.$store.state.auth.user.email
    try {
      const res = await this.$smargApi.$get(`contract/detail/${id}`)

      this.contractName = res.data.contract_name

      const collaborators = res.data.collaborator

      const present = collaborators.some((person: any) => {
        return person.email === userEmail
      })

      const superAdmin = collaborators.filter(
        (collaborator: any) => collaborator.user_role === 'superadmin'
      )
      this.superAdmin = superAdmin[0].name

      console.log(res, superAdmin, present, id, userEmail, this.superAdmin)

      if (!present || !id) {
        this.$router.push({ path: '/login' })
      }
    } catch (error: any) {
      if (error) {
        const err = error.response.data.message
        this.error = err
      }
    }
  },
  methods: {
    async acceptInvite() {
      this.loading = true
      const data = {
        invite_status: 'accepted',
        contract_id: this.$route.params.accept,
        signature: 'teegeg',
      }
      try {
        const result: [] = await this.$smargApi.$patch(
          `/collaborator/invitation/${this.$route.params.accept}`,
          data
        )
        console.log(result)
      } catch (error: any) {
        if (error) {
          const err = error.response.data.message
          this.variant = 'danger'
          this.feedback = err
          this.$bvToast.show('accept-toast')
        }
      }
      this.loading = false
      this.$router.push({ path: `/contract/id/${this.$route.params.accept}` })
    },
  },
})
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -100px;
}
.inner-login {
  text-align: center;
  max-width: 515px;
  padding: 26px 91px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  margin-bottom: 26px;
  img {
    max-width: 220px;
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
    span {
      font-weight: 700;
    }
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

@include mobile {
  .inner-login {
    padding: 26px 20px;
  }
}
</style>
