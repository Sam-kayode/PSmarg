<template>
  <div class="pay-container mx-auto">
    <h1 class="header text-center">Choose Payment Method</h1>
    <p class="desc">The status of a client or freelancer is based on</p>

    <div
      v-b-modal.modal-crypto
      class="payment mx-auto d-flex justify-content-center align-items-center"
    >
      <img src="/wallet.svg" alt="" class="mr-4" />Pay With USDT
    </div>
    <div
      v-b-modal.modal-center
      class="
        payment
        mt-4
        mx-auto
        d-flex
        justify-content-center
        align-items-center
      "
    >
      <img src="/cellphone.svg" alt="" class="mr-4" />Pay With Card
    </div>
    <b-modal
      id="modal-crypto"
      class="p-0"
      centered
      ok-only
      no-stacking
      hide-footer
      hide-header
    >
      <CryptoPayment />
    </b-modal>
    <b-modal id="modal-center" centered hide-footer hide-header no-stacking>
      <NewCard> </NewCard>
    </b-modal>
    <div v-show="false">
      <p class="or mx-auto">Or</p>
      <hr class="hr-line mx-auto" />

      <p class="select-card pt-3">Select Card</p>
      <SelectCard />
      <p v-b-modal.modal-center class="add-new">+ <span> Add New Card</span></p>
    </div>

    <div class="d-flex justify-content-center dir-buttons">
      <BlueButton
        class="previous pr-1"
        :outlined="true"
        :button-content="'Previous'"
        @click.native=";[nextForm('UploadContract'), $emit('nextView', 2)]"
      />
      <BlueButton
        class="next pl-1"
        :button-content="'Continue'"
        @click.native="createContract"
      />

      <b-modal
        id="modal-5"
        title="Fifth Modal"
        centered
        no-stacking
        hide-footer
        hide-header
      >
        <TransacSuccessful :modal-id="'modal-5'" />
      </b-modal>
      <b-modal
        id="modal-11"
        title="eleventh Modal"
        centered
        no-stacking
        hide-footer
        hide-header
      >
        <CardSuccessful :modal-id="'modal-12'" />
      </b-modal>
      <b-modal
        id="modal-12"
        title="twelfth Modal"
        centered
        no-stacking
        hide-footer
        hide-header
      >
        <TransacDetails />
      </b-modal>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SelectCard from '@/components/dashboardComponents/SelectCard.vue'
import TransacSuccessful from '@/components/dashboardComponents/Modals/TransacSuccessful.vue'
import TransacDetails from '@/components/dashboardComponents/Modals/TransacDetails.vue'
import CryptoPayment from '@/components/dashboardComponents/Modals/CryptoPayment.vue'
import NewCard from '@/components/dashboardComponents/Modals/NewCard.vue'
import CardSuccessful from '@/components/dashboardComponents/Modals/CardSuccessful.vue'

declare module 'vue/types/vue' {
  interface Vue {
    $bvModal: any
  }
}
export default Vue.extend({
  name: 'UploadContract',
  components: {
    SelectCard,
    TransacSuccessful,
    NewCard,
    CryptoPayment,
    CardSuccessful,
    TransacDetails,
  },
  data() {
    return {
      File: [],
      isDash: false as boolean,
      error: '',
    }
  },
  methods: {
    nextForm(value: string) {
      this.$emit('nextForm', value)
    },
    async createContract() {
      try {
        await this.$store.dispatch(
          'contract/createContract',
          this.$store.state.contract.contractDetails
        )
        await this.$store.dispatch('contract/getContracts')
      } catch (error: any) {
        if (error) {
          console.log(error)
        }
      }

      this.$bvModal.show('modal-5')
    },
  },
})
</script>

<style lang="scss" scoped>
.header {
  font-family: Visuelt Pro, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 31px;
  letter-spacing: 0em;
  text-align: center;
  color: $dark-text;
}

.desc {
  font-family: Sofia Pro, sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;
  color: rgba(4, 4, 3, 0.7);
}

.payment {
  padding: 18px 30px;
  color: $dark-text;
  font-family: Sofia Pro, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 0em;
  background: #f9f8ff;
  border-radius: 7px;
  max-width: 367px;
  text-align: left;
}

.or {
  font-family: Sofia Pro, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
  position: relative;
  background-color: $light;
  text-align: center;
  z-index: 2;
  width: 40px;
  margin-top: 40px;
}

.hr-line {
  height: 1px;
  background-color: #f5f5f5;
  max-width: 360px;
  position: relative;
  bottom: 25px;
  z-index: 1;
}

.select-card {
  font-family: Visuelt Pro, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: $dark-text;
}

.pay-container {
  max-width: 370px;
}

.add-new {
  color: $primary-color;
  margin-top: 14px;

  span {
    font-family: Sofia Pro, sans-serif;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0em;
    text-align: left;
  }
}
.previous,
.next {
  width: 180px;
}

.dir-buttons {
  margin-top: 76px;
  padding-bottom: 96px;
}
</style>
