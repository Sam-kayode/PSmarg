<template>
  <div class="table-container">
    <table>
      <tr>
        <th>Wallet Name</th>
        <th>Wallet Adress</th>
        <th>Action</th>
      </tr>
      <tr class="transac-row">
        
        <td class="name p-0 pr-4">
          <h2>Trust USDT Wallet</h2>
        </td>
        <td class="pr-5">
          <p class="date">0x35583j38802j3ks93js84478sj5j59ssd993kk</p>
        </td>
        <td class="pr-2">
          <LightButton>
            <b-icon icon="trash-fill"></b-icon> Delete
          </LightButton>
        </td>
      </tr>
      <tr class="transac-row">
        <td class="name p-0 pr-4">
          <h2>Main BUSD Wallet</h2>
        </td>
        <td class="pr-3">
          <p class="date">0x35583j38802j3ks93js84478sj5j59ssd993kk</p>
        </td>
        <td class="pr-2">
          <LightButton>
            <b-icon icon="trash-fill"></b-icon> Delete
          </LightButton>
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CryptoWallets',
  components: {},
  data() {
    return {
      transactions: [],
    }
  },
  methods: {},
})
</script>

<style lang="scss" scoped>
.table-container {
  overflow-x: auto;
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
  height: 20px;
}

td {
  font-family: Sofia Pro, sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: 13px;
  letter-spacing: 0em;
  text-align: left;
  // padding: 0 20px;
  height: 20px;
}

.name {
  h2 {
    font-family: Sofia Pro, sans-serif;
    font-size: 14px;
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

.delete {
  border: none;
  padding: 5px 10px;
  background: rgb(242, 51, 51);
  border-radius: 5px;
}
</style>
