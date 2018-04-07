<template>
  <div class="visit">
     <div class="manage-area-title">
         <h2>项目列表</h2>
     </div>
     <div class="projectMian">
            <p class="tc-15-msg f-margin">说明：项目功能用于按项目管理云资源，可以对云资源进行分项目管理</p>
            <div class="tc-15-action-panel">
                <el-button type="primary" size="small" @click="addMenu">
                    <b class="icon-add"></b>新建
                </el-button>
                <label class="tc-15-checkbox-wrap" style="line-height: 2;">
                    <input type="checkbox" class="tc-15-checkbox" data-event="listDisabledProject">
                    显示已停用的项目
                </label>
                <div data-id="searchArea" class="pull-right">
                    <div data-role="qc-search" style="" class="tc-15-search tc-15-multi-search">
                        <textarea data-input="" class="tc-15-search-words" v-model="keyword" placeholder="请输入项目名称(换行分隔)"></textarea>
                        <button data-search="" class="tc-15-btn weak m search" @click="search"></button>
                    </div>
                </div>
                <!-- 新建项目 -->
                <el-dialog
                    title="请选择需要生成密钥的项目"
                    :visible="dialogVisible"
                    width="50%"
                    :before-close="handleClose"
                    :modal-append-to-body="false"
                    :show-close="true"
                    >
                       <!-- <li v-for="(item,index) in tableData" :key="index.bucket">
                           <el-radio label="index" v-model="radio">{{item.bucket}}({{item.description}})</el-radio>
                       </li> -->
                       <el-radio-group v-model="radio" >
                           <el-radio :label="index" v-for="(item,index) in tableData" :key="index">{{item.bucket}}({{item.description}})</el-radio>
                       </el-radio-group>
                    <span slot="footer" class="dialog-footer">
                        <el-button type="primary" @click="submit()">确 定 生 成</el-button>
                        <el-button @click="dialogVisible=false">取 消</el-button>
                    </span>
                </el-dialog>
            </div>
            <el-table :data="tableData" style="width:100%"  height="360" :span-method="ObjectSpanMethod">
                <el-table-column 
                label="项目名称"
                width="100"
                >
                <template slot-scope="scope">
                      <span>{{scope.row.bucket}}</span>
                      <!-- <span>(ID:{{scope.row.appId}})</span> -->
                </template>
                
                </el-table-column>
                 <el-table-column 
                label="ID"
                prop="appId"
                >
                </el-table-column>
                <el-table-column 
                label="密钥"
                min-width="500"
                >
                    <template slot-scope="scope">
                      <ul>
                          <!-- <li id="foo" ></li> -->
                          <li v-for="(item) in scope.row.secret" :key="item.secretKey">
                              <span class="secretSpan">
                                  <ul>
                                   <!-- data-clipboard-text="zzz" -->
                                   <li><span>SecretId:{{item.secretId}}</span><i class="icon-fuzhi iconfont copyBtn hide" :data-clipboard-text="item.secretId" :plain="true" @click="copy"></i></li>
                                   <li><span>SecretKey:{{item.secretKey}}</span><i class="icon-fuzhi iconfont copyBtn" :data-clipboard-text="item.secretKey" :plain="true" @click="copy"></i></li>
                                 </ul>
                              </span>
                             <span class="secretSpan">
                                   <el-radio :label="item"  v-model="radio2">{{kkk}}</el-radio>
                             </span>
                           </li>
                      </ul>
                  </template>
                </el-table-column>
                <el-table-column 
                label="操作"
                prop=""
                >
                  <template slot-scope="scope">
                      <el-button size="mini" type="danger" @click="delet(scope.$index,scope.row)">
                           删除
                      </el-button>
                  </template>
                </el-table-column>
            </el-table>
    </div> 
  </div>
</template>
<script>
import all from '../api/all.js'
import Clipboard from 'clipboard'

