<template>
  <div class="contract-search d-flex align-items-center">
    <BasicInput placeholder="Search Contracts "  class="pr-5"/>

    <b-icon icon="search" class="search-icon"></b-icon>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ContractSearch',
})
</script>

<style lang="scss" scoped>
.contract-search {
  max-width: 280px;

  .search-icon{
    position:relative;
    right:35px;
    cursor: pointer;
  }
}
</style>
