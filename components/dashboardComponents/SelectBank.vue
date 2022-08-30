<template>
  <div class="select-bank">
    <p class="label">Select Bank</p>
    <dropdown-menu :direction="'right'" :overlay="false" :is-open="showDrop">
      <div slot="trigger" @click="showdrop()">
        <span class="drop d-flex justify-content-between">
          <span>{{ timeValue }}</span>
          <span><b-icon icon="chevron-down" class=""></b-icon></span>
        </span>
      </div>
      <div slot="body" class="body">
        <p class="my-0" @click="setTime('UBA - 2083257025')">UBA - 2083257025</p>
        <p class="my-0" @click="setTime('Sterling Bank - 2083257025')">
          Sterling Bank - 2083257025
        </p>
        <p class="my-0" @click="setTime('GTB Bank - 0635444539')">
          GTB Bank - 0635444539
        </p>
        <p class="my-0" @click="setTime('Last 1 year')">
          Zenith Bank - 234566778
        </p>
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
      timeValue: 'UBA -2083257025' as string,
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
.select-bank {
  width: 500px;
  margin-top: 10px;
  .label {
    margin-bottom: 0px;
    font-family: Visuelt Pro, sans-serif;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.055em;
    text-align: left;
    color: $dark-text;
  }
  .v-dropdown-menu {
    width: 60%;
    &__container {
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

      p {
        font-family: Sofia Pro;
        font-size: 12px;
        font-style: normal;
        font-weight: 300;
        line-height: 12px;
        letter-spacing: 0em;
        text-align: left;
        padding: 20px 20px;
        cursor: pointer;
        &:hover {
          background: #d9d9d9;
        }
      }
    }
  }

  .body {
    max-height: 100px;
    overflow-y: auto;
  }
  .drop {
    border: 0.5px solid #e0e0e0;
    box-sizing: border-box;
    border-radius: 7px;
    padding: 17px;
    width: 100%;
    font-family: Sofia Pro;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: 12px;
    letter-spacing: 0em;
    text-align: left;
    cursor: pointer;
  }
}
</style>
