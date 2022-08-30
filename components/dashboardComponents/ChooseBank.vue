<template>
  <div>
    <h1 class="choose">Choose Your Bank</h1>
    <p class="status">The status of a client or freelancer is based on </p>
    <div class="banks mx-auto">
      <div class="row m-0">
        <div v-for="bank in banks" :key="bank" class="bank">
          <img :src="'/banks/' + bank + '.svg'" alt="bank-logo"  @click="$bvModal.show('modal-8')"/> 
        </div>
      </div>
    </div>
      <b-modal
      id="modal-8"
      title="modal-8"
      class="p-0"
      ok-only
      centered
      no-stacking
      hide-footer
      hide-header
    >
     <UssdCode/>
         
    </b-modal>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import UssdCode from '@/components/dashboardComponents/Modals/UssdCode.vue'
export default Vue.extend({
  name: 'ChooseBank', components:{
        UssdCode,
      },
  data() {
    return {
      banks: [
        'uba',
        'wema',
        'kuda',
        'fidelity',
        'access',
        'heritage',
        'fcmb',
        'union-bank',
      ],
     
    }
  }
})
</script>

<style lang="scss" scoped>
.banks {
  max-width: 685px;
  padding:0 20px;
}

.row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  grid-template-rows: 1fr 1fr;
  grid-gap: 16px;
  width: 100%;
  align-items: center;
  justify-items: center;
}

.bank {
  padding: 30px;
  img{
    cursor:pointer;
  }
}

.choose{
  font-family: Visuelt Pro, sans-serif;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 31px;
letter-spacing: 0em;
text-align: center;
color:$dark-text;
}

.status{
  font-family: Sofia Pro, sans-serif;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: center;
color:$light-text;
}
</style>
