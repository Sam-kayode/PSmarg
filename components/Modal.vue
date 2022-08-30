<template>
  <div class="modal-overlay" @click.self="$emit('close-modal')">
    <div class="modal">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {}
</script>
<style scoped>
.modal-overlay {
  position: fixed;
  z-index: 1000000000000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #73737397;
}

.modal {
  text-align: center;
  background-color: white;
  max-width: 350px;
  max-height: 250px;
  border-radius: 5px;
  position: relative;
  z-index: 100000000000000;
  display: block;
}


h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

button {
  background-color: #ac003e;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
}
</style>
