<template>
  <div class="pdf">
      <div class="pdfMain">
        <div class="pdfSpan">
            <h3>图片标签</h3>
            <span>最近更新时间：{{msg}}</span>
        </div>
        <div class="pdfSpan">
            <h4>接口概述</h4>
            <h5>服务简介</h5>
            <span>本接口用于识别图片内容信息，并以标签的形式显示。</span>
        </div>
        <div class="pdfSpan">
            <h5>计费说明</h5>
            <span>本接口按实际使用量计费，具体定价请查看 <a href="javascript:;">计费说明</a>。</span>
        </div>  
        <div class="pdfSpan">
            <h5>url 说明</h5>
            <span>支持 http 和 https 两种协议：</span>
            <p>
                <ul>
                    <li><span>http://service.image.myqcloud.com/v1/detection/imagetag_detect</span></li>
                    <li> <span>https://service.image.myqcloud.com/v1/detection/imagetag_detect</span></li>
                </ul>
            </p>
        </div> 
        <div class="pdfSpan">
            <h4>请求方式</h4>
            <h5>请求头 header</h5>
            <span>所有请求都要求含有以下头部信息：</span>
        </div> 
        <div class="table1 pdfSpan">
             <el-table :data="tableData1" border style="width:100%">
                <el-table-column label="参数名" prop="name"></el-table-column>
                
                <el-table-column label="值" prop="value">
                    
                </el-table-column>
                <el-table-column label="描述" prop="describe">
                    <template slot-scope="scope">
                        <p>
                            <span>{{ scope.row.describe[0].title }}</span>
                            <span><router-link to="/authentication" target="_blank" style="color:#00a4ff;">{{scope.row.describe[0].authentication}}</router-link></span>
                            <span>{{scope.row.describe[0].authentSp}}</span>
                        </p>
                        <p>{{ scope.row.describe[0].one }}</p>
                        <p>{{ scope.row.describe[0].two }}</p>
                        
                    </template>
                </el-table-column>
            </el-table>
        </div> 

        <div class="pdfSpan">
            <p>
               <span>
                   <mark>注意</mark>： 如选择 multipart/form-data，请使用 http 框架/库推荐的方式设置请求的 contenttype，不推荐直接调用 setHeader 等方法设置，否则可能导致 boundary 缺失引起请求失败。
               </span>
            </p>
        </div> 

           
           <div class="pdfSpan">
               <h4>请求参数</h4>
               <el-table :data="tableData2" border style="width:100%">
                     <el-table-column label="参数名" prop="name"></el-table-column>
                     <el-table-column label="必选" prop="Mandatory"></el-table-column>
                     <el-table-column label="类型" prop="type"></el-table-column>
                     <el-table-column label="说明" prop="Explain"></el-table-column>
               </el-table>
           </div>
           <div class="pdfSpan">
               <h3>返回内容</h3>
               <el-table :data="tableData3" border style="width:100%">
                 <el-table-column label="字段" prop="field"></el-table-column>
                 <el-table-column label="类型" prop="type"></el-table-column>
                 <el-table-column label="说明" prop="Explain"></el-table-column>
               </el-table>
               <p></p>
               <h5>其中 ImageTag 具体内容为：</h5>
               <el-table :data="tableData4" border style="wdith:100%">
                 <el-table-column label="字段" prop="field"></el-table-column>
                 <el-table-column label="类型" prop="type"></el-table-column>
                 <el-table-column label="说明" prop="Explain"></el-table-column>
               </el-table>
           </div>
           <div class="pdfSpan">
               <h2>实际示例</h2>
               <h4>返回示例</h4>
               <div class="markdown-code-bd J-codeBox">
					<ul class="code-toolbars">
						<li>
							<a href="javascript: void 0;" data-bypass-xhr="1" class="J-copyContent code-toolbars-item">
                                <i class="icon copy" :plain="true" @click="copyPdf"></i>
                            </a>
							<div class="code-dropdown code-dropdown-align-center J-copy-tips" style="display: none;">
								<div class="code-dropdown-inner">
									<div class="code-dropdown-text">复制</div>
								</div>
							</div>
							<div class="code-dropdown code-dropdown-align-center J-copy-success" style="display: none;">
								<div class="code-dropdown-inner">
									<div class="code-dropdown-text">复制成功</div>
								</div>
							</div>
						</li>
					</ul>
					<!--展示语言代码列表-->
				<pre style="padding-top: 24px; padding-bottom: 24px;">
                    <code  id="foo">{
                    <span class="hljs-attr">"code"</span>: <span class="hljs-number">0</span>,
                    <span class="hljs-attr">"message"</span>: <span class="hljs-string">"success"</span>,
                    <span class="hljs-attr">"tags"</span>: [
                        {
                            <span class="hljs-attr">"tag_name"</span>: <span class="hljs-string">"天空"</span>,
                            <span class="hljs-attr">"tag_confidence"</span>: <span class="hljs-number">27</span>
                        },
                        {
                            <span class="hljs-attr">"tag_name"</span>: <span class="hljs-string">"女孩"</span>,

                            <span class="hljs-attr">"tag_confidence"</span>: <span class="hljs-number">47</span>
                        }
                    ]
                }
                </code>
              </pre>
             </div>
           </div>
           <div class="pdfSpan">
               <h2>错误码</h2>
               <el-table :data="tableData5" border style="width:100%">
                 <el-table-column label="错误码" prop="ErrorCode" width="150"></el-table-column>
                 <el-table-column label="含义" prop="Meaning"></el-table-column>
               </el-table>
           </div>
           <p>更多其他 API 错误码请看 <a href="#">错误码说明</a>。</p>
           <div style="border-bottom:1px solid #ccc;padding-bottom:20px; margin-bottom:20px;">
                <p>文档是否有帮助解决问题？</p>
                <div>
                    <span>
                        <i class="icon-feedback-up"></i>
                    </span>
                    <span>
                        <i class="icon-feedback-down"></i>
                    </span>
                </div>
           </div>
           <div style="padding-top:20p; margin-bottom:50px;">
               <span>如果有其他疑问，你也可以通过提问形式与我们联系探讨</span>
               <el-input  placeholder="问题的标题:一句话描述的问题,请以问好结尾"></el-input>
           </div>
  </div>
 </div>  