//let clipboard = new Clipboard('.copyBtn');
export default {
  name:'visit',
  data () {
      return {
           radio2:0,
           radio:0,
           dialogVisible: false,
           menu:[],
           msg:'fsdfa',
           keyword:"",
           menuList:null,
           tableData:[],
           kkk:'',
      }
  },
  //初始
  created () {
        var data={
             userId: sessionStorage.getItem("id")
        }
      all.findProjectSecret(data).then(data=>{
        //   alert(1);
          for(var i=0;i<data.data.length;i++){
                this.tableData.push(data.data[i]);
          }
      }).catch(e=>{
           console.log('请求错误！')
      })
  },

//es7方法
//  async  created () {
//        try{
//             let data={
//                       userId: sessionStorage.getItem("id")
//                     };
//             result=await all.findProjectSecret(data);

//             }catch(e){
                
//         }

//  },
  methods: {
      //表格合并
      ObjectSpanMethod({row,column,rowIndex,columnIndex}){
          
          if(columnIndex === 2){
               if(rowIndex % 1 === 0){
                   return{
                       rowspan:1,
                       colspan:1
                   };
                   console.log(rowspan)
               }else{
                   return{
                       rowspan:0,
                       colspan:0
                   }
               }
          }
      },
      //'x'关闭弹窗
      handleClose(done) {
          console.log(done)
          this.dialogVisible = false;
    },
    //新建
      addMenu() {     
      this.dialogVisible = true;
      //  console.log(this.dialogVisible);
       var data={
             id: sessionStorage.getItem("id")
            //"accountName":"4134324"
        }
      //查询项目
      all.findProject(data).then(data=>{
        //  console.log(data)
          this.tableData=[];
          for(var i=0;i<data.data.length;i++){
                this.tableData.push(data.data[i]);
          }
            //  console.log(data)
      }).catch(e=>{
           alert('请求错误！')
      })
    },
    //生成密钥
    submit() {
     // alert(this.tableData[this.radio].appId);
       var res={
         // userId:sessionStorage.getItem("id"),
          appId:this.tableData[this.radio].appId
        //   description:this.menu.description
      };
      all.addSecretValue(res).then(data=>{
            //  console.log(data)
             this.tableData.push(data.data);
             this.search();
            //  data.data ? data.data.bucket : "";
      }).catch(e=>{
           alert('请求错误！')
      });

    //  console.log(this.tableData[this.radio])
    // let str=JSON.stringify(this.tableData[this.radio]),
    //     data=JSON.parse(str);`
    //  data.back.push('7979798');
    // let data = Object.assign({},this.tableData[this.radio]);
    //  data.secretId=Object.assign([],this.tableData[this.radio].secretId);
    //   console.log(data.secretId);
    //   data.secretId.push('0000000')
    // data.bucket="fdbshbgkhdsbg";
      this.dialogVisible = false;
    },
    //刷新
    search() {
       var res={
         userId: sessionStorage.getItem("id")
          // bucket:this.keyword,
          // description:this.keyword
      };
      all.findProjectSecret(res).then(data=>{
            //  console.log(data)
               this.tableData=[];
            for(var i=0;i<data.data.length;i++){
                this.tableData.push(data.data[i]);
          }
            //  returns
      }).catch(e=>{
           alert('请求错误！')
      });
      this.dialogVisible = false;
    },
    //删除
    delet(index,row){
        var secret=[];
        secret.push(this.radio2);
        // console.log(index,row)
         var res={
        //   id:row.id,
          appId:row.appId,
          secret:secret
      };
      all.deleteSecret(res).then(data=>{
          
            //  console.log(data)
            this.search();
            // alert("删除成功");
            this.$message({
              message:'删除成功',
              type:'success'
          })
            //  returns
      }).catch(e=>{
        //    alert('请求错误！')
           this.$message.error('请求错误！')
      });
        // let data = {}
        // console.log(index,row)
        // this.tableData.splice(index,1)
    },
    copy(){
      
      let clipboard = new Clipboard('.copyBtn');
      clipboard.on('success',e=>{
          console.log('复制成功');
          //释放内存
          clipboard.destroy();
          this.$message({
              message:'复制成功',
              type:'success'
          })
      })
      clipboard.on('error',e=>{
          //不支持复制
          console.log('该浏览器不支持复制');
          //释放内存
          clipboard.destroy();
          this.$message.error('该浏览器不支持复制')
      })
    }
    
  }
}
</script>
<style>

