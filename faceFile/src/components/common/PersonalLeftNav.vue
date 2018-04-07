<template>
  <div class="PersonalLeftNav">
        <el-menu
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b" router
            >
            <h3><span>账号中心</span></h3>
            <el-menu-item index="/account">账号信息</el-menu-item>
            <el-menu-item index="/SecuritySetting">安全设置</el-menu-item>
            <el-menu-item index="/ProjectManagement">项目管理</el-menu-item>
            <el-menu-item index="/visit">项目秘钥管理</el-menu-item>
            <!-- <el-submenu index="1-4">
                <template slot="title">应用授权</template>
                <el-menu-item index="">选项1</el-menu-item>
            </el-submenu> -->
        </el-menu>
        <!-- main区 -->
            <div class="container">
                <transition name="slide" mode="out-in">
                    <router-view/>
                </transition>
            </div>
  </div>
</template>
<script>
export default {
  name:'PersonalLeftNav',
  data () {
      return {
          msg:"PersonalLeftNav"
      }
  }
}
</script>
