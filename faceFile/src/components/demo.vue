<template>
 <transition name="fade">
  <div class="demo">
    
    <div id="navigationBar" data-type="cn_zh" class="c-nav c-nav-v2  c-nav-hover " style="z-index: 1000;position:  relative ">
      <div class="c-nav-inner">
        <div class="c-nav-logo lyout">
          <a href="javescript:;" hotrep="hp.header.hp">
            <i class="c-logo-icon"></i></a>
        </div>
       
        <div id="qcTopNav" class="c-nav-categories">
          <div id="qcTopNav" class="c-nav-categories">
            <ul class="c-nav-list J-qcTopNavList" style="visibility: visible;">
              <li class="presentation J-qcTopNavItem" data-id="product" data-action="expand" data-title="产品" style="display: inline-block;">
                <a role="button" href="#" hotrep="hp.header.product" aria-haspopup="true" aria-expanded="false" aria-controls="qcTopNavSheetWrapper">产品</a></li>
            
            </ul>
          </div>
        </div>
        <!--操作区域 start-->
        <div id="qcTopNavOpera" class="c-nav-operation" style="visibility: visible;">
         
          <!--功能区域 start-->
          <div class="c-nav-ctrl">
            
            <!--语言 end-->
            <!--其他连接以及按钮 未登录 start-->
            <div class="c-nav-links">
              <router-link to="/pdf" target="_blank" class="link-item J-qcTopNavBtnRegister" >Q&A</router-link>
              <router-link to="/register" class="link-item J-qcTopNavBtnRegister" >注册</router-link>
              <router-link to="/login" class="link-item J-qcTopNavBtnLogin" >登录</router-link>
              
            </div>
            <div class="c-nav-links">
              
            <!--其他连接以及按钮 end--></div>
          <!--功能区域 end--></div>
        </div>
      
      </div>
    </div>
     <div class="main">
      <!-- ci-item-1 到 ci-item-3对应前三个页面 -->
      <div class="ci-item-4 ci-tab">
        <div class="ci-tab-list-wrapper" style="z-index: 4; top: 65px;">
          <ul class="ci-tab-list">
          <li>
              <a href="javascript:void(0);" data-target="ci-item-4" class="ci-tab-item active">表情识别</a></li>
            <!-- <li>
              <a href="javascript:void(0);"  class="ci-tab-item">图片鉴黄</a></li>
            <li>
              <a href="javascript:void(0);"  class="ci-tab-item">图片标签</a></li>
            <li>
              <a href="javascript:void(0);"  class="ci-tab-item">ocr识别</a></li> -->
          </ul>
        </div>
        <div class="ci-tab-panel">
          <!-- 图片鉴黄 -->
          
          <!-- ocr识别 -->
         
          <!-- 人脸识别 暂不上线 -->
          <div class="ci-tab-panel-item ci-tab-panel-item-4">
            <div class="page-description" style="height: 546px;">
              <div class="page-content">
                <h2 class="page-content-head">算法超市 人脸识别</h2>
                <p class="page-content-desc">准确率高达99.95%</p>
                <ul class="page-detail-list" style="display:none">
                  <li class="page-detail-item">
                    <span class="page-item-icon page-item-icon-1"></span>
                    <h3 class="page-item-head">高可用性</h3>
                    <p class="page-item-desc">立足于海能达社交数据大平台收集的海量人脸训练集，成功标注的千万人脸数据。</p></li>
                  <li class="page-detail-item">
                    <span class="page-item-icon page-item-icon-2"></span>
                    <h3 class="page-item-head">高准确性</h3>
                    <p class="page-item-desc">独创Uface深度人脸模型，LFW评测以99.65%目前世界领先。实际互联网金融场景测试，自拍-身份证缩略图对比0.01%错误率，通过率95%。</p></li>
                  <li class="page-detail-item">
                    <span class="page-item-icon page-item-icon-3"></span>
                    <h3 class="page-item-head">使用场景广泛</h3>
                    <p class="page-item-desc">可使用在门禁系统、摄像监视系统等安防场景下，也可以使用在学生考勤系统中，通过人脸识别进行出席点名记录。在自动美妆美图，人脸属性识别等娱乐应用中也得到了广泛的应用。</p></li>
                </ul>
              </div>
              <div class="next-page">
                <span class="text">开始Demo</span>
                <i class="icon-next"></i>
              </div>
              <div class="animation-ele" style="position:relative">
                <span class="icon-1"></span>
                <span class="icon-2"></span>
                <span class="icon-3"></span>
                <span class="icon-4"></span>
                <span class="icon-5"></span>
              </div>
            </div>
            <div class="page-demo facein-demo">
              <div class="page-demo-content">
                <h3 class="page-demo-head">体验Demo</h3>
                <div class="page-demo-tab">
                  <a class="page-demo-tab-item active" href="javascript:void(0);" action="detect">人脸检测</a>
                  <a class="page-demo-tab-item" href="javascript:void(0);" >五官定位</a>
                  <a class="page-demo-tab-item" href="javascript:void(0);" >人脸对比</a>
                  <a class="page-demo-tab-item" href="javascript:void(0);" >人脸检索</a></div>
                <div class="upload-area">
                  <div class="upload-result half-area" id="face-detect-dom" style="height: 527px;">
                    <div class="corner-wrap" style="display: none;">
                      <span class="corner corner-left-top"></span>
                      <span class="corner corner-left-bottom"></span>
                      <span class="corner corner-right-top"></span>
                      <span class="corner corner-right-bottom"></span>
                    </div>
                    <div class="facein-result-area">
                      <div class="face-infometion" style="display:none">
                         <textarea id="datainfo">
                         
                         </textarea> 
                        <!--  <span id="datainfo"></span> -->
                      </div>
                      <div class="image-layer-wrap">
                        <div class="image-layer-wrap">
                          <div class="image-layer">
                            <img alt="" id="xx">
                          </div>
                        </div>
                      </div>
                      <div class="face-location" style="width: 346.84px; height: 346.84px; left: 96.8209px; top: 150.747px;">
                        <span class="face-corner face-left-top"></span>
                        <span class="face-corner face-left-bottom"></span>
                        <span class="face-corner face-right-top"></span>
                        <span class="face-corner face-right-bottom"></span>
                      </div>
                      <div class="face-info" style="left: 2px; top: 150.747px;display:none">
                        <p>性别:
                          <span id="image_sex"></span></p>
                        <p>年龄:
                          <span id="image_age"></span></p>
                        <p>表情:
                          <span id="image_expression"></span></p>
                        <p>魅力:
                          <span id="image_beauty"></span></p>
                      </div>
                      <div class="img-mask" style="display: none;">
                        <span class="progress">
                          <span class="percentage">
                            <span class="percentage-inner" style="width: 0%;"></span>
                          </span>
                          <span class="progress-text">0%</span>
                        </span>
                      </div>
                    </div>
                  </div>
                 
                  
                 
                </div>
                <div class="page-upload-btns" style="" id="face-upload-btn-dom">
                 <label for="fileNN"  class="btn-upload">  
                    <i class="icon-plus"></i>
                    <span class="text">上传本地图片</span>
                    <!-- <input type="file" id="uploadBtn4-1"> -->
                    <input type="file" id="fileNN" name="fileNN" onchange="selectImage(this)">
                    <!-- <el-button
                        type="primary"
                        @click="handlePictureCardPreview">
                        <i class="el-icon-plus"></i>
                      </el-button>
                      <div>
                         <img width="100%" :src="image" alt="">
                      </div> -->
                        
                    </label>  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      
    </div>
   
  </div>
  </transition>
</template>
<script>
// import demo from '../../static/images/webFiles/demo.js'
import all from '../api/all.js'
export default {
  name:'demo',
  data () {
      return {
          //  dialogImageUrl: '',
          //  dialogVisible: false,
           url:'',
           image:''
      } 
  },
  created () {
       $(window).scroll(function() {

        var scroll = $(window).scrollTop();
        if (scroll > 65) {
            $('.ci-tab-list-wrapper').css('top', 0);
        } else {
            $('.ci-tab-list-wrapper').css('top', 65);
        }
    });
  },
  methods:{
       handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview() {
              // var fromdata = new FormData();
              // fromdata.set('url',this.url);
              // fromdata.set('image',this.image);
              var fromdata={
                url:this.url,
                image:this.image
              }
              all.upload(fromdata).then(data => {
                 console.log(data)
                 this.url = data.data.url;
                 this.image = data.data.image;
              }).catch(e => {
                 alert("!!!")
              })
        // this.dialogImageUrl = file.url;
        // this.dialogVisible = true;
      }
  }
}
</script>
<style>
.demo{
  height:auto;
}
.fade-enter-acitve, .fade-leave-active{
  transition:opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity:0;
}
</style>
