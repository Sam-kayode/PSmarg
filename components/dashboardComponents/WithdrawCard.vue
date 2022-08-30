<template>
  <div class="d-flex d-md-block align-items-end">
    <div>
      <p class="available text-md-center p-0 mt-5">AVAILABLE BALANCE</p>
      <div class="balance text-left text-md-center">
        <span class="balance-lg">$ {{ $store.state.payment.amount }}</span>
        <!-- <span class="balance-sm ml-md-3">.78</span> -->
      </div>

      <div class="d-flex align-items-center justify-content-md-center mt-2">
        <!-- <b-icon class="stat-icon" icon="caret-left-fill"></b-icon> -->
        <!-- <p class="stats m-0">36.5%</p> -->
      </div>
    </div>
    <div class="withdraw_btn mx-md-auto mt-4 ml-auto ml-md-0">
      <WithdrawModal />
      <Button
        class=""
        :button-content="buttonContent"
        @click.native="$bvModal.show('modal-multi-1')"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '@/components/BlueButton.vue'
import WithdrawModal from '~/components/dashboardComponents/Modals/WithdrawModals.vue'
export default Vue.extend({
  name: 'WithdrawCard' as string,
  components: {
    Button,
    WithdrawModal,
  },
  data() {
    return {
      buttonContent:
        'Withdraw Funds\u{000A0}\u{000A0}\u{000A0}\u{000A0}\u{0279A}' as string,
    }
  },
})
</script>
<style lang="scss" scoped>
.available {
  font-family: Visuelt Pro, sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0.055em;
  text-align: left;
  padding: 17px 0px;
  color: rgba(7, 1, 70, 0.64);
}

.balance-lg {
  font-family: Visuelt Pro, sans-serif;
  font-size: 140%;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;
  color: #070146;
}

.balance-sm {
  font-family: Visuelt Pro, sans-serif;
  font-size: 140%;
  font-style: normal;
  font-weight: 300;
  line-height: 32px;
  letter-spacing: 0em;

  color: #070146;
}
.stats {
  color: rgba(7, 160, 85, 1);
}
.stat-icon {
  color: rgba(7, 160, 85, 1);
}
.withdraw_btn {
  width: 160px;
}

@include mobile {
  .balance-lg,
  .balance-sm {
    font-size: 130%;
  }
}
</style>
