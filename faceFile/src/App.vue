<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <transition name="fade" mode="out-in">
         <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {

      }
    },
    created:function() { //已经有数据，但是还没有挂载到el上 //$el 属性目前不可见
            //console.log('APP实例已经创建,msg变量还未渲染到模板')
    },
    mounted:function(){  
        // 挂载到当前el上的时候触发，可以理解为页面一进来的时候首先加载的东西
        //获取数据调用可以放这,
        //console.log('APP已经挂载到模板上:msg变量渲染到模板')  

    },
    updated:function(){
        //console.log('APP实例更新啦')    
    },
    destroyed:function(){
        // console.log('APP销毁啦')  
    },
    computed:{ //计算属性  主体也是data，较为复杂需要处理的响应数据
        double:function(){
            //return this.value*this.value
        }
    },
    methods:{//当前页面定义的方法
        
    }
}
</script>

<style>
body{
  margin:0;
  /* -webkit-user-select:none;

   -moz-user-select:none;

   -ms-user-select:none;

   user-select:none; */
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  width:100%;
  height:100%;
}
.fade-enter-acitve, .fade-leave-active{
  transition:opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity:0;
  transition:.5s
}
</style>
