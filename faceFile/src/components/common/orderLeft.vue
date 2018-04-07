<template>
  <div class="orderLeftNav">
          <el-menu
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b" router
            >
            <h3><span>工单系统</span></h3>
            <el-menu-item index="/orderList">工单列表</el-menu-item>
            <el-menu-item index="/submitOrder">提交工单</el-menu-item>
            <!-- <el-menu-item index="/ProjectManagement">自助诊断</el-menu-item> -->
        </el-menu>

  </div>
</template>
<script>
export default {
  name:'orderLeftNav',
  data () {
      return {
          msg:"orderLeftNav"
      }
  }
}
</script>
<style>
h3{
  font-size: 1.5em;
}
</style>
