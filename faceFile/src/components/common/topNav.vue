<template>
   <div class="topNav">
        <nav class="nav">
          <div class="navbar-brand">
                  <img src="/static/img/logo.png" alt="Hytera">
          </div>
          
           <el-menu
            active="$route.path"
            class="el-menu-demo active"
            mode="horizontal"
            background-color="rgb(38,38,38)"
            text-color="#fff"
            active-text-color="#ffd04b" router
            >
            <el-menu-item index="/PersonalSettings">个人信息
                  <ul class="drop-down">
                      <li><router-link to="/account">账号信息</router-link></li>
                      <li><router-link to="/SecuritySetting">安全设置</router-link></li>
                      <li><router-link to="/ProjectManagement">项目管理</router-link></li>
                      <li><router-link to="/login">退出</router-link></li>
                      <!-- <li><router-link :to=""></router-link></li> -->
                      
                  </ul>            
              
            </el-menu-item>
            <el-menu-item index="/cost">费用</el-menu-item>
            <el-menu-item index="/order">工单</el-menu-item>
            
        </el-menu>
        <div class="clearfix"></div>
       </nav>
   </div>
</template>
<script>
export default {
  name:'topNav',
  data () {
      return {
          PersonalSettings:'1'
      }
  },
  methods: {
       handleSelect(key, keyPath) {
        // console.log(key, keyPath);
      },
    }
}
</script>
<style>
.drop-down{
    position: absolute;
    top:60px;
    left: 0;
    z-index: 10;
    background:#545C64;
    color:#fff;
    text-align: center;
    margin:0;
    padding-left:0;
    line-height: 0;
    border-radius:3px;
    display: none;
}
.drop-down li{
    padding:10px;
    transition: color 0.5s, background-color 0.5s;
    display: table;
}
.drop-down li a{
    display: table-cell;
    padding:10px;
}
.nav{
    background-color: rgb(38, 38, 38);
    /* overflow: hidden; */
    padding:0 20px;
}
.clearfix{
    /* overflow: hidden; */
    clear:both;
}
.el-menu-demo{
    float:right;
}
.navbar-brand{
    float: left;
    width:120px;
    height: 50px;
    margin-left: 30px;
    margin-top:5px;
}
.navbar-brand img{
    display:block;
    width:100%;
    height:100%;
}
.el-menu--horizontal>.el-menu-item:hover{
    background:rgb(67,74,80) !important;
}

.el-menu--horizontal>.el-menu-item{
    background-color: rgb(38, 38, 38);
    /* background:none; */
}
.el-menu--horizontal>.el-menu-item:nth-child(1):hover .drop-down{
    display:block;
}
.el-menu--horizontal>.el-menu-item.is-active{
    border-bottom-color:rgb(255, 208, 75);
} 
</style>


