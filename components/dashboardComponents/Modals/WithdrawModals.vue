<template>
  <div>
    <b-modal
      id="modal-multi-1"
      title="First Modal"
      centered
      ok-only
      no-stacking
      hide-footer
      hide-header
    >
      <div class="withdraw-fund">
        <p class="withdraw-heading text-center">Withdraw Fund</p>
        <p class="withdraw-desc text-center">
          The status of a client or freelancer is based on
        </p>
        <div class="amount-cont">
          <p id="currency" class="pl-2">USD</p>
          <BasicInput
            v-model="contract_amount"
            class="amount"
            placeholder="Amount"
            type="number"
            required
          />
        </div>

        <p class="available mx-auto text-center">
          Available balance : <span> $500,000.45</span>
        </p>

        <div class="mt-3">
          <BlueButton
            class="continue mx-auto"
            :button-content="'Continue'"
            @click.native="$bvModal.show('modal-multi-2')"
          />
        </div>
      </div>
    </b-modal>

    <b-modal
      id="modal-multi-2"
      title="Second Modal"
      ok-only
      centered
      no-stacking
      hide-footer
      hide-header
    >
      <div class="withdraw-amount">
        <p class="back text-left" @click="$bvModal.show('modal-multi-1')">
          <span class="caret mr-2">&#10094;</span> Back to Amount
        </p>
        <div class="withdraw-cont">
          <p class="withdraw-desc text-center">WITHDRAW AMOUNT</p>
          <p class="amount text-center">
            <span class="mr-3">$ 340,000</span> .78
          </p>

          <div class="mt-3">
            <p for="card" class="d-block card-label">
              Select Withdrawal Method
            </p>
            <fieldset class="p-0">
              <div>
                <input
                  id="bank_acc"
                  v-model="withdraw_type"
                  type="radio"
                  name="drone"
                  value="bank"
                />
                <label for="bank_acc">Bank Account</label>
              </div>
              <div>
                <input
                  id="crypto"
                  v-model="withdraw_type"
                  type="radio"
                  name="drone"
                  value="crypto"
                />
                <label for="crypto">Crypto wallet</label>
              </div>
            </fieldset>
          </div>
          <div class="drops">
            <SelectWallet v-if="withdraw_type === 'crypto'" />
            <SelectBank v-if="withdraw_type === 'bank'" />
          </div>
          <div class="mt-3">
            <BlueButton
              class="withdraw mx-auto"
              :button-content="'Withdraw $55,000'"
              @click.native="$bvModal.show('modal-multi-5')"
            />
          </div>
        </div>
      </div>
    </b-modal>

    <b-modal
      id="modal-multi-3"
      title="Third Modal"
      ok-only
      centered
      no-stacking
      hide-footer
      hide-header
    >
      <div class="withdraw-amount">
        <p class="back text-left" @click="$bvModal.show('modal-multi-1')">
          <span class="caret mr-2">&#10094;</span> Back to Amount
        </p>
        <div class="withdraw-cont">
          <p class="new-header text-center">Add New Bank</p>
          <p class="new-desc text-center">
            The status of a client or freelancer is based on
          </p>

          <div class="mt-5">
            <label for="bank" class="d-block bank-label"> Select Bank</label>
            <SelectCard />
            <BasicInput
              class="amount"
              :placeholder="'Account Number'"
              :type="'number'"
            />
            <p class="new mt-3">OGUNLADE, OLUSAYO JULIANA</p>
          </div>
          <div class="mt-3">
            <BlueButton
              class="withdraw mx-auto"
              :button-content="'Add Bank'"
              @click.native="$bvModal.show('modal-multi-4')"
            />
          </div>
        </div>
      </div>
    </b-modal>

    <b-modal
      id="modal-multi-4"
      title="Third Modal"
      ok-only
      centered
      no-stacking
      hide-footer
      hide-header
    >
      <div class="withdraw-amount">
        <p class="back text-left" @click="$bvModal.show('modal-multi-1')">
          <span class="caret mr-2">&#10094;</span> Back to Amount
        </p>
        <div class="withdraw-cont">
          <p class="new-header text-center">Confirm Bank Details</p>
          <p class="new-desc text-center pb-5">
            A 6-digit verification has been sent to
            <span class="font-weight-bold"> 081***09 </span>
          </p>

          <div class="mt-3">
            <BlueButton
              class="withdraw mx-auto"
              :button-content="'Confirm Bank'"
              @click.native="$bvModal.show('modal-multi-2')"
            />
          </div>

          <p class="receive mt-3">
            Didn’t receive any code? <br /><a href="#" class="resend"
              >Resend Code</a
            >
          </p>
        </div>
      </div>
    </b-modal>

    <b-modal
      id="modal-multi-5"
      title="Fifth Modal"
      ok-only
      centered
      no-stacking
      hide-footer
      hide-header
    >
      <TransacSuccessful :modal-id="'modal-multi-5'" />
    </b-modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'WithdrawModal',
  data() {
    return {
      withdraw_type: '',
      contract_amount: '',
    }
  },
})
</script>

