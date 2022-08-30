<template>
  <div class="recent-request">
    <h1 class="request mb-5">Request from Akinwale</h1>
    <div class="row">
      <div class="col-7">
        <p class="desc-title m-0">REQUEST DATE</p>
        <span class="desc-content m-0">Aug 10, 2012</span>
      </div>
      <div class="col-5">
        <p class="desc-title m-0">REQUEST TYPE</p>
        <span class="desc-content m-0">Cancellation</span>
        <CancelBtn />
      </div>
    </div>
    <div class="row my-4">
      <div class="col-7">
        <p class="desc-title mb-1">REQUEST BY</p>
        <span class="desc-content m-0">
          <img src="/name2.svg" alt="" class="mr-2" />Brooklyn Simmons
        </span>
      </div>
      <div class="col-5">
        <p class="desc-title m-0">CONTRACT ROLE</p>
        <span class="desc-content m-0">Freelancer</span>
      </div>
    </div>
    <span class="desc-content">Description </span>
    <p class="reason">
      The status of a client or freelancer is based on who created the contract
      or who the role is assigned to. In that regard, no separate client or
      freelancer dashboard. Based on one’s status on the contract, features
      would be enabled.
    </p>

    <div class="row mt-md-5">
      <BlueButton :button-content="'View Contract'" class="col blue-btn px-2" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CancelBtn from '@/components/dashboardComponents/CancelBtn.vue'
export default Vue.extend({
  name: 'RecentRequest',
  components: {
    CancelBtn,
  },
})
</script>
<style lang="scss" scoped>
.recent-request {
  padding: 52px 30px;
}
.request {
  font-family: Visuelt Pro, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: center;
}

.desc-title {
  font-family: Visuelt Pro, sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0.055em;
  text-align: left;
  color: $light-text;
}

.desc-content {
  font-family: Visuelt Pro, sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;

  img {
    width: 36px;
    height: 36px;
  }
}

.reason {
  font-family: Sofia Pro, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: $light-text;
}

.blue-btn {
  padding: 0 40px;
}

@include mobile {
  .recent-request {
    padding: 30px 10px;
  }
}
</style>
