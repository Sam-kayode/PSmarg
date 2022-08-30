<template>
  <div class="d-flex align-items-center justify-content-center successful">
    <PaymentSuccessful :status="status" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: '',
    }
  },
  mounted() {
    const transacDetails = JSON.parse(this.$route.query.response)
    this.status = transacDetails.status
  },
}
</script>

<style lang="scss" scoped>
.successful {
  width: 100vw;
  padding: 4% 20px;
}
</style>
