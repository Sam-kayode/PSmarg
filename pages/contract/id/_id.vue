<template>
  <div>
    <PageSpinner v-if="$fetchState.pending" />

    <div v-else class="details-contain">
      <Nuxt-link to="/contract"
        ><p class="back">
          <span><b-icon icon="chevron-left" class="chevron mr-2"></b-icon></span
          >Back to Contracts
        </p></Nuxt-link
      >
      <div class="row p-0">
        <div class="col-12 col-lg-8 px-0">
          <h1 class="aspire-header mt-0 mb-4 mb-lg-3">
            {{ detail.contract_name }}
          </h1>

          <p class="desc">Description</p>
          <p class="desc-content">
            {{ detail.description }}
          </p>

          <div class="contract-details">
            <h1>Contract Details</h1>
            <div class="total-contract d-lg-none mb-5">
              <img src="/bubble.svg" alt="" class="bubble" />
              <p class="p-0 my-1">CONTRACT PAYMENT</p>
              <div class="cost">
                <span class="total-val">$ {{ detail.contract_amount }}</span
                ><span> .00</span>
              </div>
            </div>
            <div
              class="
                d-flex
                align-items-center
                justify-content-between
                card-detail
              "
            >
              <div>
                <p class="updated">LAST UPDATED</p>
                <p class="date">Aug 10, 2012</p>
              </div>
              <div>
                <p class="updated">PAYMENT METHOD</p>
                <p class="date">
                  <span> <img src="/mastercard.svg" /></span> MasterCard ****
                  2829
                </p>
              </div>
            </div>
            <p class="updated mt-5">STATUS</p>
            <div
              class="
                d-flex
                align-items-center
                justify-content-between
                status-btns
              "
            >
              <div
                v-if="superAdmin"
                class="d-flex align-items-center justify-content-center locked"
              >
                <img v-if="superAdmin" src="/unlocked.png" alt="" />
                <img v-else src="/lock.png" alt="" />
                <p v-if="admin" class="m-0 pl-2">UNLOCKED</p>

                <p v-else class="m-0 pl-2">LOCKED</p>
              </div>
              <LightButton
                v-b-modal.modal-center2
                class="light-btn"
                :disabled="!admin"
              >
                <img src="/write.svg" class="pr-2" alt="" /> Update Status
              </LightButton>

              <b-modal
                id="modal-center2"
                centered
                hide-footer
                hide-header
                no-stack
              >
                <UpdateStatus :id="id" />
              </b-modal>
            </div>
            <!-- <div class="d-flex align-items-center mt-3">
              <LightButton
                class="pay-btn pr-3"
                :loading="loading"
                @click.native="pay"
              >
                <img src="/write.svg" class="pr-2" alt="" /> pay </LightButton
              ><spinner v-if="loading" />
            </div> -->
            <p class="updated mt-5">COLLABORATORS</p>
            <img
              v-for="signee in signees"
              :key="signee"
              :src="'/members/' + signee + '.svg'"
              class="pr-1"
            />
            <div v-if="superAdmin" v-b-modal.modal-center class="plus">+</div>

            <b-modal
              id="modal-center"
              centered
              hide-footer
              hide-header
              no-stack
            >
              <NewMember :id="id" />
            </b-modal>
          </div>
        </div>
        <div class="col-12 col-lg-4 upper-second px-0">
          <div class="contract-approval">
            <div class="total-contract d-none d-lg-block">
              <img src="/bubble.svg" alt="" class="bubble" />
              <p class="p-0 my-1">CONTRACT PAYMENT</p>
              <div class="cost">
                <span class="total-val">$ {{ detail.contract_amount }}</span
                ><span> .78 </span>
              </div>
            </div>
            <File :file="detail.agreement.file" />
            <div class="mt-5">
              <h1 class="updates mt-5">Contract Updates</h1>
              <RecentActivities class="mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
