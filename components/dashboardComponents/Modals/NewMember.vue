<template>
  <div class="invite-new text-center">
    <p class="new-member pt-2 text-center">Invite New Member</p>
    <p class="status mt-2 text-center">
      The status of a client or freelancer is based on who created the contract
      or who
    </p>
    <BasicInput v-model="colName" placeholder="Collaborator  Name" />
    <BasicInput v-model="email" placeholder="Enter Email Address" />
    <div class="d-flex align-items-center justify-content-between mt-2">
      <dropdown-menu :direction="'right'" :overlay="false" :is-open="showDrop">
        <div slot="trigger" @click="showdrop()">
          <span class="time-drop d-flex justify-content-between">
            <span>{{ value }}</span>
            <span><b-icon icon="chevron-down" class=""></b-icon></span>
          </span>
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
          <p class="my-0" @click="setTime('superadmin')">Superadmin</p>
          <p class="my-0" @click="setTime('contributor')">Contributor</p>
        </div>
      </dropdown-menu>

      <dropdown-menu :direction="'right'" :overlay="false" :is-open="showDrop2">
        <div slot="trigger" @click="showdrop2()">
          <span class="time-drop d-flex justify-content-between">
            <span>{{ value2 }}</span>
            <span><b-icon icon="chevron-down" class=""></b-icon></span>
          </span>
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
          <p class="my-0" @click="setTime2('freelancer')">Freelancer</p>
          <p class="my-0" @click="setTime2('client')">Cliet</p>
        </div>
      </dropdown-menu>
    </div>
    <BlueButton
      button-content="Invite Member"
      class="invite-btn"
      :loading="loading"
      @click.native="addCollaborator"
    />
    <b-toast id="member-toast" :variant="variant" solid>
      {{ feedback }}
    </b-toast>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'NewMember',
  props: {
    id: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      loading: false,
      showDrop: false as boolean,
      showDrop2: false as boolean,
      value: 'User Role',
      value2: 'Collaborator Type',
      email: '',
      colName: '',
      feedback: '',
      variant: '',
      error: '',
    }
  },
  methods: {
    showdrop() {
      this.showDrop = !this.showDrop
    },
    showdrop2() {
      this.showDrop2 = !this.showDrop2
    },
    setTime(val: string) {
      this.value = val
      this.showdrop()
    },
    setTime2(val: string) {
      this.value2 = val
      this.showdrop2()
    },
    async addCollaborator() {
      this.loading = true
      const data = {
        contract_id: this.id,
        collaborator_type: this.value2,
        user_role: this.value,
        name: this.colName,
        email: this.email,
      }
      try {
        await this.$store.dispatch('contract/addCollaborator', data)
      } catch (error: any) {
        if (error) {
          console.log(error)
          this.feedback = 'Error updating collaborator'
          this.variant = 'danger'
          this.$bvToast.show('member-toast')
        }
      }

      if (!this.error) {
        this.feedback = 'Collaborator added successfully'
        this.variant = 'success'
        this.$bvToast.show('member-toast')
      }
      this.loading = false
      setTimeout(() => {
        this.$bvModal.hide('modal-center2')
      }, 2000)
    },
  },
})
</script>

<style lang="scss" scoped>
.invite-new {
  max-width: 523px;
  padding: 44px 71px 64px 71px;

  .success {
    width: 102px;
  }

  .new-member {
    font-family: Visuelt Pro, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
  }
  .status {
    font-family: Sofia Pro, sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    color: $light-text;
  }

  .invite-btn {
    max-width: 190px;
    margin: 60px auto 0 auto;
  }
}

@include mobile {
  .invite-new {
    padding: 20px 10px;
  }
}
</style>
