<template>
  <div class="paginate mt-5">
    <div class="button mr-4" @click="prev()">&#x3c;</div>
    <div class="button" @click="next()">&#x3e;</div>
  </div>
</template>

<script>
export default {
  name: 'Paginate',
  data() {
    return {
      value: 1,
      
    }
  },
  methods: {
    async next() {
      this.value = this.value + 1
      await this.$store.dispatch('contract/getContracts', this.value)
    },
    async prev() {
      if (this.value > 1) {
        this.value = this.value - 1
        await this.$store.dispatch('contract/getContracts', this.value)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.paginate {
  display: flex;
  font-size: 25px;
  justify-content: center;
  .button {
    background: #edf1fe;
    height: 25px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-radius: 5px;
    color: $primary-color;
    cursor: pointer;

    &:hover {
      background-color: $primary-color;
      color: $light;
    }
  }
}
</style>
