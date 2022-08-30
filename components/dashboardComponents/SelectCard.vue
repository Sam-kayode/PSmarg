<template>
  <div>
    <dropdown-menu :direction="'right'" :overlay="false" class="drop-cont" :is-open="showDrop">
      <div
        slot="trigger"
        class="card d-flex flex-row align-items-center justify-content-center"
      >
        <img :src="displayCard.icon" class="card-icon" alt="" />
        <p class="mb-0 mt-1 mr-auto ml-4 card-number">
          {{ displayCard.name + displayCard.number }}
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
              :value="card.number"
            />
            <p class="m-0">{{ card.name + '' + card.number }}</p>
            <img :src="card.icon" class="ml-auto" alt="" />
          </label>
        </div>
      </div>
    </dropdown-menu>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'SelectCard',
  data() {
    return {
      showDrop: false as boolean,
      current: 2,
      cardInfo: '',
      displayCard: {
        name: 'MasterCard',
        number: '**** 2829',
        icon: '/mastercard.svg',
      },
      cards: [
        { name: 'MasterCard', number: '**** 2829', icon: '/mastercard.svg' },
        { name: 'Visa', number: '**** 2459', icon: '/visa.svg' },
        { name: 'Verve', number: '**** 2929', icon: '/verve.svg' },
      ],
    }
  },
  watch: {
    cardInfo() {
      this.displayCard =
        this.cards[
          this.cards.findIndex((card: any) => {
            return card.number === this.cardInfo
          })
        ]
    },
  },
  methods: {
    showdrop() {
      this.showDrop = !this.showDrop
    },
  },
})
</script>
<style lang="scss" scoped>
.card-icon {
  width: 40px;
}

.drop-cont {
  width: 100%;
  .v-dropdown-menu__container {
    position: absolute;
    top: 110%;
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
    padding: 28px 25px;
  }
  .card-number {
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
</style>
