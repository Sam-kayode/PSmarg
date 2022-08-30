<template>
  <div class="greeting d-flex">
    <img src="/bubble.svg" alt="" class="bubble" />
    <img src="/union.svg" class="union mr-5 d-none d-sm-block" alt="" />
    <div class="d-flex flex-column justify-content-center">
      <h4 class="morning">Good {{greeting}},</h4>
      <h4 class="fname">{{name}}</h4>

      <button v-b-modal.modal-center type="button" class="create mt-3">
        Create Contract
        <b-icon icon="chevron-right" class="chevron-right ml-4"></b-icon>
      </button>
      <b-modal id="modal-center" centered hide-footer hide-header no-stack>
        <NewContract />
      </b-modal>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NewContract from '@/components/dashboardComponents/Modals/NewContract.vue'

export default Vue.extend({
  name: 'GreetingCard',
  components: {
    NewContract,
  },
  data() {
    return {
      greeting: '',
      name:this.$store.state.auth.user.first_name
    }
  },
  created() {
    const hour = new Date().getHours()
    if (hour >= 4 && hour <= 11) {
      this.greeting = 'Morning'
    }
    if (hour >= 12 && hour <= 16) {
      this.greeting = 'Afternoon'
    }
    if (hour >= 17 && hour <= 20) {
      this.greeting = 'Evening'
    }
    if (hour >= 21 || hour <= 3) {
      this.greeting = 'Night'
    }
  },
})
</script>
<style lang="scss" scoped>
.greeting {
  background: linear-gradient(94.19deg, #2522a7 0%, #1e96fc 100%);
  border-radius: 15px;
  padding: 42px 0px 0px 10%;
  height: 100%;
  position: relative !important;
  z-index: 1;

  .union {
    width: 35%;
  }

  .bubble {
    position: absolute;
    right: 0;
    top: 0;
    border-radius: 0px 15px 0 0;
    z-index: 1;
  }

  .morning {
    font-family: Visuelt Pro, sans-serif;
    font-size: 21px;
    font-style: normal;
    font-weight: 300;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    color: $light;
  }

  .fname {
    font-family: Visuelt Pro, sans-serif;
    font-size: 21px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    color: $light;
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
    z-index: 2;
  }

  .chevron-right {
    width: 10px;
  }
}

@include mobile {
  .greeting {
    padding-bottom: 20px;
  }
}
</style>
