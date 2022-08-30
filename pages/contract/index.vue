<template>
  <div class="contracts-contain">
    <div class="row">
      <div class="col-12 col-lg-8 pr-md-4 order-2 order-lg-1 px-0">
        <div
          class="
            d-flex
            justify-content-between
            align-items-center
            mt-5
            mb-4 mb-lg-3
          "
        >
          <h1 class="contract-head">Contracts</h1>
          <AnimatedSearch />
        </div>

        <div
          class="
            d-lg-flex
            justify-content-between
            align-items-center
            mb-4 mb-lg-5
          "
        >
          <div class="contract-nav">
            <div
              class="
                status-container
                d-flex
                align-items-center
                justify-content-between
              "
            >
              <input
                id="radio1"
                type="radio"
                name="radios"
                value="all"
                checked
              />
              <label for="radio1">All Projects</label>

              <input id="radio2" type="radio" name="radios" value="false" />
              <label for="radio2">Ongoing</label>

              <input id="radio3" type="radio" name="radios" value="true" />
              <label for="radio3">Completed</label>
            </div>
          </div>
          <div class="search-bar d-none d-lg-block">
            <ContractSearch />
          </div>
        </div>

        <ContractsTable />

        <div class="d-block d-lg-none mt-5">
          <h1 class="act-summary mt-5 pt-4 pb-3">Activity Summary</h1>
          <RecentActivities instance="b" />
        </div>
      </div>
      <div class="col-12 col-lg-4 upper-second order-1 order-lg-2 px-0">
        <h1 class="act-summary d-none d-lg-block">Activity Summary</h1>

        <div class="total-contract">
          <img src="/bubble.svg" alt="" class="bubble" />
          <h1 class="total-val mb-2">340</h1>
          <p class="p-0">Total Contract</p>

          <button v-b-modal.modal-center type="button" class="create mt-3">
            Create Contract
            <b-icon icon="chevron-right" class="chevron-right ml-4"></b-icon>
          </button>
          <b-modal id="modal-center" centered hide-footer hide-header no-stack>
            <NewContract />
          </b-modal>
        </div>

        <div class="contract-stats d-none d-lg-block">
          <div
            class="
              ongoing
              d-flex
              align-items-center
              justify-content-between
              pl-2
              pr-4
            "
          >
            <div class="d-flex align-items-center text-center">
              <span class="plus">+</span>
              <p class="m-0 d-inline-block">Ongoing Contract</p>
            </div>
            <p class="number m-0">133</p>
          </div>
          <div
            class="
              ongoing
              d-flex
              align-items-center
              justify-content-between
              pl-2
              pr-4
            "
          >
            <div class="d-flex align-items-center text-center">
              <span class="plus">+</span>
              <p class="m-0 d-inline-block">Completed Contract</p>
            </div>
            <p class="number m-0">80</p>
          </div>
        </div>

        <div class="d-none d-lg-block mt-5">
          <h1 class="act-summary mt-5">Activity Summary</h1>
          <RecentActivities />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import ContractSearch from '@/components/dashboardComponents/ContractSearch.vue'
import ContractsTable from '@/components/dashboardComponents/ContractsTable.vue'
import NewContract from '@/components/dashboardComponents/Modals/NewContract.vue'
import RecentActivities from '@/components/dashboardComponents/RecentActivities.vue'
import AnimatedSearch from '@/components/dashboardComponents/AnimatedSearch.vue'
export default Vue.extend({
  name: 'Contract',
  components: {
    ContractSearch,
    ContractsTable,
    NewContract,
    RecentActivities,
    AnimatedSearch,
  },
})
</script>

<style lang="scss" scoped>
.contracts-contain {
  width: 100vw;
  padding: 0vw 9vw 0px 9vw;
  overflow-x: hidden;

  .contract-head {
    font-family: Visuelt Pro, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;
  }

  .status-container {
    min-width: 260px;
    max-width: 300px;
  }
  .status-container input[type='radio'] {
    display: none;
  }

  .status-container label {
    display: inline-block;
    // padding: 11px 16px;
    margin: 0 4px;
    font-family: Sofia Pro, sans-serif;
    max-width: 100px;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0em;
    text-align: left;
    color: $light-text;
    cursor: pointer;
    transition: 0.2s ease-out;
  }

  .search-bar {
    width: 40% !important;
  }
  .status-container input[type='radio']:checked + label {
    color: $primary-color;
    background: #f9f8ff;
    border-radius: 25px;
    font-weight: 600;
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
    z-index: 5;
  }

  .chevron-right {
    width: 10px;
  }

  .total-contract {
    width: 100%;
    background: linear-gradient(107.72deg, #1e96fc 0%, #2522a7 100%);
    border-radius: 7px;
    padding: 38px;
    color: $light;
    position: relative;
    overflow: hidden;

    p {
      font-family: Sofia Pro, sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 14px;
      letter-spacing: 0em;
      text-align: left;
    }

    .bubble {
      position: absolute;
      right: -30px;
      top: 0;
    }
  }

  .act-summary {
    font-family: Visuelt Pro, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
  }
  .total-val {
    font-family: Sofia Pro, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  }

  .plus {
    width: 47px;
    height: 47px;
    font-size: 30px;
    border: 1px solid #f7f7f7;
    box-sizing: border-box;
    border-radius: 8px;
  }

  .ongoing {
    p {
      font-family: Sofia Pro, sans-serif;
      font-size: 13px;
      font-style: normal;
      font-weight: 300;
      line-height: 13px;
      letter-spacing: 0em;
      text-align: left;
      color: $light-text;
    }

    .number {
      font-family: Sofia Pro, sans-serif;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 18px;
      letter-spacing: 0em;
      text-align: left;
      color: $dark-text;
    }
  }
}

@include mobile {
  .contracts-contain {
    padding: 0vw 7vw 0px 7vw;
    .row {
      width: 100%;
      margin: 0 auto;
    }
  }

  .status-container label {
    padding: 11px 10px !important;
  }
}
</style>
