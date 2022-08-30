<template>
  <div class="search-box d-lg-none">
    <button class="btn-search"><b-icon icon="search"></b-icon></button>
    <input type="text" class="input-search" placeholder="Type to Search..." />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
.search-box {
  width: 65%;
  height: fit-content;
  position: relative;
  font-family: Sofia Pro, sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0em;
  text-align: left;
  padding-left: 30px;
  overflow-x: hidden;
  svg {
    margin-right: 10px;
  }
}

.input-search {
  width: 40px;
  height: 40px;
  border-style: none;
  padding: 0 9px;
  outline: none;
  border-radius: 25px;
  transition: all 0.5s ease-in-out;
  color: transparent;
}

.input-search::placeholder {
  color: transparent;
}
.btn-search {
  border-style: none;
  line-height: 40px;
  font-size: 20px;
  font-weight: bolder;
  outline: none;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  right: 0px;
  bottom: 0px;
  color: $primary-color;
  background-color: rgba(0, 0, 0, 0);

  &:focus {
    background-color: transparent;
  }
}
.btn-search:focus ~ .input-search {
  width: 100%;
  border: 0.5px solid #b1b0b0;
  box-sizing: border-box;
  border-radius: 7px;
  color: $dark-text;
  transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);

  &::placeholder {
    color: $dark-text;
  }
}
.input-search:focus {
  width: 100%;
  background-color: transparent;
  transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
  color: $dark-text;
  border: 0.5px solid #b1b0b0;
  box-sizing: border-box;
  border-radius: 7px;
}
</style>
