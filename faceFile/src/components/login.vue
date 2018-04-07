<template>
     <div class="login-body">
      <div class="login-wrapper">
           <div class="login-inner">
                <div class="lg-aside">
                   <div class="lg-logo">
                       <a href="#">
                           <i class="lg-logo-icon"></i>
                       </a>
                   </div>
                   <div class="lg-aside-event">
                       <div class="lg-aside-event-tit">
                             <div class="lg-aside-event-icon">
                                 <img src="../../static/img/icon.svg" alt="">
                             </div>
                             <h2>云产品新购特惠</h2>
                       </div>
                       <div class="lg-aside-event-con">
                           <div class="lg-aside-event-txt">
                               <i class="lg-aside-event-txt-icon"></i>
                               <span>购买云服务器1核1G </span>
                           </div>
                           <div class="lg-aside-event-txt">
                               <i class="lg-aside-event-txt-icon"></i>
                               <span>3年时长低至265元/年 </span>
                           </div>
                           <div class="lg-aside-event-txt">
                               <i class="lg-aside-event-txt-icon"></i>
                               <span>五折上云，等您选购 </span>
                           </div>
                           <div class="lg-aside-event-btn">
                               <a href="" class="qc-event-btn">
				                     立即抢购
                               </a>
                           </div>
                       </div>
                   </div>
                </div>
                <div class="lg-content">
                     <div class="qc-pt-login-content">
                         <div class="qc-pt-login-content J-commonLoginContent">
                             <div class="login-tab">
                                 <h1 class="login-tab-title J-txtLoginTitle">邮箱登录</h1>
                                 <div class="login-box J-loginContentBox J-qcloginBox">
                                     <div class="login-form">
                                         <ul class="form-list">
                                             <li>
                                                 <div class="form-input">
                                                     <div class="form-unit tip-unit">
                                                         <label class="input-tips" style="display: none;">账号</label>
                                                         <input value="" v-model="accountName" type="text" class="qc-log-input-text lg J-username" placeholder="账号">
                                                         <ul class="tip-list J-mailSuggest" style="display:none;">
                                                         </ul>
                                                     </div>
                                                 </div>
                                             </li>
                                            <li>
                                                <div class="form-input">
                                                    <div class="form-unit">
                                                        <label class="input-tips" style="display: none;">密码</label>
                                                        <input type="password"  v-on:keyup.enter="login" v-model="passWord" class="qc-log-input-text lg J-password" placeholder="密码">
                                                    </div>
                                                </div>
                                            </li>
                                            <li style="display:none;" class="J-vcodeArea">
                                                <div class="form-input fm-security">
                                                    <div class="form-unit">
                                                        <label class="input-tips" style="display: none;">验证码</label>
                                                        <input type="text" class="qc-log-input-text J-vcodeInput" placeholder="验证码" style="width:124px">
                                                        <a href="javascript:;" class="security-num J-changeVCode">
                                                            <img class="security-img J-vcodeImg">
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                         </ul>
                                     </div>
                                     <div class="op-btn">
                                         <input type="button" value="登 录" @click="login" class="qc-log-btn J-loginBtn" hotrep="login.btn.doLogin" v-show="isShow">
                                         <button type="button" class="qc-log-btn lg" v-show="show">
                                             <div class="m-loading">
                                                 <div class="loading">
                                                     <div class="one"></div>
                                                     <div class="two"></div>
                                                     <div class="three"></div>
                                                 </div>
                                             </div>
                                         </button>
                                     </div>
                                 </div>
                                 <div class="outside-login J-switchLoginTypeArea">
                                      <div class="outside-login-aside">
                                          <a href="#" class="outside-login-aside-link J-link">忘记账号</a>
                                          <a href="#" class="outside-login-aside-link J-link">忘记密码</a>
                                      </div>
                                 </div>
                                 <div class="login-reg-mod J-registerArea">
                                     <div class="login-reg-txt">
                                              还没有注册云账号？
                                     </div>
                                     <div class="login-reg-btn">
                                         <router-link to="/register" class="qc-event-btn J-link">
                                             立即注册
                                         </router-link>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                </div>
           </div>
      </div>
  </div>
  
  
