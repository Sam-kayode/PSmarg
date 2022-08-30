<template>
  <div class="table-container">
    <table>
      <tr>
        <th class="text-left p-0">Transaction Name</th>
        <th class="text-left">Date</th>
        <th class="text-left">Amount</th>
      </tr>

      <tr
        v-for="(transaction, index) in allTransaction"
        :key="index"
        class="transac-row"
      >
        <!-- <td class="p-0">
          <span
            class="profile-pic"
            :class="[transaction.status === 'CREDIT' ? 'credit' : 'debit']"
          >
            <img :src="'/members/' + transaction.icon + '.svg'" alt="" />
          </span>
        </td> -->
        <td class="name p-0 pr-4">
          <h2>{{ transaction.narration }}</h2>
          <p
            :style="{
              color:
                transaction.transaction_type === 'credit' ? 'green' : 'red',
            }"
          >
            {{ transaction.transaction_type.toUpperCase() }}
          </p>
        </td>
        <td class="">
          <p class="date">
            {{ dayConvFull(transaction.created_at) }}
          </p>
        </td>
        <td class="">
          <p class="cash text-left">$ {{ transaction.amount }}</p>
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Contracts',
  components: {},
  data() {
    return {
      transactions: [
        {
          projectName: 'Smarg Mobile App',
          Date: 'Aug 10, 2012',
          status: 'CREDIT',
          icon: 'ade',
        },
        {
          projectName: 'Mechoautotech',
          Date: 'Nov 13, 2001',
          status: 'DEBIT',
          icon: 'eny',
        },
        {
          projectName: 'Mechoautotech',
          Date: 'Sep 30, 1892',
          status: 'CREDIT',
          icon: 'jay',
        },
      ],
    }
  },
  computed: {
    allTransaction() {
      const values = { ...this.$store.state.payment.transactions }
      const propertyValues = Object.values(values).reverse()
      return propertyValues
    },
  },
  methods: {
    dayConvFull(value) {
      const date = new Date(value)
      return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    },
  },
})
</script>

<style lang="scss" scoped>
.table-container {
  overflow-x: auto;
  max-height: 40vh;
  overflow-y: scroll;
  overflow-x: auto;
  padding-bottom: 40px;
  max-height: 400px;
  overflow-anchor: none;
  // -ms-overflow-style: none;
  // scrollbar-width: none;
  &::-webkit-scrollbar {
    width: 0.4em;
    height: 0.4em;
    cursor: pointer;
    // display: none;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(31, 26, 26, 0.1);
    box-shadow: inset 0 0 6px rgba(188, 188, 188, 0.1);
    cursor: pointer;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: $input-text;
    width: 0px !important;
    cursor: pointer;
  }

  p {
    margin-bottom: 0;
  }
}
table {
  border-collapse: separate;
  width: 100%;
  border-spacing: 0 33px;
  margin-top: -30px;
}

td {
  white-space: nowrap;
  text-align: left;
}

th {
  font-family: Sofia Pro, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: left;
  color: $light-text;
  padding: 0 20px;
  height: 48px;
}

td {
  font-family: Sofia Pro, sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: 13px;
  letter-spacing: 0em;
  text-align: left;
  padding: 0 20px;
  height: 70px;
}

.project-name {
  font-family: Sofia Pro, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px;
  text-align: left;
  color: $dark-text;
}

.view-contract {
  max-width: 120px;
}

.profile-pic {
  width: 18px;
  height: 20px;
  position: relative;
  cursor: pointer;

  img {
    width: 50px;
    height: 50px;
  }
}

.name {
  max-width:130px;
  h2 {
    font-family: Sofia Pro, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
  }

  p {
    font-family: Visuelt Pro, sans-serif;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0.055em;
    text-align: left;
    color: $light-text;
  }
}
.credit::before {
  content: ' ';
  border-radius: 50%;
  display: block;
  position: absolute;
  top: 23px;
  right: 2px;
  width: 12px;
  height: 12px;
  background: #07a055;
  border: 2px solid #ffffff;
}

.debit::before {
  content: ' ';
  border-radius: 50%;
  display: block;
  position: absolute;
  top: 23px;
  right: 2px;
  width: 12px;
  height: 12px;
  background: #d71920;
  border: 2px solid #ffffff;
}

.cash {
  font-family: Visuelt Pro, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: right;
  span {
    font-weight: 300;
  }
}
</style>
