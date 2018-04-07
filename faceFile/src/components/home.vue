<template>
    <div class="home">
        <!-- 头部区 -->
            <div class="topNav">
                  <nav class="nav">
                    <div class="navbar-brand">
                            <img src="../../static/img/logo.png" alt="Hytera">
                    </div>
                    
                    <el-menu
                        :default-active="$route.path"
                        router 
                        class="el-menu-demo" 
                        mode="horizontal" 
                        background-color="rgb(38, 38, 38)"
                        text-color="#fff"
                        active-text-color="rgb(255, 208, 75)"
                        >
                        <el-menu-item index="">
                            <router-link to="/PersonalSettings" style="display:table-cell">个人信息</router-link>
                            <ul class="drop-down">
                                <li><router-link to="/account">账号信息</router-link></li>
                                <li><router-link to="/SecuritySetting">安全设置</router-link></li>
                                <li><router-link to="/ProjectManagement">项目管理</router-link></li>
                                <li><router-link to="/visit">访问管理</router-link></li>
                                <li style="display:block;"><a href="#" @click="loginOut" style="display:block;">退出</a></li>
                            </ul>            
                        
                        </el-menu-item>
                        <el-menu-item index="/cost">费用
                        </el-menu-item>
                        <el-menu-item index="/order">工单
                        </el-menu-item>
                        
                    </el-menu>
                    <div class="clearfix"></div>
                </nav>
            </div>
        <!-- main区 -->
            <div class="container">
                <transition name="fade" mode="out-in">
                    <router-view/>
                </transition>
            </div>
    </div>
</template>
<script>
import all from "../api/all.js";
// import topNav from './common/topNav'
export default {
  name: "home",
  data() {
    return {
      //   activeMenuIndex:this.$route.path
    };
  },
  components: {
    //   topNav
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    },
    async loginOut() {
      try {
        let result = all.logout();
        console.log(result);
        this.$router.push({
          path: "/login",
          name: "登录"
        });
      } catch (e) {
        alert("no");
      }
    }
  }
};
</script>
<style>
.fade-enter-acitve,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
/* .slide-enter-active, .slide-leave-active{
     transition: all 0.5s linear;
     opacity: 0;
}
  
 .slide-enter, .slide-leave-to{
      transition:all .5s linear;
      opacity:1;
 } */
.home {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  /* overflow-y: hidden;
    overflow-x: hidden; */
}
@-webkit-keyframes fadeInOut {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.6;
  }
  75% {
    opacity: 1;
  }
}
.home {
  -webkit-animation-name: fadeInOut;
  -webkit-animation-timing-function: ease-in;
  -webkit-animation-duration: 1s;
  -webkit-animation-direction: alternate;
}
.container {
  position: absolute;
  /* left: -200px; */
  left: 0;
  top: 60px;
  right: 0;
  bottom: 0;
  background-color: #f2f2f2;
  transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: left 0.3s;
}
.drop-down {
  position: absolute;
  top: 60px;
  left: 0;
  z-index: 10;
  background: #545c64;
  color: #fff;
  text-align: center;
  margin: 0;
  padding-left: 0;
  line-height: 0;
  border-radius: 3px;
  display: none;
}
.drop-down li {
  padding: 10px;
  transition: color 0.5s, background-color 0.5s;
  /* display: table; */
}
.drop-down li:hover {
  background-color: rgb(67, 74, 80);
}
.drop-down li a {
  display: table-cell;
  padding: 10px;
}
.nav {
  background-color: rgb(38, 38, 38);
  /* overflow: hidden; */
  padding: 0 20px;
}
.clearfix {
  /* overflow: hidden; */
  /* clear:both; */
}
.el-menu-demo {
  float: right;
}
.navbar-brand {
  float: left;
  width: 120px;
  height: 50px;
  margin-left: 30px;
  margin-top: 5px;
}
.navbar-brand img {
  display: block;
  width: 100%;
  height: 100%;
}
.el-menu{
    background-color: none;
}
.el-menu--horizontal > .el-menu-item:hover {
  background: rgb(67, 74, 80) !important;
}

.el-menu--horizontal > .el-menu-item {
  background-color: rgb(38, 38, 38);
}
.el-menu--horizontal > .el-menu-item:nth-child(1):hover .drop-down {
  display: block;
}
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom-color: rgb(255, 208, 75);
}
</style>

