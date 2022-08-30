<template>
  <div class="credit-card">
    <img src="/bubble.svg" alt="" class="bubble" />
    <img src="/visa-light.svg" class="provider" alt="" />

    <div class="d-flex align-items-center justify-content-between card-details">
      <div class="serial-name">
        <h2>
          **** **** **** <span> {{ card.last_4digits }}</span>
        </h2>
        <p v-if="card.card_holder" class="m-0">
          {{ card.card_holder.toUpperCase() }}
        </p>
      </div>
      <div class="delete">
        <p>Delete</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: '',
  data() {
    return {}
  },
  computed: {
    card() {
      return this.$store.state.payment.card
    },
  },
})
</script>

<style lang="scss" scoped>
.credit-card {
  width: 100%;
  background: #070144;
  border-radius: 7px;
  padding: 29px;
  color: $light;
  position: relative;
  overflow: hidden;
  max-width: 330px;

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

  .bubble {
    position: absolute;
    right: -30px;
    top: 0;
  }
}

.card-details {
  margin-top: 76px;
}
.serial-name {
  h2 {
    font-family: Visuelt Pro, sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.125em;
    text-align: left;
    color: $light;
  }

  p {
    font-family: Sofia Pro, sans-serif;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0.125em;
    text-align: left;
    color: $light-text;
  }
}

.delete {
  cursor: pointer;

  p {
    text-decoration: underline;
    color: $light;
    font-family: Sofia Pro, sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
  }
}
</style>
