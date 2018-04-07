<template>
  <div class="authentication pdf">
      <div class="pdfMain">
        <div class="pdfSpan">
           <h3>鉴权签名</h3>
          <span>最近更新时间：2018-02-28 14:53:33</span>
        </div>
        <div class="pdfSpan">
            <h4>签名与鉴权</h4>
            <span>智能图像识别服务通过签名来验证请求的合法性。开发者将签名授权给客户端，使其具备上传下载及管理指定资源的能力。</span>
        </div>  
        <div class="pdfSpan">
            <h5>签名分为两种：</h5>
            <span>1.多次有效签名：签名中绑定或者不绑定文件 fileid，需要设置大于当前时间的有效期，最长可设置三个月，在此期间内签名可多次使用。</span>
            <span>2.单次有效签名：签名中绑定文件 fileid，有效期必须设置为0，此签名只可使用一次，且只能应用于被绑定的文件。</span>
            <p>具体应用参见 <a href="#">签名适用场景</a>。</p>
        </div>
        <div class="pdfSpan">
            <h4>签名算法</h4>
            <h5>获取签名所需信息</h5>
            <span>生成签名所需信息包括 APPID、Bucket、Secret ID 和 Secret Key。</span>
            <div>
                <span>重要： </span>
                <p>（1）如果您使用的是 125 开头的 APPID，请使用 API 密钥 ；</p>
                <p>（2）如果您使用的是 100、101 等开头的 项目 ID，请使用 项目密钥。</p>
            </div>
        </div>
        <div class="pdfSpan">
            <h4>拼接签名串</h4>
            <span>拼接多次有效签名串：</span>
            <p>a=[appid]&b=[bucket]&k=[SecretID]&e=[expiredTime]&t=[currentTime]&r=[rand]&u=[userid]&f=[fileid]</p>
            <span>拼接单次有效签名串：</span>
            <p>a=[appid]&b=[bucket]&k=[SecretID]&e=[expiredTime]&t=[currentTime]&r=[rand]&u=[userid]&f=[fileid]</p>
        </div>
        <div class="pdfSpan">
            <span>注意：</span>
            <P>（1）多次有效签名串中 fileid 为可选参数；</P>
            <P>（2）fileid 为空，表示不绑定资源，例如上传签名和下载签名；</P>
            <P>（3）fileid 不为空，表示绑定资源，例如绑定资源的下载。</P>
        </div>
        <div class="pdfSpan">
            <span>签名串中各字段含义如下：</span>
            <el-table :data="tableData22" border style="width:100%">
                <el-table-column label="字段" prop="field" width="150"></el-table-column>
                <el-table-column label="解释" prop="explain"></el-table-column>
            </el-table>
        </div>
        <div class="pdfSpan">
            <span>注意：</span>
            <P>（1）拼接单次有效签名串时，有效期e必须设置为 0，以保证此签名只能针对固定资源使用一次；</P>
            <P>（2）删除和复制文件必须使用单次有效签名，上传必须使用多次有效签名；</P>
            <P>（3）具体应用参见 签名适用场景。</P>
        </div>
        <div class="pdfSpan">
            <h4>生成签名</h4>
            <P>1.使用 HMAC-SHA1 算法对请求进行加密（SHA1算法加密后的输出必须是原始的二进制数据，否则签名失败）；</P>
            <P>2.对 orignal 使用 HMAC-SHA1 算法进行签名，然后将 orignal 附加到签名结果的末尾，再进行 Base64 编码，得到最终的 sign；</P>
            <span>3.生成签名的公式如下：</span>
            <p>SignTmp = HMAC-SHA1(SecretKey, orignal)</p>
            <p>Sign = Base64(SignTmp.orignal)</p>
        </div>
        <div class="pdfSpan">
            <span>注意：</span>
            <P>（1）此处使用的是标准的 Base64 编码，不是 urlsafe 的 Base64 编码；</P>
            <P>（2）SecretKey 为项目密钥 SecretKey，orignal 为 2.2 节中拼接好的签名串。</P>
        </div>
        <div class="pdfSpan">
            <h3>PHP签名实例</h3>
            <p>本节介绍生成签名的算法实例，实例中使用 PHP 语言，如果开发者使用其他与开发，请使用对应的算法。</p>
        </div>
        <div class="pdfSpan">
            <h4>获取签名所需信息</h4>
            <span>获取得到的签名所需信息如下：</span>
            <ul style="margin:20px 0">
                <li>APPID：1252821871</li>
                <li>Bucket：tencentyun</li>
                <li>Secret ID： AKIDgaoOYh2kOmJfWVdH4lpfxScG2zPLPGoK</li>
                <li>Secret Key： nwOKDouy5JctNOlnere4gkVoOUz5EYAb</li>
            </ul>
        </div>
        <div class="pdfSpan">
            <h4>拼接签名串</h4>
            <span>拼接的多次有效签名串如下(不绑定资源)：</span>
            <p style="padding-bottom:20px;">a=1252821871&b=tencentyun&k=AKIDgaoOYh2kOmJfWVdH4lpfxScG2zPLPGoK&e=1438669115&t=1436077115&r=11162&u=0&f=</p>
            <span>拼接的多次有效签名串如下(绑定资源)：</span>
            <p style="padding-bottom:20px">a=1252821871&b=tencentyun&k=AKIDgaoOYh2kOmJfWVdH4lpfxScG2zPLPGoK&e=1438669115&t=1436077115&r=11162&u=0&f=tencentyunSignTest</p>
            <span>拼接的单次有效签名串如下：</span>
            <p style="padding-bottom:20px">a=1252821871&b=tencentyun&k=AKIDgaoOYh2kOmJfWVdH4lpfxScG2zPLPGoK&e=0&t=1436077115&r=11162&u=0&f=tencentyunSignTest</p>
        </div>
              <div class="pdfSpan">
                  <div class="markdown-code-bd J-codeBox">
					<ul class="code-toolbars">
						<li>
							<a href="javascript: void 0;" data-bypass-xhr="1" class="J-copyContent code-toolbars-item"><i class="icon copyoo copy" :plain="true" id="btn1" @click="copyTwo(1,$event)"></i></a>
							<div class="code-dropdown code-dropdown-align-center J-copy-tips">
								<div class="code-dropdown-inner">
									
									
									<div class="code-dropdown-text">复制</div>
									
								</div>
							</div>
							<div class="code-dropdown code-dropdown-align-center J-copy-success">
								<div class="code-dropdown-inner">
									
									
									<div class="code-dropdown-text">复制成功</div>
									
								</div>
							</div>
						</li>
					</ul>
					<!--展示语言代码列表-->
				<pre style="padding-top: 24px; padding-bottom: 24px;"><code id="sqlcode1">
                        <span class="hljs-meta">$</span><span class="bash">appid = <span class="hljs-string">"1252821871"</span>;</span>
                        <span class="hljs-meta">$</span><span class="bash">bucket = <span class="hljs-string">"tencentyun"</span>;</span>
                        <span class="hljs-meta">$</span><span class="bash">secret_id = <span class="hljs-string">"AKIDgaoOYh2kOmJfWVdH4lpfxScG2zPLPGoK"</span>;</span>
                        <span class="hljs-meta">$</span><span class="bash">secret_key = <span class="hljs-string">"nwOKDouy5JctNOlnere4gkVoOUz5EYAb"</span>;</span>
                        <span class="hljs-meta">$</span><span class="bash">expired = time() + 2592000;</span>
                        <span class="hljs-meta">$</span><span class="bash">onceExpired = 0;</span>
                        <span class="hljs-meta">$</span><span class="bash">current = time();</span>
                        <span class="hljs-meta">$</span><span class="bash">rdm = rand();</span>
                        <span class="hljs-meta">$</span><span class="bash">userid = <span class="hljs-string">"0"</span>;</span>
                        <span class="hljs-meta">$</span><span class="bash">fileid = <span class="hljs-string">"tencentyunSignTest"</span>;</span>
                        <span class="hljs-meta">
                        $</span><span class="bash">srcStr = <span class="hljs-string">'a='</span>.<span class="hljs-variable">$appid</span>.<span class="hljs-string">'&amp;b='</span>.<span class="hljs-variable">$bucket</span>.<span class="hljs-string">'&amp;k='</span>.<span class="hljs-variable">$secret_id</span>.<span class="hljs-string">'&amp;e='</span>.<span class="hljs-variable">$expired</span>.<span class="hljs-string">'&amp;t='</span>.<span class="hljs-variable">$current</span>.<span class="hljs-string">'&amp;r='</span>.<span class="hljs-variable">$rdm</span>.<span class="hljs-string">'&amp;u='</span></span>
                        .$userid.'&amp;f=';
                        <span class="hljs-meta">
                        $</span><span class="bash">srcWithFile = <span class="hljs-string">'a='</span>.<span class="hljs-variable">$appid</span>.<span class="hljs-string">'&amp;b='</span>.<span class="hljs-variable">$bucket</span>.<span class="hljs-string">'&amp;k='</span>.<span class="hljs-variable">$secret_id</span>.<span class="hljs-string">'&amp;e='</span>.<span class="hljs-variable">$expired</span>.<span class="hljs-string">'&amp;t='</span>.<span class="hljs-variable">$current</span>.<span class="hljs-string">'&amp;r='</span>.<span class="hljs-variable">$rdm</span>.<span class="hljs-string">'&amp;u='</span></span>
                        .$userid.'&amp;f='.$fileid;
                        <span class="hljs-meta">
                        $</span><span class="bash">srcStrOnce= <span class="hljs-string">'a='</span>.<span class="hljs-variable">$appid</span>.<span class="hljs-string">'&amp;b='</span>.<span class="hljs-variable">$bucket</span>.<span class="hljs-string">'&amp;k='</span>.<span class="hljs-variable">$secret_id</span>.<span class="hljs-string">'&amp;e='</span>.<span class="hljs-variable">$onceExpired</span> .<span class="hljs-string">'&amp;t='</span>.<span class="hljs-variable">$current</span>.<span class="hljs-string">'&amp;r='</span>.<span class="hljs-variable">$rdm</span></span>
                        .'&amp;u='.$userid.'&amp;f='.$fileid;
                        </code>
                </pre>
               </div>
              </div>
              <div class="pdfSpan">
                  <h3>生成签名</h3>
                  <p>SHA1算法加密后的输出必须是原始的二进制数据，否则签名失败：</p>
                  <div class="markdown-code-bd J-codeBox">
					<ul class="code-toolbars">
						<li>
							<a href="javascript: void 0;" data-bypass-xhr="1" class="J-copyContent code-toolbars-item"><i class="icon copy" :plain="true" id="btn2" @click="copyTwo(2,$event)"></i></a>
							<div class="code-dropdown code-dropdown-align-center J-copy-tips" style="display: none;">
								<div class="code-dropdown-inner">
									
									
									<div class="code-dropdown-text">复制</div>
									
								</div>
							</div>
							<div class="code-dropdown code-dropdown-align-center J-copy-success">
								<div class="code-dropdown-inner">
									
									
									<div class="code-dropdown-text">复制成功</div>
									
								</div>
							</div>
						</li>
					</ul>
					<!--展示语言代码列表-->
				<pre style="padding-top: 24px; padding-bottom: 24px;"><code id="sqlcode2">
                    <span class="hljs-variable">$signStr</span> = base64_encode(hash_hmac(<span class="hljs-string">'SHA1'</span>, <span class="hljs-variable">$srcStr</span>, <span class="hljs-variable">$secret_key</span>, <span class="hljs-literal">true</span>).<span class="hljs-variable">$srcStr</span>);

                    <span class="hljs-variable">$srcWithFile</span> = base64_encode(hash_hmac(<span class="hljs-string">'SHA1'</span>, <span class="hljs-variable">$srcWithFile</span> , <span class="hljs-variable">$secret_key</span>, <span class="hljs-literal">true</span>).<span class="hljs-variable">$srcWithFile</span> );

                    <span class="hljs-variable">$signStrOnce</span> = base64_encode(hash_hmac(<span class="hljs-string">'SHA1'</span>,<span class="hljs-variable">$srcStrOnce</span>,<span class="hljs-variable">$secret_key</span>, <span class="hljs-literal">true</span>).<span class="hljs-variable">$srcStrOnce</span>);

                    <span class="hljs-built_in">echo</span> <span class="hljs-variable">$signStr</span>.<span class="hljs-string">"\n"</span>; 

                    <span class="hljs-built_in">echo</span> <span class="hljs-variable">$srcWithFile</span> .<span class="hljs-string">"\n"</span>;

                    <span class="hljs-built_in">echo</span> <span class="hljs-variable">$signStrOnce</span>.<span class="hljs-string">"\n"</span>;
                    </code>
                    </pre>
                </div>
              </div>
              <div class="pdfSpan">
                  <p>最终得到的多次有效签名为(不绑定资源)：</p>
                  <div class="markdown-code-bd J-codeBox">
					<ul class="code-toolbars">
						<li>
							<a href="javascript: void 0;" data-bypass-xhr="1" class="J-copyContent code-toolbars-item"><i class="icon copyBtn copy" :data-clipboard-text="code3" @click="copy"></i></a>
							<div class="code-dropdown code-dropdown-align-center J-copy-tips">
								<div class="code-dropdown-inner">
									<div class="code-dropdown-text">复制</div>
								</div>
							</div>
							<div class="code-dropdown code-dropdown-align-center J-copy-success">
								<div class="code-dropdown-inner">
									<div class="code-dropdown-text">复制成功</div>
								</div>
							</div>
						</li>
					</ul>
					<!--展示语言代码列表-->
				<pre style="padding-top: 24px; padding-bottom: 24px;"><code>{{code3}}
                  </code>
                </pre>
                </div>
              </div>
              <div class="pdfSpan">
                  <p>最终得到的多次有效签名为(绑定资源)：</p>
                  <div class="markdown-code-bd J-codeBox">
					<ul class="code-toolbars">
						<li>
							<a href="javascript: void 0;" data-bypass-xhr="1" class="J-copyContent code-toolbars-item"><i class="icon copyBtn copy" :data-clipboard-text="code4" @click="copy"></i></a>
							<div class="code-dropdown code-dropdown-align-center J-copy-tips">
								<div class="code-dropdown-inner">
									
									
									<div class="code-dropdown-text">复制</div>
									
								</div>
							</div>
							<div class="code-dropdown code-dropdown-align-center J-copy-success">
								<div class="code-dropdown-inner">
									
									
									<div class="code-dropdown-text">复制成功</div>
									
								</div>
							</div>
						</li>
					</ul>
					<!--展示语言代码列表-->
				<pre style="padding-top: 24px; padding-bottom: 24px;"><code>{{code4}}
                  </code>
                </pre>
                </div>
              </div>
              <div class="pdfSpan">
                  <p>单次有效签名为：</p>
                  <div class="markdown-code-bd J-codeBox">
					<ul class="code-toolbars">
						<li>
							<a href="javascript: void 0;" data-bypass-xhr="1" class="J-copyContent code-toolbars-item"><i class="icon copyBtn copy" :data-clipboard-text="code2" @click="copy"></i></a>
							<div class="code-dropdown code-dropdown-align-center J-copy-tips">
								<div class="code-dropdown-inner">
									
									
									<div class="code-dropdown-text">复制</div>
									
								</div>
							</div>
							<div class="code-dropdown code-dropdown-align-center J-copy-success">
								<div class="code-dropdown-inner">
									
									
									<div class="code-dropdown-text">复制成功</div>
									
								</div>
							</div>
						</li>
					</ul>
					<!--展示语言代码列表-->
                    <pre style="padding-top: 24px; padding-bottom: 24px;"><code>{{code2}}</code>
                    </pre>
              </div>
              </div>
              <div class="pdfSpan">
                  <h3>JAVA签名生成示例</h3>
                  <div class="markdown-code-bd J-codeBox">
					<ul class="code-toolbars">
						<li>
							<a href="javascript: void 0;" data-bypass-xhr="1" class="J-copyContent code-toolbars-item">
                                <i class="icon copyt copy" id="btn3" @click="copyTwo(3,$event)"></i>
                            </a>
							<div class="code-dropdown code-dropdown-align-center J-copy-tips">
								<div class="code-dropdown-inner">
									<div class="code-dropdown-text">复制</div>
								</div>
							</div>
							<div class="code-dropdown code-dropdown-align-center J-copy-success">
								<div class="code-dropdown-inner">
									<div class="code-dropdown-text">复制成功</div>
								</div>
							</div>
						</li>
					</ul>
					<!--展示语言代码列表-->
				<pre style="padding-top: 24px; padding-bottom: 24px;"><code id="sqlcode3"><span class="hljs-comment">/*
                    * Copyright 2017, Tencent Inc
                    * All rights reserved.
                    * 
                    * Created on 2017年9月12日
                    */</span>
                    <span class="hljs-keyword">package</span> sign;

                    <span class="hljs-keyword">import</span> java.util.Base64;
                    <span class="hljs-keyword">import</span> java.util.Random;

                    <span class="hljs-keyword">import</span> javax.crypto.Mac;
                    <span class="hljs-keyword">import</span> javax.crypto.spec.SecretKeySpec;

                    <span class="hljs-keyword">public</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Sign</span> </span>{

                        <span class="hljs-comment">/**
                        * 生成Authorization签名字段
                        * 
                        * <span class="hljs-doctag">@param</span> appId
                        * <span class="hljs-doctag">@param</span> secretId
                        * <span class="hljs-doctag">@param</span> secretKey
                        * <span class="hljs-doctag">@param</span> bucketName
                        * <span class="hljs-doctag">@param</span> expired
                        * <span class="hljs-doctag">@return</span>
                        * <span class="hljs-doctag">@throws</span> Exception
                        */</span>
                        <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> String <span class="hljs-title">appSign</span><span class="hljs-params">(<span class="hljs-keyword">long</span> appId, String secretId, String secretKey, String bucketName,
                                <span class="hljs-keyword">long</span> expired)</span> <span class="hljs-keyword">throws</span> Exception </span>{
                            <span class="hljs-keyword">long</span> now = System.currentTimeMillis() / <span class="hljs-number">1000</span>;
                            <span class="hljs-keyword">int</span> rdm = Math.abs(<span class="hljs-keyword">new</span> Random().nextInt());
                            String plainText = String.format(<span class="hljs-string">"a=%d&amp;b=%s&amp;k=%s&amp;t=%d&amp;e=%d&amp;r=%d"</span>, appId, bucketName,
                                    secretId, now, now + expired, rdm);
                            <span class="hljs-keyword">byte</span>[] hmacDigest = HmacSha1(plainText, secretKey);
                            <span class="hljs-keyword">byte</span>[] signContent = <span class="hljs-keyword">new</span> <span class="hljs-keyword">byte</span>[hmacDigest.length + plainText.getBytes().length];
                            System.arraycopy(hmacDigest, <span class="hljs-number">0</span>, signContent, <span class="hljs-number">0</span>, hmacDigest.length);
                            System.arraycopy(plainText.getBytes(), <span class="hljs-number">0</span>, signContent, hmacDigest.length,
                                    plainText.getBytes().length);
                            <span class="hljs-keyword">return</span> Base64Encode(signContent);
                        }

                        <span class="hljs-comment">/**
                        * 生成base64编码
                        * 
                        * <span class="hljs-doctag">@param</span> binaryData
                        * <span class="hljs-doctag">@return</span>
                        */</span>
                        <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> String <span class="hljs-title">Base64Encode</span><span class="hljs-params">(<span class="hljs-keyword">byte</span>[] binaryData)</span> </span>{
                            String encodedstr = Base64.getEncoder().encodeToString(binaryData);
                            <span class="hljs-keyword">return</span> encodedstr;
                        }

                        <span class="hljs-comment">/**
                        * 生成hmacsha1签名
                        * 
                        * <span class="hljs-doctag">@param</span> binaryData
                        * <span class="hljs-doctag">@param</span> key
                        * <span class="hljs-doctag">@return</span>
                        * <span class="hljs-doctag">@throws</span> Exception
                        */</span>
                        <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">byte</span>[] HmacSha1(<span class="hljs-keyword">byte</span>[] binaryData, String key) <span class="hljs-keyword">throws</span> Exception {
                            Mac mac = Mac.getInstance(<span class="hljs-string">"HmacSHA1"</span>);
                            SecretKeySpec secretKey = <span class="hljs-keyword">new</span> SecretKeySpec(key.getBytes(), <span class="hljs-string">"HmacSHA1"</span>);
                            mac.init(secretKey);
                            <span class="hljs-keyword">byte</span>[] HmacSha1Digest = mac.doFinal(binaryData);
                            <span class="hljs-keyword">return</span> HmacSha1Digest;
                        }

                        <span class="hljs-comment">/**
                        * 生成hmacsha1签名
                        * 
                        * <span class="hljs-doctag">@param</span> plainText
                        * <span class="hljs-doctag">@param</span> key
                        * <span class="hljs-doctag">@return</span>
                        * <span class="hljs-doctag">@throws</span> Exception
                        */</span>
                        <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">byte</span>[] HmacSha1(String plainText, String key) <span class="hljs-keyword">throws</span> Exception {
                            <span class="hljs-keyword">return</span> HmacSha1(plainText.getBytes(), key);
                        }

                    }
                    </code></pre></div>
              </div>
              <div class="pdfSpan">
                  <h3>签名适用场景</h3>
                  <p>签名的适用场景有如下限制：</p>
                  <el-table :data="tableData33" border style="width:100%">
                    <el-table-column label="场景" prop="scene"></el-table-column>
                    <el-table-column label="适用签名" prop="ApplicableSignature" width="200"></el-table-column>
                  </el-table>
              </div>
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
  name:'authentication',
  data () {
      return {
          authentication:'鉴权',
          tableData22:[
              {
                  field:'a',
                  explain:'开发者的 APPID，接入智能图像时由系统生成'
              },
              {
                  field:'b',
                  explain:'Bucket，空间名称，即图片资源的组织管理单元'
              },
              {
                  field:'k',
                  explain:'Secret ID'
              },
              {
                  field:'e',
                  explain:'签名的有效期，是一个符合 UNIX Epoch 时间戳规范的数值，单位为秒；单次签名时，e 必须设置为 0'
              },
              {
                  field:'t',
                  explain:'当前时间戳，是一个符合 UNIX Epoch 时间戳规范的数值，单位为秒，多次签名时，e 应大于 t'
              },
              {
                  field:'r',
                  explain:'随机串，无符号 10 进制整数，用户需自行生成，最长 10 位'
              },
              {
                  field:'u',
                  explain:'历史遗留字段，请填写为 0'
              },
              {
                  field:'f',
                  explain:'资源存储的唯一标识，单次签名必填；多次签名选填，如填写则会验证与当前操作的文件路径是否一致。'
              },
          ],
          tableData33:[
              {
                  scene:'文件管理类（上传、查询、复制、删除等）',
                  ApplicableSignature:'查看文档'
              },
              {
                  scene:'下载（无防盗链）',
                  ApplicableSignature:'	不验证签名'
              },
              {
                  scene:'下载（开启防盗链，绑定资源）',
                  ApplicableSignature:'多次有效签名'
              },
              {
                  scene:'下载（开启防盗链，不绑定资源）',
                  ApplicableSignature:'多次有效签名'
              },
              {
                  scene:'图片鉴黄',
                  ApplicableSignature:'多次有效签名'
              },
              {
                  scene:'OCR识别',
                  ApplicableSignature:'多次有效签名'
              },
              {
                  scene:'人脸识别',
                  ApplicableSignature:'多次有效签名'
              },
              {
                  scene:'图片标签',
                  ApplicableSignature:'多次有效签名'
              },
          ],
          code2:'ewXflzgpQON2bmrX6uJ5Yr0zuOphPTEyNTI4MjE4NzEmYj10ZW5jZW50eXVuJms9QUtJRGdhb09ZaDJrT21KZldWZEg0bHBmeFNjRzJ6UExQR29LJmU9MCZ0PTE0MzYwNzcxMTUmcj0xMTE2MiZ1PTAmZj10ZW5jZW50eXVuU2lnblRlc3Q=',
          code4:'Tt9IYBG4j1TpO/9M6M9TokVJrKhhPTEyNTI4MjE4NzEmYj10ZW5jZW50eXVuJms9QUtJRGdhb09ZaDJrT21KZldWZEg0bHBmeFNjRzJ6UExQR29LJmU9MTQzODY2OTExNSZ0PTE0MzYwNzcxMTUmcj0xMTE2MiZ1PTAmZj10ZW5jZW50eXVuU2lnblRlc3Q=',
          code3:'p2Y5iIYyBmQNfUvPe3e1sxEN/rZhPTEyNTI4MjE4NzEmYj10ZW5jZW50eXVuJms9QUtJRGdhb09ZaDJrT21KZldWZEg0bHBmeFNjRzJ6UExQR29LJmU9MTQzODY2OTExNSZ0PTE0MzYwNzcxMTUmcj0xMTE2MiZ1PTAmZj0='
      }
  },
  mounted () {
    // var copys = document.getElementsByClassName('copy')
    // console.log(copys)
    //  $('.authentication').mouseup(function(){
    // var txt = window.getSelection()?window.getSelection().toString():document.getSelection().createRange().text;
    // alert(txt) ;
// })
  },
  
  methods: {
     
      copyThree(){
    //复制至剪贴板    
        var clipboard = new Clipboard('.copyt', {
            text: function() {
                // return document.querySelector(sqlcode);
                 var html = $('#sqlcode3').text();
            // 用正则替换
            html = html.replace('aaa', '');
            return html;
            }
        });
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
 copyTwo(index,e){
     alert(e.currentTarget)
     alert(index)
    //复制至剪贴板    
        var clipboard = new Clipboard('.copytt', {
            text: function() {
                // return document.querySelector(sqlcode);
                 var html = $('#sqlcode2').text();
            // 用正则替换
            html = html.replace('aaa', '');
            return html;
            }
        });
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
copyOne(){
    //复制至剪贴板    
        var clipboard = new Clipboard('.copyoo', {
            text: function() {
                // return document.querySelector(sqlcode);
                 var html = $('#sqlcode1').text();
            // 用正则替换
            html = html.replace('aaa', '');
            return html;
            }
        });
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
    },
    
  }
}
</script>
<style>

.authentication{
    max-width: 1180px;
    margin: 0 auto;
    padding: 0;
    font-size: 0;
    position: relative;
    z-index: 1;
    display: table;
    width: 100%;
    table-layout: fixed;
    box-sizing: border-box;
}
.authentication span, .authentication p{
    word-break:break-all;
    white-space: pre-wrap;
    word-wrap:break-word;
}
 /* .pdfMain{
    width: 60%;
    background-color: #fff;
    display: table-cell;
    vertical-align: top;
    font-size: 16px;
    padding: 40px;
  } */
 


.markdown-code-bd {
    position: relative;
    border: 1px solid #d9d9d9;
}
.markdown-text-box ol, .markdown-text-box ul {
    padding: 0 0 0 17px;
    margin-top: 0;
    margin-bottom: 24px;
}
.markdown-code-bd .code-toolbars {
    position: absolute;
    right: 5px;
    top: 5px;
    z-index: 2;
    padding-left: 0;
}
.markdown-code-bd .code-toolbars>li {
    display: inline-block;
    vertical-align: middle;
    margin-left: 5px;
    position: relative;
}
.markdown-code-bd .code-toolbars-item {
    display: block;
    width: 24px;
    height: 24px;
    text-align: center;
    line-height: 24px;
}
.markdown-code-bd .code-dropdown-align-center {
    left: 50%;
    width: 100px;
    margin-left: -50px;
    text-align: center;
}

.markdown-code-bd .code-dropdown {
    position: absolute;
    top: 100%;
    margin-top: 11px;
    z-index: 100;
    color: #fff;
    font-size: 12px;
    line-height: 1.5;
    display: none;
    width: 150px;
}
.markdown-code-bd .code-dropdown-inner {
    position: relative;
    background: #3e3e40;
    border-radius: 3px;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: middle;
    max-width: 100%;
    text-align: left;
}
.markdown-code-bd pre {
    margin-top: 0;
    margin-bottom: 0;
    font: 14px Consolas,"Liberation Mono",Menlo,Courier,monospace;
    padding: 16px;
    overflow: auto;
    line-height: 1.45;
    background-color: #f7f7f7;
    border-radius: 3px;
    word-wrap: normal;
}
.markdown-code-bd pre code {
    display: inline;
    max-width: initial;
    padding: 0;
    margin: 0;
    overflow: initial;
    line-height: inherit;
    word-wrap: normal;
    background-color: transparent;
    border: 0;
}
.hljs-meta {
    color: #999;
    font-weight: 700;
}
.hljs-doctag, .hljs-string {
    color: #d14;
}
.hljs-literal, .hljs-number, .hljs-tag .hljs-attr, .hljs-template-variable, .hljs-variable {
    color: teal;
}

</style>