.icon-fuzhi{
    margin-left: 5px;
    cursor:pointer;
    /* display:none; */
}
.secretSpan{
    display:inline-block;
}
.secretSpan:nth-child(1){
   width:80%;
}
.secretSpan:nth-child(2){
    margin-left: 15px;
    width:12%
}
.el-radio{
    padding:10px 0;
    display: block;
}
.el-radio+.el-radio{
    margin-left: 0;
}
.projectMian{
   padding:0 20px 20px;
}

.ProjectManagement{
    width: 100%;
    height: 100%;
    overflow-x: auto;
    overflow-y: auto;
}
.tc-15-checkbox {
    width: 16px;
    height: 16px;
    cursor: pointer;
    vertical-align: middle;
    outline: 0;
    -webkit-appearance: none;
    border: 1px solid #ddd;
    box-sizing: border-box;
    margin-right: 5px;
    vertical-align: -3px;
}
.tc-15-action-panel {
    position: relative;
    padding: 0 0 10px;
    background-color: transparent;
    max-width: 1360px;
    overflow-x: initial;
    /* margin-left: 20px !important;
    margin-right: 20px !important; */
}
.tc-15-action-panel .tc-15-checkbox-wrap {
    margin-left: 5px;
    display: inline-block;
    margin-top: 4px;
    font-size: 12px;
    cursor: pointer;
    vertical-align: middle;
    line-height: 2;
}
.pull-right {
    float: right !important;
}
.tc-15-action-panel .tc-15-search {
    float: right;
    display: inline-block;
    vertical-align: middle;
    width: 180px;
    height: 30px;
    position: relative;
    z-index: 3;
}
.tc-15-search-words {
    width: 180px;
    height: 30px !important;
    border: 1px solid #ddd;
    float: left;
    font-size: 12px;
    line-height: 30px !important;
    padding: 0 28px 0 10px;
    resize: none;
    max-height: 150px;
    position: relative;
    box-sizing: border-box;
    outline: 0;
    overflow: hidden;
    z-index: 0;
}
.tc-15-search .tc-15-btn.search {
    position: absolute;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    width: 28px !important;
    right: 1px;
    border: none;
    height: 28px;
    top: 1px;
    z-index: 99;
    margin-right: 0;
    margin-left: 0;
    background: #fff;
    font-size: 0;
    padding: 5px;
    line-height: inherit;
    background-color: transparent;
    box-sizing: border-box;
    outline: none;
}

.tc-15-action-panel:after {
    clear: both;
    display: table;
    content: '';
}
.manage-area-title {
    margin: 0 0 20px;
    font-size: 0;
    height: auto;
    line-height: inherit;
    min-height: inherit;
    position: relative;
    border-bottom: 1px solid #ddd;
    padding-left: 20px;
    padding-right: 20px;
    margin-left: 0 !important;
    margin-right: 0 !important;
    background-color: #fff;
    padding-top: 10px;
    padding-bottom: 10px;
}
.manage-area-title h2 {
    margin-right: 20px;
    max-width: 70%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    font-weight: 700;
    display: inline-block;
    vertical-align: middle;
    float: inherit;
}
.tc-15-msg{
    font-size: 12px;
    line-height: inherit;
    padding: 10px 30px 10px 20px;
    vertical-align: middle;
    color: #003b80;
    border: 1px solid #97c7ff;
    border-radius: 2px;
    background: #e5f0ff;
    position: relative;
    box-sizing: border-box;
    max-width: 1360px;
    /* width:100%; */
    margin-right: auto;
    margin-bottom: 20px;
    border-radius: 0;
    margin-bottom: 10px;
}
    
</style>