</template>
<script>
import all from "../api/all.js";
export default {
  name: "login-body",
  data() {
    return {
      //   msg: "发士大夫"
      accountName: "",
      passWord: "",
      show: false,
      isShow: true
    };
  },
  methods: {
    login() {
      var data = {
        //    tel:"123", huanugcong  123
        accountName: this.accountName,
        password: this.passWord
      };
      all
        .loginSystem(data)
        .then(data => {
          //    alert("ss");
          if (data.success == "true") {
            sessionStorage.setItem("id", data.data.id);
            //localStorage.setItem("dd",12);
            this.show = !this.show;
            this.isShow = !this.isShow;
            setTimeout(() => {
              this.$router.push({
                path: "/account",
                name: "主页"
                //    query: {
                //        id:data.data.id
                //    }
              });
            }, 2000);
          } else {
            alert("账号或密码错误!");
          }
        })
        .catch(e => {
          alert("失敗");
        });
    },
    register() {
      this.$router.push({
        path: "/register",
        name: "注册"
        //    query: {
        //        id:data.data.id
        //    }
      });
    }
  }
};
</script>
<style>
ul {
  padding: 0;
}
.login-reg-btn .qc-event-btn {
  border: 1px solid #00a4ff;
  color: #00a4ff;
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 14px;
}
.login-reg-mod {
  border-top: #e5e5e5 1px solid;
  width: 310px;
  margin: 0 auto 10px;
}
.login-reg-txt {
  color: #999;
  padding: 10px 0 15px;
}
.outside-login-aside {
  position: absolute;
  right: 0;
  top: 22px;
}
.outside-login-aside a {
  color: #000;
  margin-left: 15px;
  font-size: 12px;
}
.outside-login {
  text-align: left;
  position: relative;
  font-size: 0;
  width: 310px;
  margin: 0 auto 15px;
  padding-top: 15px;
  min-height: 26px;
}
.login-body {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  min-width: 1000px;
}
/* .login-wrapper {
  width: 100%;
  height: 100%;
  background: url("/static/img/qcloud-login-bg.jpg?nowebp") top center no-repeat;
  background-size: cover;
  position: relative;
  min-height: 640px;
} */
.login-inner {
  max-width: 1200px;
  position: relative;
  margin: 0 auto;
}
.lg-aside {
  padding-top: 50px;
  margin-right: 450px;
  padding-left: 10px;
}
.lg-content {
  position: absolute;
  right: 10px;
  top: 120px;
}
.qc-pt-login-content .login-box .login-form .form-list {
  width: 310px;
  margin: 0 auto;
}
.qc-pt-login-content .login-box .login-form .form-input {
  padding-bottom: 15px;
  position: relative;
}
.fm-dropdown .input-tips,
.form-input .input-tips {
  position: absolute;
  top: 15px;
  left: 12px;
  font-size: 14px;
  line-height: 16px;
  color: #999;
  cursor: text;
  display: none;
  text-align: left;
}
.qc-log-input-text {
  font-size: 14px;
  height: 45px;
  width: 258px;
  display: inline-block;
  border: 1px solid #ddd;
  border-radius: 2px;
  color: #333;
  vertical-align: middle;
  padding: 13px 10px 12px;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  line-height: 1;
}
.qc-pt-login-content .login-box .login-form .fm-security {
  text-align: left;
}
.qc-pt-login-content .login-box .op-btn {
  width: 310px;
  margin: 0 auto;
  padding-bottom: 0;
}
.qc-pt-login-content .login-box .op-btn .qc-log-btn {
  width: 100%;
  height: 40px;
  font-size: 14px;
  -webkit-appearance: none;
}
.qc-log-btn {
  background-color: #00a2ff;
  border: none;
  color: #fff;
  border-radius: 2px;
  outline: 0;
  cursor: pointer;
}
.m-loading {
  text-align: center;
}
.m-loading .loading > div {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: #fff;
  -webkit-animation: bouncedelay 0.7s infinite ease-in-out both;
  animation: bouncedelay 0.7s infinite ease-in-out both;
  text-align: center;
  margin-left: 4px;
  margin-right: 4px;
}
.m-loading .loading .one {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.m-loading .loading .two {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.form-input .input-tips {
  top: 12px;
}
.qc-pt-login-content .login-box .login-form .fm-security .qc-log-input-text {
  width: 125px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 8px;
}
.qc-pt-login-content .login-box .login-form .fm-security .security-num {
  display: inline-block;
  margin-left: 7px;
  border: 1px solid #d1d2d4;
  border-radius: 2px;
  vertical-align: middle;
}
.qc-pt-login-content .login-box .login-form .fm-security .security-img {
  width: 106px;
  height: 26px;
  padding: 6px 9px;
  display: block;
}
.qc-pt-login-content .login-box .qc-log-input-text {
  width: 310px;
  height: 40px;
  padding-top: 11px;
  padding-bottom: 9px;
}
.qc-pt-login-content {
  position: relative;
  display: inline-block;
  text-align: center;
}
.qc-pt-login-content .login-tab {
  display: inline-block;
  background: #fff;
  width: 430px;
  border-radius: 4px;
  padding-bottom: 20px;
}
.login-tab-title {
  font-size: 28px;
  font-weight: 400;
  padding-top: 25px;
  color: #333;
}
.lg-logo {
  padding-bottom: 40px;
  position: relative;
}
.lg-logo-icon {
  /* background-image: url(sprite/login-v20180108-201802011033.svg); */
  width: 150px;
  height: 40px;
  display: inline-block;
  background-position: 0.58% 64.28%;
  background-size: 214.66666666666666% 685.785536159601%;
  background-repeat: no-repeat;
}
.lg-aside-event-tit {
  color: #fff;
  font-size: 0;
  padding-top: 30px;
}
.lg-aside-event-icon {
  width: 50px;
  height: 50px;
  display: inline-block;
  margin-right: 20px;
  padding-left: 4px;
}
.lg-aside-event-icon img {
  max-width: 100%;
  max-height: 100%;
  display: block;
  vertical-align: top;
}
.lg-aside-event-tit h2 {
  display: inline-block;
  font-weight: 400;
  font-size: 28px;
  vertical-align: top;
  line-height: 1.8;
}
.lg-aside-event-txt {
  margin-top: 15px;
}
.lg-aside-event-con {
  padding-left: 70px;
  font-size: 14px;
  color: #fff;
  vertical-align: middle;
}
/* .lg-aside-event-txt-icon {
  background-image: url(/static/img/login-v20180108-201802011033.svg);
  width: 16px;
  height: 12px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
  background-position: 74.83999999999999% 48.29%;
  background-size: 2012.5% 2291.666666666667%;
  background-repeat: no-repeat;
} */
.lg-aside-event-txt span {
  vertical-align: middle;
}
.lg-aside-event-btn {
  margin-top: 30px;
}
.qc-event-btn {
  width: 250px;
  height: 45px;
  text-align: center;
  line-height: 45px;
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 2px;
  display: inline-block;
  color: #fff;
}
.qc-event-btn:hover {
  background-color: #fff;
  color: #666;
}
</style>
