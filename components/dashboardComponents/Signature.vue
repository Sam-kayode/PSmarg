<template>
  <div class="signature">
    <p>Signature</p>
    <img
      alt=""
      class="sign"
      :src="$store.state.auth.user ? $store.state.auth.user.signature : ''"
    />
    <LightButton
      :button-content="'Update Signature'"
      class="click"
      @click.native="showModal = true"
    />
    <Modal v-if="showModal" @close-modal="showModal = false">
      <UploadSignature @closeModal="showModal=false"/>
    </Modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.signature {
  padding-left: 15px;
  .sign {
    max-width: 160px;
    margin: 10px 0 30px 0;
    border: 1px solid rgb(222, 222, 222);
    border-radius: 10px;
  }
  p {
    font-family: Sofia Pro, sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
  }

  .click {
    max-width: 190px;
  }
}
</style>
