<template>
  <div class="container">
    <div class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.container {
  position: relative;
  display: flex;
  height: calc(100vh - 180px);
  align-items: center;
  justify-items: center;
}
.lds-ring {
  display: inline-block;
  position: absolute;
  width:127px;
  height:127px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 120px;
  height: 120px;
  border: 12px solid rgb(45, 60, 104);
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color:#2522A7 transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
