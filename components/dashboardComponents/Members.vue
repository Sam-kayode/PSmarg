<template>
 <div class="img-contain">
     <img v-for="(member, index) in members" :key="member" class="m1" :src="'/members/'+member+'.svg'" :style="{right: index * 23 + 'px'}"/>

     
 </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:'Members',
    props: {
    members: { type: Array, default: Array },
  },
    data(){
        return{
          
        }
    },
})
</script>

<style lang="scss" scoped>
.m1{
    position:relative;


}

.img-contain{
    width:110px;
}
</style>
