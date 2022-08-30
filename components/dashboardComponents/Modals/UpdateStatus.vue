<template>
  <div class="update-status text-center">
    <p class="new-member pt-2 text-center">Update Status</p>
    <p class="status mt-2 text-center">
      The status of a client or freelancer is based on who created the contract
      or who
    </p>
    <div>
      <dropdown-menu
        :direction="'right'"
        :overlay="false"
        class="drop-cont"
        :is-open="showDrop"
      >
        <div
          slot="trigger"
          class="card d-flex flex-row align-items-center justify-content-center"
        >
          <p class="mb-0 mt-1 mr-auto ml-4 card-name">
            {{ displayStatus.name }}
          </p>

          <b-icon class="chevron" icon="chevron-down"></b-icon>
        </div>
        <div
          slot="body"
          class="
            card-ul
            d-flex
            flex-column
            align-items-center
            justify-content-left
            m-0
          "
        >
          <div
            v-for="card in cards"
            :key="card.number"
            class="card-li"
            @click="
              current = card.number
              showdrop()
            "
          >
            <label
              :for="card.name"
              class="m-0 p-0 card-name d-flex align-items-center"
            >
              <input
                :id="card.name"
                v-model="cardInfo"
                type="radio"
                name="card"
                class="mr-3"
                :value="card.name"
              />
              <p class="m-0">{{ card.name }}</p>
            </label>
          </div>
        </div>
      </dropdown-menu>
      <textarea
        v-if="displayStatus.name === 'Escalate Contract Issue'"
        id="issue"
        placeholder="Describe the issue briefly"
      ></textarea>
    </div>
    <div class="update-info">
      <p>
        The status of a client or freelancer is based on who created the
        contract or who the role is assigned to. In that regard, no separate
        client
      </p>
    </div>

    <BlueButton
      button-content="Update Status"
      class="update-btn"
      @click.native="updateContract"
      :loading="loading"
    />
    <b-toast id="update-toast" :variant="variant" solid>
      {{ feedback }}
    </b-toast>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'UpdateStatus',
  props: {
    id: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      feedback: '',
      variant: '',
      error: '',
      loading: false,
      showDrop: false as boolean,
      cardInfo: '',
      displayStatus: { name: 'Select a Status', status: '' },
      cards: [
        { name: 'Contract is Done', status: 'completed' },
        { name: 'Cancel Contract', status: 'cancelled' },
        // { name: 'Escalate Contract Issue' },
      ],
    }
  },
  watch: {
    cardInfo() {
      this.displayStatus =
        this.cards[
          this.cards.findIndex((card: any) => {
            return card.name === this.cardInfo
          })
        ]
    },
  },
  methods: {
    showdrop() {
      this.showDrop = !this.showDrop
    },
    async updateContract() {
      this.loading = true
      const data = {
        id: this.id,
        contract_status: this.displayStatus.status,
      }
      try {
        const res = await this.$store.dispatch('contract/updateContract', data)
        console.log(res)
      } catch (error: any) {
        if (error) {
          const err = error.response.data.message
          this.error = err
          this.feedback = 'Error updating status'
          this.variant = 'danger'
          this.$bvToast.show('update-toast')
        }
      }
      if (!this.error) {
        this.feedback = 'Contract updated successfully'
        this.variant = 'success'
        this.$bvToast.show('update-toast')
      }
      this.loading = false

      setTimeout(() => {
        this.$bvModal.hide('modal-center2')
      }, 2000)
    },
  },
})
</script>

<style lang="scss" scoped>
.update-status {
  max-width: 523px;
  padding: 44px 71px 64px 71px;

  .new-member {
    font-family: Visuelt Pro, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
  }
  .status {
    font-family: Sofia Pro, sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    color: $light-text;
  }

  .update-btn {
    max-width: 190px;
    margin: 71px auto 0 auto;
  }

  .update-info {
    border-left: 4px solid $info-yellow;
    margin-top: 39px;

    p {
      padding: 14px 28px;
      background: #fffcee;
      border-radius: 7px;
      font-family: Visuelt Pro, sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 300;
      line-height: 21px;
      letter-spacing: 0em;
      text-align: left;
      color: $dark-text;
    }
  }

  .card-icon {
    width: 40px;
  }

  .drop-cont {
    width: 100%;
    .v-dropdown-menu__container {
      position: absolute;
      top: 0;
      bottom: auto;
      width: 100%;
      overflow: hidden;
      background-color: #fff;
      border: 1px solid rgb(243, 243, 243);
      background: #ffffff;
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
      border-radius: 7px;
    }
    .chevron {
      width: 10px;
      color: #b8b8b8;
    }
    .card {
      max-width: 367px;
      height: 56px;
      padding: 14px;
      border: 0.5px solid #e0e0e0;
      box-sizing: border-box;
      border-radius: 7px;
      cursor: pointer;
    }
    .card-ul {
      padding: 28px 19px;
    }
    .card-name {
      font-family: Sofia Pro, sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: left;
      color: $dark-text;
    }

    .card-li {
      width: 100%;
      padding: 19px 0px;
      cursor: pointer;
    }

    input[name='card'] {
      accent-color: $primary-color;
      color: $primary-color;
    }

    input[name='card'],
    label {
      cursor: pointer;
    }
    .card-name {
      font-family: Sofia Pro, sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 14px;
      letter-spacing: 0em;
      text-align: left;
    }
  }

  #issue {
    width: 100%;
    min-height: 146px;
    margin: 16px auto 0 auto;
    border: 0.5px solid #e0e0e0;
    box-sizing: border-box;
    border-radius: 7px;
    padding: 21px 28px;
    font-family: Sofia Pro, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: $dark-text;
  }
}

@include mobile {
  .update-status {
    padding: 20px 10px;
  }
}
</style>
