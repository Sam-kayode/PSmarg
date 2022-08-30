<template>
  <div class="table-container">
    <table>
      <tr>
        <th>Bank Name</th>
        <th>Action</th>
        <th>Bank Adress</th>
      </tr>
      <tr class="transac-row">
        <td class="name p-0">
          <h2>UBA Savings</h2>
        </td>
        <td class="number">
          <p>2083257025</p>
        </td>
        <td class="last">
          <LightButton class="delete">
            <b-icon icon="trash-fill"></b-icon> Delete
          </LightButton>
        </td>
      </tr>
      <tr class="transac-row">
        <td class="name p-0">
          <h2>GTB Savings</h2>
        </td>
        <td class="number">
          <p>0635444539</p>
        </td>
        <td class="last">
          <LightButton class="delete">
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
  name: 'Contracts',
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
  max-width: 50px;
  text-align: left;}

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

.delete{
  max-width:110px;
}
</style>
