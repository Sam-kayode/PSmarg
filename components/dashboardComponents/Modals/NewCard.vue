<template>
  <div class="newCard-contain">
    <h1 class="add-new">Add New Card</h1>
    <p class="status">The status of a client or freelancer is based on</p>
    <div class="cardNumber-contain">
      <the-mask
        v-model="card_number"
        mask="####  ####  ####  ######"
        class="number"
      />
      <b-icon icon="credit-card2-back" aria-hidden="true" class="h1"></b-icon>
    </div>
    <p class="error">{{ card_error }}</p>
    <div class="row">
      <div class="col pr-2">
        <BasicInput
          v-model="cvv"
          :placeholder="'CVV'"
          maxlength="3"
          type="number"
          oninput="if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
        />

        <p class="error">{{ cvv_error }}</p>
      </div>
      <div class="col pl-2 expiry">
        <BasicInput
          v-model="month"
          :placeholder="'MM'"
          maxlength="2"
          class="ml-2 p-2 text-center"
          type="number"
        />
        <h1 class="mx-2">/</h1>
        <BasicInput
          ref="year"
          v-model="year"
          :placeholder="'YY'"
          maxlength="2"
          class="mr-2 p-2 text-center"
          type="number"
          oninput="if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
        />
      </div>
    </div>
    <p class="error">{{ error }}</p>

    <BlueButton
      :button-content="'Add Card'"
      class="addCard-btn mx-auto mt-4"
      @click.native="addCard()"
    />
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'NewCard',
  data() {
    return {
      card_number: '',
      card_error: '' as string,
      cvv: '',
      cvv_error: '',
      year: '',
      year_error: '',
      month: '',
      error: '',
      options: {
        creditCard: true,
        delimiter: '-',
      },
    }
  },
  watch: {
    month() {
      if (this.month.length === 2) {
        const res = (this.$refs.year as Vue).$el as any
        res.focus() as Element
      }
    },
  },
  methods: {
    addCard() {
      this.checkDetails()
      if (!this.card_error && !this.cvv_error && !this.year_error) {
        const data = {
          card_number: this.card_number,
          cvv: this.cvv,
          expiry_month: this.month,
          expiry_year: this.year,
        }

        this.$store.commit('payment/setCard', data)
        this.$bvModal.show('modal-11')
      } else {
        this.error = 'Incomplete transaction details'
        setTimeout(() => {
          this.error = ''
        }, 5000)
      }
    },
    checkDetails() {
      if (this.card_number.length !== 16) {
        this.card_error = 'Invalid Card Number'
        setTimeout(() => {
          this.card_error = ''
        }, 5000)
      }
      if (this.cvv.length !== 3) {
        this.cvv_error = 'Incomplete cvv '
        setTimeout(() => {
          this.cvv_error = ''
        }, 5000)
      }
      if (this.year.length !== 2 || this.month.length !== 2) {
        this.year_error = 'Invalid date '
        setTimeout(() => {
          this.year_error = ''
        }, 5000)
      }
    },
  },
})
</script>
<style lang="scss" scoped>
.newCard-contain {
  padding: 44px 5%;
  .number {
    width: 100%;
    height: 56px;
    border: 0.5px solid #e0e0e0;
    box-sizing: border-box;
    border-radius: 7px;
    outline: none;
    padding: 18px 28px;
    margin: 10px 0;
    font-family: Visuelt Pro;
    font-size: 16px;
    color: $dark-text;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: left;
    line-height: 38px !important;
  }
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

  .status {
    font-family: Sofia Pro, sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
    color: $light-text;
  }

  .card-number {
    padding-right: 58px;
  }

  .addCard-btn {
    max-width: 190px;
  }

  .cardNumber-contain {
    position: relative;
    img,
    svg {
      display: inline-block;
      position: absolute;
      top: 18px;
      right: 12px;
    }
  }

  .expiry {
    display: flex;
    justify-content: space-between;
    h1 {
      color: rgb(169, 169, 169);
    }
  }

  .error {
    color: red;
    font-family: Sofia Pro, sans-serif;
    font-size: 15px;
  }
}
</style>
