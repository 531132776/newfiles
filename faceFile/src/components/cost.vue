<template>
  <div class="cost">
     <el-container>
          <el-aside>
              <costLeft></costLeft>
          </el-aside>
          <el-main>
              <transition name="fade" mode="out-in">
                  <router-view/>
              </transition>
          </el-main>
     </el-container>

  </div>
</template>
<script>
import costLeft from './common/costLeft'
export default {
  name:'cost',
  data () {
      return {
          msg:"cost"
      }
  },
  components: {
      costLeft
  }
}
</script>
<style>
  .el-menu {
    border-right: 0;
}
.el-main{
    padding:0;
}
</style>

