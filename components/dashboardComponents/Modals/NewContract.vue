<template>
  <div class="new-cont text-center">
    <h2 class="create pt-4">Create New Contract</h2>
    <p class="role pb-md-5">Which Role are you playing in this project?</p>
    <div class="d-flex justify-content-center">
      <div
        class="cont-card"
        :class="{ 'cont-highlight': freelancer }"
        @click="setRole(true)"
      >
        <div class="d-flex tick-cont">
          <img v-if="freelancer" src="/tick.svg" class="ml-auto tick" alt="" />
        </div>
        <div class="d-flex flex-column text-center">
          <img
            src="/freelancer.svg"
            class="align-self-center new-cont-img"
            alt=""
          />
          <p class="new-header">Freelancer</p>
          <p class="new-desc">The status of a client or freelancer</p>
        </div>
      </div>
      <div
        class="cont-card"
        :class="{ 'cont-highlight': freelancer == false }"
        @click="setRole(false)"
      >
        <div class="d-flex tick-cont">
          <img
            v-if="freelancer == false"
            src="/tick.svg"
            class="ml-auto tick"
            alt=""
          />
        </div>
        <div class="d-flex flex-column text-center">
          <img
            src="/rating.svg"
            class="align-self-center new-cont-img"
            alt=""
          />
          <p class="new-header">Client</p>
          <p class="new-desc">The status of a client or freelancer</p>
        </div>
      </div>
    </div>
    <Nuxt-link to="/dashboard/newContract">
      <BlueButton
        :button-content="buttonContent"
        class="continue-btn mx-auto pb-3 pb-md-5 mt-3 mt-md-5"
        :disabled="freelancer===null"
    /></Nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// interface Role {
//   default_role: string
// }
export default Vue.extend({
  data() {
    return {
      buttonContent: 'Continue' as string,
      freelancer: null as unknown,
    }
  },
  methods: {
    setRole(val: boolean) {
      this.freelancer = val
      this.setRoleState()
    },
    async setRoleState() {
      const roleValue = this.freelancer === false ? 'owner' : 'freelancer'
      const data = {
        defult_role: roleValue,
      }
      try {
        await this.$store.commit('contract/setContract', data)
      } catch (error: any) {
        if (error) {
          const err = error.response.data.message
          console.log(err)
        }
      }
    },
  },
})
</script>
<style lang="scss" scoped>
.new-cont {
  max-width: 523px;

  .cont-highlight {
    border: 1px solid #2522a7 !important;
  }

  .create {
    font-family: Visuelt Pro, sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: center;
    color: #040403;
  }

  .role {
    font-family: Sofia Pro, sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 300;
    line-height: 18px;
    text-align: center;
    color: #000000;
  }
  .cont-card {
    max-width: 172px;
    background: #f9f8ff;
    border-radius: 7px;
    padding: 14px;
    margin: 0px 9.5px;
    transition: ease-out 0.2s;
    border: 0.5px solid #e0e0e0;

    &:hover {
      cursor: pointer;
      box-sizing: border-box;
      transform: scale(1.02);
      transition: ease-out 0.2s;
    }

    .new-header {
      font-family: Sofia Pro, sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 16px;
      letter-spacing: 0em;
      color: #040403;
    }

    .new-desc {
      font-family: Sofia Pro, sans-serif;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: 0em;
      text-align: center;
      color: #080149b0;
    }

    .new-cont-img {
      width: 50px;
      margin: 20px 0px 29px 0px;
    }
  }

  .tick-cont {
    height: 17px !important;
  }

  .tick {
    width: 17px;
    height: 17px;
  }
  .continue-btn {
    width: 190px;
  }
}

@include tablet {
  .cont-card {
    &:hover {
      cursor: pointer;
      box-sizing: border-box;
      transform: scale(1) !important;
      transition: ease-out 0.2s;
    }

    &:active {
      transform: scale(1.03) !important  ;
    }
  }
}

@include mobile {
}
</style>
