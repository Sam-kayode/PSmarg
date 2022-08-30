<template>
  <div class="activity-cards d-flex pb-3">
    <div v-for="card in cards" :key="card.id" class="activity-card mr-3">
      <div class="d-flex mb-3">
        <img :src="card.icon" alt="" />
        <div class="card-num ml-2">{{ card.value }}</div>
      </div>
      <div class="d-flex align-items-center">
        <p class="activity-desc p-0 m-0">{{ card.description }}</p>
        <b-icon icon="chevron-right" class="chevron-right ml-auto"></b-icon>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      cards: [
        {
          icon: '/completed.svg' as string,
          value: 340 as number,
          description: 'Completed Contract',
          id: 1,
        },
        // {
        //   icon: '/ongoing.svg' as string,
        //   value: 133 as number,
        //   description: 'Ongoing Contract',
        //   id: 2,
        // },
        {
          icon: '/cancelled.svg' as string,
          value: 13 as number,
          description: 'Cancelled Contract',
          id: 3,
        },
        {
          icon: '/active.svg' as string,
          value: 52 as number,
          description: 'Active Contract',
          id: 4,
        },
      ],
    }
  },
})
</script>
<style lang="scss" scoped>
.activity-cards {
  overflow-x: auto;
  width: 100%;

  &::-webkit-scrollbar {
    height: 0.3em;
    cursor: pointer;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(31, 26, 26, 0.1);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: $input-text;
    width: 40px !important;
    cursor: pointer;
  }

  .activity-card {
    background-color: $light-blue;
    border-radius: 7px;
    padding: 25px 20px;
    min-width: 200px;
    cursor: pointer;

    .card-num {
      font-family: Sofia Pro, sans-serif;
      font-size: 17px;
      font-style: normal;
      font-weight: 700;
      line-height: 17px;
      text-align: left;
      color: $light;
    }

    .activity-desc {
      font-family: Sofia Pro, sans-serif;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: 13px;
      letter-spacing: 0em;
      text-align: left;
      color: $light;
    }

    .chevron-right {
      color: $light;
    }
  }
}
</style>
