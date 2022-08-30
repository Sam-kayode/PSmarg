<template>
  <div>
    <div class="table-container">
      <table>
        <tr class="contract-header">
          <th
            v-for="(head, i) in contractHead"
            :key="head"
            class="text-left"
            :class="i == 0 ? 'first' : ''"
          >
            {{ head }}
          </th>
        </tr>
        <tr
          v-for="(contract, index) in allContracts"
          :key="index"
          class="contract-row"
          @click="contractPage(contract.id)"
        >
          <td class="name">
            <p class="project-name">{{ contract.contract_name }}</p>
          </td>
          <td>Freelancer</td>
          <td>{{ contract.contract_status }}</td>
          <td><Members :members="['kay', 'tom']" /></td>
          <td class="pr-0">
            <LightButton button-content="View Contract" class="view-contract" />
          </td>
        </tr>
      </table>
      <intersection-observer
        v-if="!stop"
        sentinal-name="sentinal-name"
        @on-intersection-element="onIntersectionElement"
      >
        <div v-if="isIntersectingElement" class="loader">
          <Spinner class="spin" />
        </div>
      </intersection-observer>
    </div>
    <!-- <div class="controls">
      <Paginate />
      <Pagination />
    </div> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Members from '@/components/dashboardComponents/Members.vue'
export default Vue.extend({
  name: 'Contracts',
  components: { Members },
  data() {
    return {
      contractHead: [
        'Project Name',
        'Role',
        'Status',
        'Team Members',
        'Action',
      ],
      value: 1,
      isIntersectingElement: false,
    }
  },
  computed: {
    allContracts() {
      return this.$store.state.contract.contracts
    },
    stop() {
      return this.$store.state.contract.contractStop
    },
  },
  watch: {
    isIntersectingElement() {
      if (this.isIntersectingElement) {
        this.next()
      }
    },
  },
  methods: {
    contractPage(id: string) {
      this.$router.push({ path: `contract/id/${id}` })
    },
    onIntersectionElement(value: boolean) {
      this.isIntersectingElement = value
    },
    async next() {
      this.value = this.value + 1
      await this.$store.dispatch('contract/getContracts', this.value)
    },
  },
})
</script>

<style lang="scss" scoped>
.table-container {
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
}
table {
  border-collapse: collapse;
  width: 100%;
}
th,
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

.first {
  @include tablet {
    padding-left: 0;
  }
}

.project-name {
  margin: 0;
  font-weight: 500;
  line-height: 14px;
  text-overflow: ellipsis;
  max-width: 70px;
  white-space: nowrap;
  overflow: hidden;
}

.name {
  @include tablet {
    padding-left: 0;
  }
}
.view-contract {
  max-width: 120px;
}

td:first-child,
th:first-child {
  border-radius: 8px 0 0 8px;
}
td:last-child,
th:last-child {
  border-radius: 0 8px 8px 0;
}

.contract-row {
  cursor: pointer;
  &:hover {
    td,
    .project-name {
      -moz-box-shadow: 0px 20px 70px rgba(0, 0, 0, 0.1);
      -webkit-box-shadow: 0px 20px 70px rgba(0, 0, 0, 0.1);
      box-shadow: 0px 20px 70px rgba(0, 0, 0, 0.1);
      cursor: pointer;
    }
  }
}

.loader {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0 10px 0;
}
</style>
