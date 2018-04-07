<template>
  <div class="account">
      <div class="title-select-panel">
          <h2>账号信息</h2>
      </div>
      <div class="approve-box">
           <!-- 账户信息 -->
           <div class="account-box">
                <h2 class="title">基本资料</h2>
                <dl class="approve-dl">
                    <dt>
                        <label for="">
                            注册账号
                            <div class="tc-15-bubble-icon">
                                 <i class="tc-icon plaint-icon"></i>
                            </div>
                            ： {{accountName}}
                        </label>
                    </dt>
                    <!-- <dd>
                        <span class="info-text-group">
                            <span data-id="user-account">
                                <i class="info-text-icon email"></i>
                                       {{email}}
                            </span>
                        </span>
                    </dd> -->
                </dl>
                <dl class="approve-dl">
                    <dt>
                        <label for="">
                            账号ID
                            <div class="tc-15-bubble-icon">
                                 <i class="tc-icon plaint-icon"></i>
                            </div>
                            ：  {{accountId}}
                        </label>
                    </dt>
                    <!-- <dd>
                        <span class="info-text">
                              {{accountId}}
                        </span>
                    </dd> -->
                </dl>
                 <dl class="approve-dl">
                    <dt>
                        <label for="">
                           邮箱
                             <div class="tc-15-bubble-icon">
                                 <i class="tc-icon plaint-icon"></i>
                            </div>
                            ： {{email}}
                        </label>
                    </dt>
                </dl>
                <dl class="approve-dl">
                    <dt>
                        <label for="">
                            手机号
                            ：{{tel}}
                        </label>
                    </dt>
                    <!-- <dd>
                        <span class="info-text">
                             
                        </span>
                    </dd> -->
                </dl>
                <dl class="approve-dl J-rowItem">
                    <dt><label for="">昵称：{{userName2}}</label></dt>
                    <dd class="viewNicknameModule">
                        <!-- <span class="info-text J-txtNickname" data-nickname="531132776@qq.com">
                               {{userName2}}
                        </span> -->
                        <a href="javascript:;" class="change-btn" data-event="toggleEditNicknameState">
                            修改</a>
                    </dd>
                    <dd class="editNicknameModule" style="display:none">
                        <input type="text" autocomplete="off" class="tc-input-text small-input J-iptNickname" tabindex="10" value="531132776@qq.com">
                        <a href="javascript:;" data-event="updateNickname" class="tc-15-btn m J-btnUpdateNickname">
                            保存
                        </a>
                        <a href="javascript:;" data-event="toggleEditNicknameState" class="tc-15-btn m weak">
                            取消
                        </a>
                        <p class="error-text" style="display:none"></p>
                    </dd>
                </dl>
           </div>
           <!-- 业务信息 -->
           <div class="account-box sub-mod">
                  
           </div>
      </div>
  </div>
</template>
<script>
import all from '../api/all.js'
export default {
  name: "login-body",
  data() {
    return {
            email:'',
            appId:'',
            accountId:'',
            accountName:'',
            userName2:'',
            tel:'',
            items:''
    };
  },
  mounted:function(){
       var data={
        //    tel:"123", huanugcong  123
              id:sessionStorage.getItem("id"),
            //  accountName:"zhuxuyong"
         //  this.$route.params;
         //  password:"dd"
       }
       all.finduser(data).then(data=>{
        //    debugger
           this.userName2=data.data.userName;
           this.email=data.data.email;
           this.tel=data.data.tel;
           if(null!=data.data.projectId){
                   this.appId=data.data.projectId.toString();
           }
           this.accountName=data.data.accountName;
           this.accountId=data.data.userNo;
       }).catch(e=>{  
       })
     
  }
  
  
   
   
       
};
</script>
<style>
h2{
    margin:0;
}
.approve-dl .change-btn {
    padding: 0 20px;
    height: 30px;
    line-height: 30px;
    background: #fff;
    border-color: #ddd;
    color: #000;
    font-size: 12px;
    border-radius: 0;
    border: 1px solid #ccc;
    border-radius: 3px;
    text-align: center;
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
    margin-left: 10px;
}
.approve-dl dd .info-text:first-child {
    line-height: inherit;
    margin-top: 0;
    margin-bottom: 8px;
}
.info-text {
    /* margin-top: 4px; */
    display: inline-block;
}
.approve-dl{
    position: relative;
    display: table-row;
    width: 100%;
}
.account-box .approve-dl>dt {
    width: 90px;
    display: table-cell;
    white-space: nowrap;
    color: #888;
    display: table-cell;
    text-align: left;
    padding-right: 10px;
    padding-bottom: 20px;
}
.approve-dl dd {
    display: table-cell;
    color: #000;
}
.info-text-icon {
    display: inline-block;
    vertical-align: -2px;
    vertical-align: middle;
    margin-right: 5px;
    width: 16px;
    height: 16px;
    background-repeat: no-repeat;
}
/* .info-text-icon.email {
    background-image: url("/static/img/account-center-201801300959-svg.png");
    background-image: -webkit-image-set(url("/static/img/account-center-201801300959-svg.png")1x,url("/static/img/account-center-201801300959.svg") 2x);
    background-position: 56.69642857142857% 99.52380952380952%;
    background-size: 1500% 1412.5%;
    background-repeat: no-repeat;
} */
.tc-15-bubble-icon {
    font-size: 0;
    position: relative;
    display: inline-block;
    vertical-align: middle;
}
.tc-15-bubble-icon .tc-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    vertical-align: middle;
    cursor: pointer;
}
/* .plaint-icon {
    width: 16px;
    height: 16px;
    background-image: url("/static/img/account-center-201801300959-svg.png");
    background-image: -webkit-image-set(url("/static/img/account-center-201801300959-svg.png")1x,url("/static/img/account-center-201801300959.svg") 2x);
    background-position: 91.51785714285714% 77.61904761904762%;
    background-size: 1500% 1412.5%;
    background-repeat: no-repeat;
} */
.approve-dl dt .tc-15-bubble-icon {
    top: -1px;
}
.account{
    width: 100%;
    height: 100%;
    overflow-x: auto;
    overflow-y: auto;
}
.title-select-panel {
    padding-top: 10px;
    padding-bottom: 10px;
    line-height: inherit;
    height: auto;
    padding-left: 20px;
    padding-right: 20px;
    margin-left: 0px;
    margin-right: 0px;
    background-color: rgb(255, 255, 255);
    border-bottom: 1px solid rgb(221, 221, 221);
}
.title-select-panel h2{
    font-size: 16px;
    font-weight: 700;
    height: 30px;
    line-height: 30px;
    display: inline-block;
    vertical-align: middle;
    margin:0 18px 0 0;
}
.approve-box{
    /* max-width: 1360px; */
    font-size: 12px;
    margin: 0px auto;
    padding:20px 20px 0;
}
.account-box{
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 3px 0px;
    margin-top: 0px;
    max-width: 1360px;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
}
.account-box, .account-box.sub-mod {
    margin-bottom: 20px;
    padding: 20px;
    border-bottom: none;
}
.account-box.sub-mod {
    margin-left: 0px;
}
.account-box .title {
    margin-bottom: 11px;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    font-weight: 700;
    color: rgb(0, 0, 0);
    padding: 0px;
}
</style>


