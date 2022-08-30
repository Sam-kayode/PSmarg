<template>
  <div class="transac-contain">
    <h1 class="add-new">Add Transaction Details</h1>
    <p class="status">The status of a client or freelancer is based on</p>
    <keep-alive>
      <form @submit.prevent="makePayment()">
        <div class="cardNumber-contain">
          <BasicInput
            v-model="name"
            :placeholder="'Description'"
            class="card-number"
            disabled
          />
        </div>

        <div class="amount">
          <span id="currency" class="pl-2">USD</span>
          <BasicInput
            v-model="amount"
            :placeholder="'Amount'"
            type="number"
            disabled
          />
        </div>
        <div class="pl-1">
          <div class="col-12 col-sm p-0 pl-sm-1 amount-cont">
            <vue-phone-number-input
              v-model="phone_number2"
              size="lg"
              class="mt-3 mb-2"
              error-color="#ff0000"
              valid-color="#0906c0"
              @update="onUpdate"
            />
          </div>
        </div>

        <BlueButton
          :button-content="'Proceed'"
          class="addCard-btn mx-auto mt-4"
          :loading="loading"
        />
      </form>
    </keep-alive>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VuePhoneNumberInput from 'vue-phone-number-input'
import 'vue-phone-number-input/dist/vue-phone-number-input.css'
Vue.component('VuePhoneNumberInput', VuePhoneNumberInput)
export default Vue.extend({
  name: 'NewCard',
  data() {
    return {
      details: this.$store.state.contract.contractDetails.contract_name,
      amount: JSON.parse(
        JSON.stringify(
          this.$store.state.contract.contractDetails.contract_amount.toString()
        )
      ),
      name: JSON.parse(
        JSON.stringify(
          this.$store.state.contract.contractDetails.contract_name.toString()
        )
      ),
      phone_number: '',
      phone_number2: '',
      dial: [] as any,
      codes: '',
      loading: false,
      phoneDetails: {},
    }
  },
  computed: {},
  mounted() {
    this.getCountries()
  },
  methods: {
    onUpdate(payload) {
      this.phone_number = payload.formattedNumber
    },
    async makePayment() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 5000)
      const data = {
        narration: this.details,
        phone_number: `${this.phone_number}`,
        amount: this.amount,
      }
      console.log('lol')
      this.$store.commit('payment/setCard', data)
      try {
        await this.$store.dispatch(
          'payment/cardPayment',
          this.$store.state.payment.cardDetails
        )
        console.log(this.$store.state.payment.cardDetails)
      } catch (error: any) {
        if (error) {
          console.log(error)
        }
      }
    },
    async getCountries() {
      const result = await this.$smargApi.$get(
        'https://restcountries.com/v2/all?fields=callingCodes'
      )
      console.log(result)

      for (let i = 0; i < result.length; i++) {
        this.dial.push(result[i].callingCodes[0])
      }
      const arr = this.dial
      const uniqueChars = [] as any
      arr.forEach((c: any) => {
        if (!uniqueChars.includes(c)) {
          uniqueChars.push(c)
        }
      })

      this.dial = uniqueChars.sort(function (a: any, b: any) {
        return a - b
      })
    },
  },
})
</script>
<style lang="scss">
.transac-contain {
  padding: 44px 5%;

  .add-new {
    font-family: Visuelt Pro, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: center;
    color: $dark-text;
  }

  .amount {
    position: relative;

    #currency {
      font-family: Sofia Pro, sans-serif;
      font-size: 14px;
      font-weight: 500;
      text-align: left;
      color: $dark-text;
      font-weight: bolder;
      width: 50px;
      border: none;
      background: $light;
      outline: none;
      cursor: pointer;
      position: absolute;
      top: 25px;
      left: 10px;
      margin-bottom: 10px;
    }

    input {
      padding-left: 70px;
    }
  }

  .card-number {
    // padding-right: 58px;
  }

  .addCard-btn {
    max-width: 190px;
  }

  .amount-cont {
    position: relative;

    label {
      // display: none !important;
    }

    input {
      padding-left: 35px !important;
      padding-bottom: 12px !important;

      &::placeholder {
        color: red;
        line-height: 10px;
        opacity: 0;
        font-size: 10px;
      }
    }

    .input-tel__label {
      // position: relative;
      margin-top: 50px !important;
      width: 180px;
      margin-left: -12px;
      display: none;
    }

    .has-hint,
    .has-value {
      margin-bottom: 15px !important;
      padding-bottom: 10px !important;
    }
    .country-selector {
      label {
        display: none !important;
      }

      &__input {
        padding-left: 35px !important;
        padding-bottom: 15px !important;
      }
      &__country-flag {
        top: 20px !important;
      }
      &__toggle__arrow {
        margin-bottom: 25px !important;
      }
    }

    .amount {
      font-family: Sofia Pro, sans-serif;
      padding-left: 65px;
      padding-right: 10px;
      font-size: 16px;
    }
    #currency {
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
  }
}
</style>
