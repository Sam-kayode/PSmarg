<template>
  <div class="basic-cont">
    <h1 class="basic text-center">Basic Information</h1>
    <p class="status text-center">
      The status of a client or freelancer is based on
    </p>
    <form @submit.prevent="">
      <div class="mx-auto form">
        <p class="contract-info mb-2">Contract Information</p>
        <div class="row m-0 pb-2">
          <div class="col-12 col-sm p-0 pr-sm-1">
            <BasicInput
              v-model="contract_name"
              :placeholder="'Contract Name'"
              required
            />
          </div>

          <div class="col-12 col-sm p-0 pl-sm-1 amount-cont">
            <p id="currency" class="pl-2">USD</p>
            <BasicInput
              v-model="contract_amount"
              class="amount"
              placeholder="Amount"
              type="number"
              required
            />
          </div>
        </div>
        <textarea
          v-model="description"
          class="contact-desc mb-5"
          name="subject"
          placeholder="Contact Description"
          required
        ></textarea>
        <p class="error m-0">{{ content_err }}</p>
        <div v-if="!show" class="add" @click="show = true">
          Add collaborator<img src="~/static/add.png" class="add-img" alt="" />
        </div>
        <!-- <div class="d-flex align-items-center">
          <p class="contract-info">Add Collaborator</p>
          <
        </div> -->

        <!-- <div class="row m-0 pb-2" v-if="show">
          <div class="p-0 pr-sm-1 col-12 col-md-6">
            <BasicInput
              v-model="collaborator_name"
              :placeholder="'Client Name'"
            />
          </div>
          <div class="p-0 pl-sm-1 col-12 col-md-6">
            <BasicInput
              v-model="collaborator_mail"
              :placeholder="'Client Email Address'"
            />
          </div>
          <div class="p-0 col-12 col-md-6">
            <BasicInput v-model="collaborator_type" :placeholder="'Role'" />
          </div>
        </div> -->

        <AddCollaborator v-if="show" @addCollaborator="addCollaborator" />
        <BlueButton
          :button-content="'Continue'"
          class="continue mx-auto"
          @click.native="nextForm()"
        />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'BasicInfo',
  data() {
    return {
      contract_name: '',
      contract_amount: '',
      currency: 'Naira',
      description: '',
      collaborators: [],
      error: '',
      content_err: '',
      show: false,
    }
  },
  methods: {
    nextForm() {
      if (!this.contract_name || !this.contract_amount || !this.description) {
        this.content_err = 'Kindly fill the missing fields'
        setTimeout(() => {
          this.content_err = ''
        }, 5000)
      } else {
        this.$emit('nextForm', 'UploadContract')
        this.$emit('nextView', 2)
        this.setRoleState()
      }
    },
    setRoleState() {
      const today = new Date()
      const data = {
        contract_name: this.contract_name,
        contract_amount: parseInt(this.contract_amount, 10),
        currency: 'Naira',
        deadline: today.toISOString(),
        description: this.description,
        user_id: `${this.$store.state.auth.user.id}`,
        collaborator: [],
      }

      if (this.collaborators) {
        data.collaborator = this.collaborators
        this.setContract(data)
        console.log(data)
      } else {
        const data2 = {
          contract_name: this.contract_name,
          contract_amount: parseInt(this.contract_amount, 10),
          currency: 'Naira',
          deadline: today.toISOString(),
          description: this.description,
          user_id: `${this.$store.state.auth.user.id}`,
        }
        this.setContract(data2)
      }
    },
    setContract(data: any) {
      try {
        this.$store.commit('contract/setContract', data)
      } catch (error: any) {
        if (error) {
          const err = error.response.data.message
          this.error = err
        }
      }
    },
    addCollaborator(collaborators) {
      this.collaborators = collaborators
    },
  },
})
</script>

<style lang="scss" scoped>
.basic-cont {
  padding: 0 20px;
  .basic {
    font-family: Visuelt Pro, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: center;
  }

  .status {
    font-family: Sofia Pro, sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
  }
  .amount-cont {
    position: relative;
  }
  #currency {
    font-family: Sofia Pro, sans-serif;
    font-size: 14px;
    font-weight: 500;
    text-align: left;
    color: $dark-text;
    width: 50px;
    border: none;
    background: $light;
    outline: none;
    cursor: pointer;
    position: absolute;
    top: 29px;
    left: 10px;
    margin-bottom: 10px;
  }

  .form {
    max-width: 660px;
    padding: 50px 0px;

    .error {
      font-family: Sofia Pro, sans-serif;
      font-size: 14px;
      color: red;
      margin-top: -20px !important;
      margin-bottom: 10px;
    }
  }

  .amount {
    padding-left: 70px;
    padding-top: 26px;
    font-family: Sofia Pro, sans-serif;
    font-size: 18px;
  }

  .contact-desc {
    width: 100%;
    min-height: 190px;
    border: 0.5px solid #e0e0e0;
    box-sizing: border-box;
    border-radius: 7px;
    padding: 21px 28px;
    outline: none;
  }

  .contract-info {
    font-family: Visuelt Pro, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    padding: 20px 5px 0 0;
  }

  .continue {
    width: 180px;
    margin: 90px 0px;
  }

  .add {
    padding: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $primary-color;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s ease-out;
    color: #ffffff;
    width: 200px;
    padding: 10px 15px;
    margin: auto;
    &:hover {
     transform:scale(1.02)
    }
  }

  .add-img {
    width: 30px;
  }
}
</style>
