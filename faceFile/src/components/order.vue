<template>
  <div class="order">
     <el-container>
          <el-aside>
              <orderLeft></orderLeft>
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
import orderLeft from './common/orderLeft'
export default {
  name:'order',
  data () {
      return {
          msg:"order"
      }
  },
  components: {
      orderLeft
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

