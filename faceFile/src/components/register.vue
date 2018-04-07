<template>
  <div class="register">
      <div class="regist-wrapper">
            <div class="regist-header ">
                <a href="javascript:;" class="logo"></a>
            </div>
            <div class="regist-content ">
                 <div class="b-title">
                      <h2>注册账号</h2>
                 </div>
                 <div class="ct-inner">
                     <div class="tab">
                         <div class="regist-form">
                                <ul class="form-list">
                                    <li>
                                        <div class="form-input">
                                            <div class="form-unit tip-unit">
                                                <label class="input-tips J-placeholder" style="display: none;">账号</label>
                                                <input type="text" v-model="accountName" class="qc-log-input-text lg" placeholder="账号" >
                                                <ul class="tip-list" style="display: none" data-id="mailSuggest"></ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-input">
                                            <div class="form-unit">
                                                <label class="input-tips J-placeholder" style="display: none;">密码</label>
                                                <input type="password" v-model="password" class="qc-log-input-text lg" placeholder="密码" >
                                            </div>
                                        </div>
                                    </li>
                                    <!-- <li>
                                        <div class="form-input">
                                            <div class="form-unit">
                                                <label class="input-tips J-placeholder" style="display: none;">确认密码</label>
                                                <input type="password" class="qc-log-input-text lg" placeholder="确认密码" data-id="confirmPasswordInput">
                                            </div>
                                        </div>
                                    </li> -->
                                </ul>
                                <!-- <div class="sp-line">
                                    <span class="line"></span>
                                    <span class="title">联系手机</span>
                                </div> -->
                                <!-- <ul class="form-list">
                                    <li>
                                        <div class="form-input">
                                            <div class="fm-dropdown">
                                                <div class="mobile-code-dropdown J-dropdown">
                                                    <a class="dropdown-link">
                                                        <span class="flag china J-selectedFlag"></span>
                                                        <span class="mobile-code J-selectedCountryCode">
                                                            +86
                                                        </span>
                                                        <span class="arr"></span>
                                                    </a>
                                                </div>
                                                <input type="text" class="input-mobile qc-log-input-text" placeholder="手机号码" data-id="phoneInput">
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-input fm-verify">
                                            <div class="form-unit">
                                                <label class="input-tips J-placeholder" style="display: none;">验证码</label>
                                                <input type="text" class="qc-log-input-text" placeholder="验证码" data-id="smsCodeInput">
                                                <button type="button" class="qc-log-btn xl" data-id="smsCodeBtn" hotrep="regist.fmverify.btn">获取验证码</button>
                                            </div>
                                        </div>
                                    </li>
                                </ul> -->
                         </div>
                         <div class="form-ctrl-label-wrap">
                            <label class="form-ctrl-label">
                                <input type="checkbox" checked="" class="qc-log-checkbox J-agreement" value="">
                                <span>我已阅读并同意
                                    <a class="link" target="_blank" href="javascript:;" hotrep="register.terms.service.zh">Hytera云服务协议</a>
                                    和
                                    <a class="link" target="_blank" href="javascript:;" hotrep="register.privacy.policy.zh">Hytera云隐私声明</a>
                                </span>
                            </label>
                        </div>
                        <div class="op-btn">
                            <button type="button" class="qc-log-btn lg " id="commit" hotrep="regist.op.regist.btn" @click="regist" v-show="isShow">同意协议并提交</button>
                            <button type="button" class="qc-log-btn lg" id="commitLoading" style="display:none" v-show="show">
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
                 </div>
            </div>
            <div class="regist">
                <p class="tag-line">
                    已有账号？<router-link to="/login" hotrep="regist.mailactiv.login">立即登录</router-link>
                </p>
            </div>
           
      </div>
       <div class="lg-footer J-loginLanguage">
            <div class="copyright">
                <p class="tag-line">
                    Copyright © 2015-2018 Hytera Cloud. All Rights Reserved. 
                    <span>海能达云&nbsp;版权所有</span>
                </p>
            </div>
        </div>
  </div>
</template>
<script>
import all from "../api/all.js";
export default {
  name: "register",
  data() {
    return {
      accountName: "",
      password: "",
      isShow: true,
      show: false
    };
  },
  methods: {
    regist() {
      //   debugger
      var data = {
        accountName: this.accountName,
        password: this.password
      };
      all
        .adduser(data)
        .then(res => {
          // alert('成功')
          console.log(res);
            this.isShow = !this.isShow;
            this.show = !this.show;
            this.$message({
              message: "注册成功",
              type: success
            });
            setTimeout(() => {
              this.$router.push({
                path: "/login",
                name: "登录"
              });
            }, 2000);
        })
        .catch(e => {
            this.isShow == this.isShow;
            this.show == this.show;
          this.$message.error('请求超时！')
        });
    },
    link() {
      this.$router.push({
        path: "/login",
        name: "登录"
      });
    }
  }
};
</script>
<style>
.lg-footer {
  width: 100%;
  text-align: center;
  padding-bottom: 20px;
  /* margin-top: 45px; */
}
.copyright {
  margin-top: 15px;
}
.copyright .tag-line,
.copyright a {
  color: #999;
}
.regist {
  margin-top: 20px;
  text-align: center;
}
.regist-wrapper .tag-line {
  font-size: 14px;
  color: #666;
}
body {
  background: #eee;
}
.register {
  width: 100%;
  height: 100%;
}
.regist-wrapper {
  position: relative;
  padding-top: 44px;
  padding-bottom: 40px;
}

