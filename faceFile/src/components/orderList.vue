<template>
  <div class="orderList">
     <p>
         {{msg}}
     </p>
  </div>
</template>
<script>
export default {
  name:'orderList',
  data () {
      return {
          msg:"工单列表"
      }
  }
}
</script>
<style>
.orderList{
    width:100%;
    height:100%;
    overflow-y:auto;
    overflow-x:hidden;
}
</style>


