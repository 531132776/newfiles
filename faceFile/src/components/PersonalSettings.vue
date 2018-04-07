<template>
  <div class="personal-settings">
     <el-container>
          <el-aside>
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
                <!-- <el-menu-item index="/visit">访问管理</el-menu-item> -->
                
            </el-menu>
          </el-aside>
          <el-main>
              <!-- <transition  :name="transitionName">
                  <router-view/>
              </transition> -->
               <transition  name="fade">
                  <router-view/>
              </transition>
          </el-main>
     </el-container>
  </div>
</template>
<script>
// import PersonalLeftNav from './common/PersonalLeftNav'
export default {
  name:'personal-settings',
  data () {
      return {
          msg:"噶哥哥二哥饿哥哥个",
          transitionName :''
      }
  },
  components: {
      // PersonalLeftNav
  },
  watch: {//使用watch 监听$router的变化
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if(to.meta.index > from.meta.index){
        //设置动画名称
        this.transitionName = 'slide-left';
      }else{
        this.transitionName = 'slide-right';
      }
    }
  }
}
</script>
<style>
h3{
  font-size: 1.5em;
}
.fade-enter-acitve, .fade-leave-active{
  transition:opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity:0;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0.5;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0.5;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0.5;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0.5;
  transform: translate3d(-100%, 0, 0);
}
.el-menu {
    border-right: 0;
}
.el-main{
    padding:0;
}
</style>

