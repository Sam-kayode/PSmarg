<template>
  <div class="new-contract">
    <FormIndicators :current-view="currentView" />
    <keep-alive>
      <component
        :is="component"
        class="dynamic-comp-contain"
        @nextForm="nextForm"
        @nextView="nextView"
    /></keep-alive>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FormIndicators from '@/components/dashboardComponents/FormIndicators.vue'
import BasicInfo from '@/components/dashboardComponents/BasicInfo.vue'
import UploadContract from '@/components/dashboardComponents/UploadContract.vue'
import PaymentMethod from '@/components/dashboardComponents/PaymentMethod.vue'
import ChooseBank from '~/components/dashboardComponents/ChooseBank.vue'

export default Vue.extend({
  components: {
    FormIndicators,
    BasicInfo,
    UploadContract,
    PaymentMethod,ChooseBank
  },
  data() {
    return {
      component: 'BasicInfo' as string,
      currentView: 1 as number,
    }
  },
  methods: {
    nextForm(value: string) {
      this.component = value
    },
    nextView(value: number) {
      this.currentView = value
    },
  },
})
</script>
<style lang="scss" scoped>
.dynamic-comp-contain {
  margin-top: 75px;
  padding: 0 20px;
}
</style>
