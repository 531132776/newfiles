<template>
  <div class="ProjectManagement">
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
                        <button type="submit" class="tc-15-btn weak m search" @click="search"></button>
                    </div>
                </div>
                <!-- 新建项目 -->
                <el-dialog
                    title="添加菜单"
                    :visible="dialogVisible"
                    width="50%"
                    :before-close="handleClose"
                    :modal-append-to-body="false">
                    <el-form  label-width="80px" :model="menu">
                        <el-form-item label="项目名称">
                            <el-input type="text" v-model="menu.bucket"></el-input>
                        </el-form-item>
                        <el-form-item label="项目说明">
                            <el-input type="textarea" v-model="menu.description"></el-input>
                        </el-form-item>
                    </el-form>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogVisible=false">取 消</el-button>
                        <el-button type="primary" @click="submit()" >确 定</el-button>
                    </span>
                </el-dialog>
            </div>
            <el-table :data="tableData" style="width:100%"  height="360" v-loading="loading">
                <el-table-column 
                label="项目名称"
                >
                <template slot-scope="scope">
                      <span>{{scope.row.bucket}}</span>
                      <span>(ID:{{scope.row.appId}})</span>
                </template>
                
                </el-table-column>
                <el-table-column 
                label="项目说明"
                prop="description"
                >
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
export default {
  name:'ProjectManagement',
  data () {
      return {
           dialogVisible: false,
           menu:{
               bucket:"",
               description:""
           },
           keyword:"",
           menuList:null,
           tableData:[],
           loading:boolean
      }
  },
  created () {
    //   alert(sessionStorage.getItem("id"));s
        var data={
             id: sessionStorage.getItem("id")
            //"accountName":"4134324"
        }
      all.findProject(data).then(data=>{
         //this.tableData=data
         console.log(data)
          for(var i=0;i<data.data.length;i++){
                this.tableData.push(data.data[i]);
          }
            //  console.log(data)
      }).catch(e=>{
           alert('请求错误！')
      })
  },
  methods: {
      handleClose(done) {
    },
      addMenu() {
      this.dialogVisible = true;
      //  console.log(this.dialogVisible);
     
    },
    //添加项目
    submit() {
       var res={
          userId:sessionStorage.getItem("id"),
          bucket:this.menu.bucket,
          description:this.menu.description
      };
      all.addproject(res).then(data=>{
             console.log(data)
             this.tableData.push(data.data)
            //  returns
      }).catch(e=>{
           alert('请求错误！')
      });
      this.dialogVisible = false;
    },
    search() {
       var res={
         id: sessionStorage.getItem("id"),
          bucket:this.keyword,
          description:this.keyword
      };
      all.findProject(res).then(data=>{
            //  console.log("test:"+this.tableData)
              this.tableData=[];
              for(var i=0;i<data.data.length;i++){
                this.tableData.push(data.data[i]);
          }

              // this.tableData=[];
           //  this.tableData.push(data.data)
            //  returns
      }).catch(e=>{
           alert('请求错误！')
      });
      this.dialogVisible = false;
      loading:true
    },
    delet(index,row){
        console.log(index,row)
         var res={
          id:row.id,
          appId:row.appId
      };
      all.deleteProject(res).then(data=>{
             console.log(data)
             if(data.success=="true"){
                   alert("删除成功");
                  this.search();
             }
            
            //search();
            //  returns
      }).catch(e=>{
           alert('请求错误！')
      });
    }

    
  }
}
</script>
<style>
.projectMian{
   padding:0 20px 20px;
}
.el-main {
    padding: 0;
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


