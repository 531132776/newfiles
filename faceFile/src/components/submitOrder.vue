<template>
  <div class="submitOrder">
     <p>
         {{msg}}
     </p>
  </div>
</template>
<script>
export default {
  name:'submitOrder',
  data () {
      return {
          msg:"提交工单"
      }
  }
}
</script>
<style>
.submitOrder{
    width:100%;
    height:100%;
    overflow-y: auto;
    overflow-x:hidden;
}
</style>


