<template>
  <div class="myorder">
   {{msg}}
  </div>
</template>
<script>
export default {
  name:'myorder',
  data () {
      return {
          msg:'我的订单'
      }
  }
}
</script>
<style>
.myorder{
    width:100%;
    height:100%;
    overflow-x:hidden;
    overflow-y: auto;
}
</style>