</template>
<script>
import Clipboard from 'clipboard'
export default {
  name:'',
  data () {
      return {
          msg:'2018-3-6;星期二',
          tableData1:[
                        {
                            name: 'host',
                            value:'http://192.168.240.103:30979/algorithmapi/ai/v1/recognizehumanface',
                            describe: [
                                {
                                    title:'Hytera云图片标签服务器域名'
                                }
                            ]
                        },
                        {
                            name: 'content-length',
                            value: '包体总长度',
                            describe: [
                                {
                                    title:'整个请求包体内容的总长度，单位：字节（Byte）'
                                }
                            ],
                        },
                        {
                            name: 'content-type',
                            value:'application/json 或 multipart/form-data',
                            describe: [
                                {
                                title:'根据不同接口选择',
                                one:'1. 使用图片 url，选择 application/json',
                                two:'2. 使用图片文件，选择 multipart/form-data'
                                }
                            ]
                        },
                        {
                            name: 'authorization',
                            value: '鉴权签名',
                            describe:  [
                                {
                                title:"用于",
                                authentication:'鉴权',
                                authentSp:'的签名'
                                }
                            ]
                        },
                     ],
        tableData2:[
                  {
                      name:'appid',
                      Mandatory:'是',
                      type:'long',
                      Explain:'接入项目的唯一标识，可在 账号信息 或 云 API 密钥 中查看。'
                  },
                   {
                      name:'image',
                      Mandatory:'否',
                      type:'string',
                      Explain:'图像 base64 编码，图像格式为 jpg/png/bmp 其中之一。'
                  },
                  {
                      name:'secretId',
                      Mandatory:'否',
                      type:'string',
                      Explain:'秘钥Id'
                  },
                   {
                      name:'bucket',
                      Mandatory:'否',
                      type:'string',
                      Explain:'存储文件夹'
                  },
                  {
                      name:'rad',
                      Mandatory:'否',
                      type:'string',
                      Explain:'随机数'
                  },
                   {
                      name:'time',
                      Mandatory:'否',
                      type:'string',
                      Explain:'当前时间'
                  },
                  {
                      name:'expriedTime',
                      Mandatory:'否',
                      type:'string',
                      Explain:'过期时间'
                  },
                   {
                      name:'url',
                      Mandatory:'否',
                      type:'string',
                      Explain:'图片http存储路径,如果 url 和 image 都提供, 仅使用 url,加密方式 image Base64加密 sun.misc.BASE64Encoder'
                   }
        ],
        tableData3:[
                  {
                      field:'code',
                      type:'int',
                      Explain:'错误码, 0 为成功'
                  },
                   {
                      field:'message',
                      type:'string',
                      Explain:'服务器返回的信息'
                  },
                   {
                      field:'tags',
                      type:'ImageTag',
                      Explain:'图像的分类标签列表，具体内容如下表'
                  }
        ],
         tableData4:[
                  {
                      field:'tag_name',
                      type:'string',
                      Explain:'返回的图像标签名字'
                  },
                   {
                      field:'tag_confidence',
                      type:'int',
                      Explain:'图像标签的置信度，取值范围[0， 100]，数值越大置信度越高'
                  },
        ],
         tableData5:[
                  {
                      ErrorCode:'3',
                      Meaning:'错误的请求',
                  },
                  {
                      ErrorCode:'4',
                      Meaning:'签名为空',
                  },
                  {
                      ErrorCode:'5',
                      Meaning:'签名串错误',
                  },
                  {
                      ErrorCode:'6',
                      Meaning:'appid /存储桶/ url 不匹配',
                  },
                  {
                      ErrorCode:'7',
                      Meaning:'签名编码失败（内部错误）',
                  },
                  {
                      ErrorCode:'8',
                      Meaning:'签名解码失败（内部错误）',
                  },
                  {
                      ErrorCode:'9',
                      Meaning:'签名过期',
                  },
                  {
                      ErrorCode:'10',
                      Meaning:'	appid 不存在',
                  },
                  {
                      ErrorCode:'11',
                      Meaning:'	secretid 不存在',
                  },
                  {
                      ErrorCode:'12',
                      Meaning:'appid 不匹配',
                  },
                  {
                      ErrorCode:'13',
                      Meaning:'重放攻击',
                  },
                  {
                      ErrorCode:'14',
                      Meaning:'	签名失败',
                  },
                  {
                      ErrorCode:'15',
                      Meaning:'	操作太频繁，触发频控',
                  },
                  {
                      ErrorCode:'16',
                      Meaning:'内部错误',
                  },{
                      ErrorCode:'17',
                      Meaning:'未知错误',
                  },
                  {
                      ErrorCode:'200',
                      Meaning:'内部打包失败',
                  },
                  {
                      ErrorCode:'201',
                      Meaning:'	内部解包失败',
                  },
                  {
                      ErrorCode:'202',
                      Meaning:'	内部链接失败',
                  },
                  {
                      ErrorCode:'203',
                      Meaning:'内部处理超时',
                  },
                  {
                      ErrorCode:'-1300',
                      Meaning:'图片为空',
                  },
                  {
                      ErrorCode:'-1308',
                      Meaning:'	url 图片下载失败',
                  },
                  {
                      ErrorCode:'-1400',
                      Meaning:'	非法的图片格式',
                  },
                  {
                      ErrorCode:'-1403',
                      Meaning:'图片下载失败',
                  },
                  {
                      ErrorCode:'-1404',
                      Meaning:'图片无法识别',
                  },
                  {
                      ErrorCode:'-1505',
                      Meaning:'url 格式不对',
                  },
                  {
                      ErrorCode:'-1506',
                      Meaning:'	图片下载超时',
                  },
                  {
                      ErrorCode:'-1507',
                      Meaning:'无法访问 url 对应的图片服务器',
                  },
                  {
                      ErrorCode:'-5062',
                      Meaning:'url 对应的图片已被标注为不良图片，无法访问（专指存储于腾讯云的图片）',
                  },
        ]
      
      }
      sex:''
  },
  
  copyPdf () {
    var clipboard = new Clipboard('.copy', {
        text: function() {
            var html = $('#foo').text();
            // 用正则替换
            html = html.replace('aaa', '');
            // 返回带html格式的内容
            return html;
            console.log(html)
        }
    })
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
     
  },
  methods: {
       copyPdf () {
    var clipboard = new Clipboard('.copy', {
        text: function() {
            var html = $('#foo').text();
            // 用正则替换
            html = html.replace('aaa', '');
            // 返回带html格式的内容
            return html;
            console.log(html)
        }
    })
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
     
  },
    
  }
}
</script>
<style>
 
</style>
