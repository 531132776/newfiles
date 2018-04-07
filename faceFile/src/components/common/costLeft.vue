<template>
  <div class="costLeftNav">
         <el-menu
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b" router
            >
            <h3><span>费用中心</span></h3>
            <el-menu-item index="/CostAccount">账户信息</el-menu-item>
            <el-menu-item index="/myOrder">我的订单</el-menu-item>
            <!-- <el-menu-item index="/ProjectManagement">续费管理</el-menu-item>
            <el-submenu index="1-4">
                <template slot="title">资金管理</template>
                <el-menu-item index="">充值</el-menu-item>
                <el-menu-item index="">自助提现</el-menu-item>
            </el-submenu>
            <el-submenu index="1-4">
                <template slot="title">账单管理</template>
                <el-menu-item index="">收支明细</el-menu-item>
                <el-menu-item index="">资源账单</el-menu-item>
            </el-submenu>
            <el-menu-item index="/SecuritySetting">发票管理</el-menu-item>
            <el-menu-item index="/SecuritySetting">合同管理</el-menu-item> -->
        </el-menu>

  </div>
</template>
<script>
export default {
  name:'costLeftNav',
  data () {
      return {
          msg:"costLeftNav"
      }
  }
}
</script>
<style>
h3{
  font-size: 1.5em;
  padding-top: 20px;
}

</style>