.regist-header {
  text-align: center;
}

.regist-content {
  text-align: center;
  max-width: 1180px;
  margin: 40px auto 0;
  background-color: #fff;
  padding-bottom: 40px;
}
.regist-content > .b-title {
  text-align: center;
  padding: 45px 40px 0;
  overflow: hidden;
}
.regist-content > .b-title h2 {
  font-size: 24px;
  color: #333;
  font-weight: 400;
  padding-bottom: 10px;
  border-bottom: 1px solid #e7e7e7;
}
.regist-content .ct-inner {
  width: 420px;
  margin: 0 auto;
}
.regist-form {
  padding-top: 20px;
}
.form-input {
  vertical-align: top;
  padding-bottom: 20px;
  position: relative;
}
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
.regist-content .qc-log-input-text.lg {
  width: 100%;
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
.tip-unit .tip-list {
  position: absolute;
  top: 48px;
  left: 0;
  width: 100%;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 2px;
  color: #000;
  font-size: 14px;
  z-index: 5;
  max-height: 370px;
  overflow-y: auto;
  box-sizing: border-box;
}
.regist-content .sp-line {
  text-align: center;
  height: 20px;
  margin-bottom: 20px;
}
.regist-content .sp-line .line {
  display: inline-block;
  border-top: 1px solid #d1d2d4;
  width: 100%;
}
.regist-content .sp-line .title {
  color: #999;
  font-size: 14px;
  position: relative;
  top: -14px;
  background-color: #fff;
  padding-left: 10px;
  padding-right: 10px;
}
.form-input {
  vertical-align: top;
  padding-bottom: 20px;
  position: relative;
}
.fm-dropdown {
  position: relative;
  border: 1px solid #d1d2d3;
  border-radius: 2px;
  text-align: left;
}

.fm-dropdown .mobile-code-dropdown .flag.china:before,
.fm-dropdown .mobile-code-dropdown .flag.cn:before {
  background-position: 0 -1196px;
}
.fm-dropdown .mobile-code-dropdown .mobile-code {
  vertical-align: middle;
  color: #333;
  margin-right: 10px;
  width: 40px;
  display: inline-block;
}
.fm-dropdown .mobile-code-dropdown .flag {
  display: inline-block;
  width: 16px;
  height: 11px;
  line-height: 11px;
  vertical-align: baseline;
  margin: 0 6px 0 0;
  text-decoration: inherit;
  speak: none;
  -webkit-font-smoothing: antialiased;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 1px solid #d1d1d1;
}
.fm-dropdown .mobile-code-dropdown .dropdown-link {
  display: inline-block;
  height: 45px;
  line-height: 45px;
  vertical-align: top;
  width: 100px;
  padding-left: 10px;
  position: relative;
}
.fm-dropdown .mobile-code-dropdown {
  position: absolute;
  left: 0;
  top: 0;
  width: 120px;
}
.fm-dropdown {
  position: relative;
  border: 1px solid #d1d2d3;
  border-radius: 2px;
  text-align: left;
}
.fm-dropdown .qc-log-input-text.input-mobile {
  display: block;
  width: 100%;
  padding-left: 120px;
  border: none;
}
.qc-log-btn {
  background-color: #00a2ff;
  border: none;
  color: #fff;
  border-radius: 2px;
  outline: 0;
}

.fm-verify .qc-log-input-text,
.fm-verify .qc-log-btn {
  width: 47.6%;
  display: inline-block;
  vertical-align: top;
  font-size: 14px;
}
.fm-verify .qc-log-input-text {
  margin-right: 1.4%;
}
.fm-verify .qc-log-btn {
  background: #f4f4f4;
  border: 1px solid #d1d2d4;
  margin-left: 2.3%;
  height: 45px;
  color: #333;
}
.form-ctrl-label-wrap {
  text-align: left;
  max-width: 420px;
  margin: 0 auto 15px;
}
.form-ctrl-label,
.form-ctrl-label-stacked,
.qc-log-radio-wrap {
  font-size: 14px;
  cursor: pointer;
  vertical-align: middle;
  line-height: 1;
}

.form-ctrl-label {
  margin-right: 15px;
}
.form-ctrl-label .qc-log-checkbox {
  vertical-align: -3px;
  margin-right: 5px;
}

/* .qc-log-checkbox:checked {
    background-image: url("../../static/img/regist-v20180108-201802070848.png");
    background-position: -31px 0px;
}
.qc-log-checkbox {
    width: 16px;
    height: 16px;
    cursor: pointer;
    vertical-align: middle;
    outline: 0;
    background: 0 0\9;
    background-image: url("../../static/img/regist-v20180108-201802070848.png");
    -webkit-appearance: none;
    background-position: 0px -15px;
} */
.form-ctrl-label-wrap span {
  display: inline-block;
  vertical-align: top;
  color: #666;
  max-width: 89%;
  line-height: 1.4;
}
.regist-wrapper .link {
  color: #00a4ff;
  padding: 0 5px;
}
.regist-content .qc-log-btn.lg {
  width: 100%;
  height: 45px;
  border: none;
  margin-bottom: 20px;
  font-size: 16px;
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
@keyframes bouncedelay {
  0%,
  100%,
  80% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    opacity: 1;
  }

  40% {
    transform: scale(1);
    -webkit-transform: scale(1);
    opacity: 0.8;
  }
}
</style>
