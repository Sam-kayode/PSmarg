<template>
  <div class="index-cont">
    <div class="upper-half row">
      <div class="col-md-8 upper-first pr-md-4 pr-lg-5">
        <GreetingCard />
      </div>
      <div class="col-md-4 upper-second px-3 px-md-0">
        <WithdrawCard />
      </div>
    </div>

    <div class="lower-half row">
      <div class="col-lg-8 lower-first pr-md-4 pr-lg-5">
        <div class="activity-sum">
          <p class="activities-title">Activities Summary</p>
          <div class="activity-summary">
            <ActivityCards />
          </div>
          <div
            class="
              contract-analytics
              d-flex
              justify-content-between
              align-items-center
            "
          >
            <div>
              <span class="activities-title m-0">Contract Analytics</span>
            </div>
            <div>
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
                  <p class="my-0" @click="setTime('Last 1 year')">
                    last 1 Year
                  </p>
                </div>
              </dropdown-menu>
            </div>
          </div>

          <div class="analytic row mx-auto">
            <div class="analytic-bar mt-5 col-8 d-none d-md-block">
              <AnalyticBar :data-collection="dataCollection" :height="200" />
            </div>
            <div class="analytic-pie mt-5 col-md-4 p-0">
              <AnalyticPie />
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 lower-second px-3 px-lg-2">
        <p class="activities-title mt-lg-0">Recent Activities</p>
        <RecentActivities />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import GreetingCard from '@/components/dashboardComponents/GreetingCard.vue'
import WithdrawCard from '@/components/dashboardComponents/WithdrawCard.vue'
import ActivityCards from '@/components/dashboardComponents/ActivityCard.vue'
import AnalyticBar from '@/components/dashboardComponents/AnalyticBar.vue'
import AnalyticPie from '@/components/dashboardComponents/AnalyticPie.vue'
import RecentActivities from '@/components/dashboardComponents/RecentActivities.vue'

export default Vue.extend({
  components: {
    GreetingCard,
    WithdrawCard,
    ActivityCards,
    AnalyticBar,
    AnalyticPie,
    RecentActivities,
  },
  data() {
    return {
      showDrop: false as boolean,
      timeValue: 'Last 9 months' as string,
      height: 200 as number,
      dataCollection: {
        labels: [
          'Jan',
          '',
          'Feb',
          '',
          'March',
          '',
          'Apr',
          '',
          ' May',
          '',
          'June',
          '',
          'Jul',
          '',
          ' Aug',
          '',
          'Sep',
        ],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#1E96FC',
            data: [
              20,
              '',
              13,
              '',
              14,
              '',
              13,
              '',
              4,
              '',
              27,
              '',
              14,
              '',
              33,
              '',
              15,
            ],
          },
          {
            label: 'Data two',
            backgroundColor: '#09005D',
            data: [
              14,
              '',
              8,
              '',
              28,
              '',
              33,
              '',
              14,
              '',
              13,
              '',
              16,
              '',
              20,
              '',
              33,
              '',
              34,
              '',
              29,
            ],
          },
        ],
      },
    }
  },
  computed: {
    userPic() {
      return this.$store.state.auth.user
    },
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
.index-cont {
  width: 100vw;
  padding: 5vw 9vw 15vh 9vw;
  overflow-x: hidden;

  .lower-half {
    margin-top: 60px;
    .activities-title {
      font-family: Visuelt Pro, sans-serif;
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: left;
      color: $dark-text;
      margin: 0px 0px 30px 0px;
    }

    .contract-analytics {
      margin: 60px 0px 0px 0px;
    }

    select {
      padding: 8px;
      font-family: Sofia Pro, sans-serif;
      font-size: 12px;
      font-style: normal;
      font-weight: 300;
      line-height: 12px;
      letter-spacing: 0em;
      text-align: left;
      color: $dark-text;
      border: 0.5px solid #e0e0e0;
      height: 44px;
      width: 145px;
      left: 759px;
      top: 637px;
      border-radius: 7px;
      background: $light;
      outline: none;
      cursor: pointer;
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
  }
}

@include lg-tablet {
  .lower-half {
    margin-top: 10px !important;
  }
  .activities-title {
    margin-top: 60px !important;
  }
}

@include mobile {
  .index-cont {
    padding: 0vw 7vw 0px 7vw !important;
  }
}
</style>
