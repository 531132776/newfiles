<template>
  <div class="visit2">
     <p>
         {{msg}}
     </p>
  </div>
</template>
<script>
export default {
  name:'visit2',
  data () {
      return {
          msg:"api密钥"
      }
  }
}
</script>
<style>
.visit2{
    width:100%;
    height:100%;
    overflow-y: auto;
    overflow-x:hidden;
}
</style>


