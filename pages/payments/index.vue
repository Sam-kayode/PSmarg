<template>
  <div class="payment-cont">
    <div class="row">
      <div class="col-lg-8 pr-md-4 pr-lg-5 order-1 px-2">
        <h1 class="title d-none d-lg-block">Payments</h1>
        <div class="row">
          <div class="col-lg balance-cont">
            <AvailableBalanceCard />
          </div>
          <div class="col-lg total-bal">
            <TotalBalanceCard />
          </div>
        </div>
      </div>
      <div class="col-lg-4 second px-3 px-md-0 d-none d-lg-block order-lg-2">
        <h1 class="sub-title">Recent Payment Method</h1>
        <CreditCard />
      </div>
      <div class="col-lg-8 pr-md-4 pr-lg-5 order-3">
        <h1 class="sub-title mb-4 lower">Transactions History</h1>
        <div
          class="d-flex justify-content-between align-items-center mb-4 mb-lg-5"
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
              <label for="radio1" class="mr-3">Income</label>

              <input id="radio2" type="radio" name="radios" value="false" />
              <label for="radio2">Spent</label>
            </div>
          </div>

          <div class="search-bar">
            <ContractSearch />
          </div>
        </div>
        <TransactionsTable />
      </div>

      <div class="col-lg-4 px-3 px-lg-0 order-2 order-lg-4">
        <div class="payment-analytics">
          <div class="d-flex justify-content-between align-items-center lower">
            <h1 class="sub-title m-0">Payment Analytics</h1>
            <dropdown-menu
              :direction="'right'"
              :overlay="false"
              :is-open="showDrop"
            >
              <div slot="trigger" @click="showdrop()">
                <span class="time-drop d-flex justify-content-between">
                  <span>{{ timeValue }}</span>
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
                <p class="my-0" @click="setTime('Last 3 months')">
                  Last 3 months
                </p>
                <p class="my-0" @click="setTime('Last Week')">Last week</p>
                <p class="my-0" @click="setTime('Last 1 year')">last 1 Year</p>
              </div>
            </dropdown-menu>
          </div>
          <p class="earned text-center">TOTAL EARNED</p>
          <p class="amount text-center">$ 340,000 <span> .78</span></p>
          <AnalyticBar :data-collection="dataCollection" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      showDrop: false as boolean,
      timeValue: 'Last 9 months' as string,
      dataCollection: {
        labels: ['Jan', '', 'Feb', '', 'March', '', 'Apr', '', ' May'],
        datasets: [
          {
            maxBarThickness: 8,
            borderRadius: 7,
            label: 'Data One',
            backgroundColor: '#1E96FC',
            data: [20, '', 13, '', 14, '', 13, '', 4, ''],
          },
          {
            maxBarThickness: 8,
            label: 'Data two',
            backgroundColor: '#09005D',
            data: [14, '', 8, '', 28, '', 33, '', 14, ''],
          },
        ],
      },
    }
  },
  methods: {
    showdrop() {
      this.showDrop = !this.showDrop
    },
    setTime(val: string) {
      this.timeValue = val
      this.showdrop()
    },
  },
})
</script>

<style lang="scss">
.payment-cont {
  width: 100vw;
  padding: 5vw 9vw 15vh 9vw;
  overflow-x: hidden;
}
.title {
  font-family: Visuelt Pro, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;

  color: $dark-text;
}

.sub-title {
  font-family: Visuelt Pro, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  color: $dark-text;
}
.balance-cont,
.total-bal {
  max-width: 400px;
}
.lower {
  margin-top: 74px;
}
.status-container {
  max-width: 130px;
  input[type='radio'] {
    display: none;
  }
}
.status-container label {
  display: inline-block;
  // padding: 11px 16px;
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
  max-width: 65%;
}
.status-container input[type='radio']:checked + label {
  color: $primary-color;
  background: #f9f8ff;
  border-radius: 25px;
  font-weight: 600;
}

.time-drop {
  border: 0.5px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 7px;
  padding: 17px;
  width: 145px;
  font-family: Sofia Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: left;
  cursor: pointer;
}
.v-dropdown-menu__container {
  position: absolute;
  top: 100%;
  bottom: auto;
  min-width: 100% !important;
  max-width: 145px !important;
  height: fit-content !important;
  overflow: hidden;
  background-color: #fff;
  border-radius: 7px !important;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);

  p {
    font-family: Sofia Pro;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: 12px;
    letter-spacing: 0em;
    text-align: left;
    padding: 10px 0;
    cursor: pointer;
  }
}

.earned {
  font-family: Visuelt Pro, sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0.055em;
  text-align: left;
  color: $light-text;
  margin-top: 75px;
}

.amount {
  font-family: Visuelt Pro, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  span {
    font-weight: 300;
  }
}

@include mobile {
  .index-cont {
    padding: 0vw 7vw 0px 7vw !important;
  }

  .lower {
    margin-top: 40px;
  }
}
</style>
