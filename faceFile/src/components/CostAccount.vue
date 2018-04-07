<template>
  <div class="costaccount">
   {{msg}}
  </div>
</template>
<script>
export default {
  name:'costaccount',
  data () {
      return {
          msg:'账户信息'
      }
  }
}
</script>
<style>
.costaccount{
     width: 100%;
    height: 100%;
    overflow-x: auto;
    overflow-y: auto;
}
</style>


