<template>
  <div class="total-contract">
    <img src="/bubble.svg" alt="" class="bubble" />
    <p class="available">AVAILABLE BALANCE</p>
    <h1 class="total-val mb-2">$ {{ $store.state.payment.amount }}</h1>

    <button
      type="button"
      class="create mt-3"
      @click="$bvModal.show('modal-multi-1')"
    >
      Withdraw Fund
      <b-icon icon="chevron-right" class="chevron-right ml-4"></b-icon>
    </button>
    <WithdrawModals />

    <b-modal id="modal-center" centered hide-footer hide-header no-stack>
      <NewContract />
    </b-modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import WithdrawModals from '@/components/dashboardComponents/Modals/WithdrawModals.vue'
export default Vue.extend({
  name: '',
  components: {
    WithdrawModals,
  },
})
</script>

<style lang="scss" scoped>
.total-contract {
  width: 100%;
  background: linear-gradient(107.72deg, #1e96fc 0%, #2522a7 100%);
  border-radius: 7px;
  padding: 33px 37px;
  color: $light;
  position: relative;
  overflow: hidden;

  p {
    font-family: Visuelt Pro, sans-serif;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0.055em;
    text-align: left;
    color: rgba(255, 255, 255, 0.64);
  }

  .total-val {
    font-family: Visuelt Pro, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: left;
    span {
      font-weight: 300;
    }
  }

  .bubble {
    position: absolute;
    right: -30px;
    top: 0;
  }
}

.create {
  padding: 19px 17px;
  background: rgba(255, 255, 255, 0.22);
  border-radius: 7px;
  border: none;
  color: $light;
  font-family: Sofia Pro, sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: left;
  position: relative;
  z-index: 2;
}

.chevron-right {
  width: 10px;
}
</style>