declare module 'vue/types/vue' {
  interface Vue {
    $bvToast: any
    $smargApi: any
  }
}

export default Vue.extend({
  data() {
    return {
      signees: ['ade', 'dami', 'dan', 'eny'],
      detail: {},
      error: '',
      superAdmin: '',
      loading: false,
    }
  },

  async fetch() {
    const id = this.$route.params.id
    try {
      const res = await this.$smargApi.$get(`contract/detail/${id}`)
      this.detail = res.data
      const collaborators = res.data.collaborator
      console.log(this.detail)
      const superAdmin = collaborators.filter(
        (collaborator: any) => collaborator.user_role === 'superadmin'
      )
      this.superAdmin = superAdmin[0].email
    } catch (error: any) {
      if (error) {
        const err = error.response.data.message
        this.error = err
      }
    }
  },
  computed: {
    admin() {
      const userEmail = this.$store.state.auth.user.email
      let role
      if (userEmail === this.superAdmin) {
        role = true
      } else {
        role = false
      }
      return role
    },
    id() {
      return this.$route.params.id
    },
  },
  methods: {
    async pay() {
      this.loading = true
      try {
        await this.$store.dispatch('auth/cardPayment')
      } catch (error: any) {
        if (error) {
          const err = error.response.data.message
          this.error = err
        }
      }
      this.loading = false
    },
  },
})
</script>

<style lang="scss" scoped>
.details-contain {
  width: 100vw;
  padding: 0vw 14vw 0px 14vw;

  .row {
    width: 100%;
    margin: 0 auto;
  }
  .back {
    font-family: Sofia Pro, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
    color: $primary-color;
    margin-bottom: 50px;
  }
  .aspire-header {
    font-family: Visuelt Pro, sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: $dark-text;
  }

  .desc {
    font-family: Visuelt Pro, sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
  }

  .desc-content {
    font-family: Sofia Pro, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: $light-text;
    max-width: 530px;
    min-height: 150px;
  }

  .contract-details h1 {
    font-family: Visuelt Pro, sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: $dark-text;
    margin-bottom: 30px;
  }
  .total-contract {
    max-width: 450px;
    background: linear-gradient(107.72deg, #1e96fc 0%, #2522a7 100%);
    border-radius: 7px;
    padding: 28px 22px;
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
    }

    .cost {
      font-family: Visuelt Pro, sans-serif;
      font-size: 24px;
      font-style: normal;
      font-weight: 300;
      line-height: 31px;
      letter-spacing: 0em;
      text-align: left;
      color: $light;
      .total-val {
        font-weight: 700;
      }

      span {
        display: inline-block;
      }
    }
    .bubble {
      position: absolute;
      right: -30px;
      top: 0;
    }
  }

  .updated {
    font-family: Visuelt Pro, sans-serif;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0.055em;
    text-align: left;
    color: $light-text;
  }

  .date {
    font-family: Visuelt Pro, sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: $dark-text;
  }

  .card-detail {
    max-width: 460px;
  }

  .locked {
    font-family: Visuelt Pro, sans-serif;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 13px;
    letter-spacing: 0.06em;
    text-align: left;
    color: $dark-text;
    padding: 9px 16px;
    background: #f5f5f5;
    border-radius: 5px;

    img {
      height: 20px;
    }
  }

  .light-btn,
  .pay-btn {
    &:hover {
      img {
        filter: invert(120%);
      }
    }
  }

  .pay-btn {
    max-width: 120px;
  }
  .status-btns {
    width: 285px;
  }

  .plus {
    background: #f5f5f5;
    display: inline-block;
    width: 36px;
    height: 36px;
    line-height: 36px;
    border-radius: 50%;
    text-align: center;
  }
}

.updates {
  font-family: Visuelt Pro, sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0em;
  color: $dark-text;
}

@include mobile {
  .details-contain {
    padding: 0vw 7vw 0px 7vw;
  }
}
</style>