<style lang="scss" scoped>
.withdraw-fund {
  max-width: 523px;
  padding: 52px 71px;
  .amount {
    padding-left: 100px;
  }

  .withdraw-heading {
    font-family: Visuelt Pro, sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 26px;
    text-align: center;
  }

  .withdraw-desc {
    font-family: Sofia Pro, sans-serif;
    font-size: 15px;
    font-weight: 400;
    line-height: 22px;
    text-align: center;
    margin-top: 12px;
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
    top: 27px;
    left: 10px;
    margin-bottom: 10px;
  }

  select {
    font-family: Sofia Pro, sans-serif;
    font-size: 14px;
    font-weight: 500;
    text-align: left;
    color: $dark-text;
    width: 70px;
    border: none;
    background: $light;
    outline: none;
    cursor: pointer;
    position: absolute;
    top: 50px;
    left: 10px;
  }

  .available {
    font-family: Visuelt Pro, sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 31px;
    text-align: left;
    color: $primary-color;
    background-color: #f6f5ff;
    width: 217px;
    margin-top: 20px;

    span {
      font-weight: 700;
    }
  }
  .continue {
    max-width: 190px;
    margin-top: 15%;
  }
}

.withdraw-amount {
  .caret {
    font-size: 10px;
    position: relative;
    bottom: 3px;
  }
  .withdraw-cont {
    padding: 25px 50px;
  }

  .withdraw-desc {
    font-family: Visuelt Pro, sans-serif;
    font-size: 10px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0.055em;
    text-align: left;
    color: $light-text;
  }

  .amount {
    font-family: Visuelt Pro, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: 31px;
    letter-spacing: 0em;
    span {
      font-weight: 700;
    }
  }
  fieldset {
    label {
      font-family: Visuelt Pro, sans-serif;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0.055em;
      text-align: left;
      color: $dark-text;
    }
  }
  option {
    height: 60px;
  }

  .new {
    font-family: Sofia Pro, sans-serif;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0em;
    text-align: left;
    color: $primary-color;
    cursor: pointer;
  }

  .withdraw {
    max-width: 190px;
    margin-top: 20%;
  }
}

.bank-label,
.card-label {
  font-family: Visuelt Pro, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: $dark-text;
}
.back {
  font-family: Sofia Pro, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0em;
  text-align: left;
  color: $primary-color;
  cursor: pointer;
}

#card,
#bank {
  width: 100%;
  height: 56px;
  padding: 5px 17px;
  border-radius: 7px;
  border: none;
  background: none;
  outline: none;
  border: 0.5px solid #e0e0e0;
  font-family: Sofia Pro, sans-serif;
  font-size: 14px;
  font-weight: 300;
  line-height: 14px;
  color: $dark-text;
}
.new-header {
  font-family: Visuelt Pro, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: center;
  color: $dark-text;
}

.new-desc {
  font-family: Sofia Pro, sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;
  color: $light-text;
}

.receive {
  font-family: Sofia Pro, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 20px;
  letter-spacing: -0.01em;
  text-align: center;
  color: #646464;

  .resend {
    font-weight: 400;
    color: $dark-text;
  }
}

@include mobile {
  .withdraw-fund {
    padding: 5px 20px;
  }

  .withdraw-cont {
    padding: 5px 20px !important;
  }
}
</style>
