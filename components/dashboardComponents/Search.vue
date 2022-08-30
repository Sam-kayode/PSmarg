<template>
  <div class="search-cont pr-3">
    <form action="">
      <div class="d-flex align-items-center">
        <b-icon icon="search" class="mr-2"></b-icon>
        <input class="search" type="text" placeholder="Search anything..." />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
export default {}
</script>

<style lang="scss" scoped>
.search-cont {
  width: calc(100% + 20px) !important;
  margin-left: -20px;
}
.search {
  border: none;
  outline: none;
  width: 100% !important;

  ::placeholder {
    font-family: Sofia Pro, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000;
  }

  
}
</style>
