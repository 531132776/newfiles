var QCLogin = function(t) {
	function e(n) {
		if (i[n]) return i[n].exports;
		var o = i[n] = {
			exports: {},
			id: n,
			loaded: !1
		};
		return t[n].call(o.exports, o, o.exports, e),
		o.loaded = !0,
		o.exports
	}
	var i = {};
	return e.m = t,
	e.c = i,
	e.p = "",
	e(0)
} ({
	0 : function(t, e, i) {
		t.exports = i("YIfu")
	},
	Uzku: function(t, e) {
		function i(t) {
			this.inputElem = $(t.input),
			this.suggestList = $(t.suggest),
			this.init()
		}
		i.prototype = {
			suggestSuffix: ["qq.com", "gmail.com", "126.com", "163.com", "hotmail.com", "263.com", "21cn.com", "yahoo.com", "yahoo.com.cn", "live.com", "sohu.com", "sina.com", "sina.com.cn"],
			canSuggest: function(t) {
				for (var e = 0; e < this.suggestSuffix.length; e++) {
					if (0 == this.suggestSuffix[e].indexOf(t) && this.suggestSuffix[e] != t) return ! 0;
					if (this.suggestSuffix[e] == t) return ! 1
				}
				return ! 1
			},
			init: function() {
				this.bindEvent()
			},
			getInputVal: function() {
				return $.trim(this.inputElem.val())
			},
			updateSuggestList: function() {
				var t = this.getInputVal(),
				e = t.split("@");
				if (e.length > 2) return void this.hideSuggest();
				var i = this.suggestSuffix.slice();
				if (1 == e.length) return void this.hideSuggest();
				if (!this.canSuggest(e[1]) || "" == e[0]) return void this.hideSuggest();
				if (t = e[0] + "@", "" != e[1]) for (var n = i.length - 1; n >= 0; n--) 0 == !i[n].indexOf(e[1]) && i.splice(n, 1);
				for (var o = [], n = 0; n < i.length; n++) o.push('<li><a class="tip">' + this.htmlEncode(t) + i[n] + "</a></li>");
				this.suggestList.html(o.join("")),
				this.showSuggest()
			},
			showSuggest: function() {
				this.suggestList.show()
			},
			hideSuggest: function() {
				this.suggestList.hide()
			},
			switchSuggestList: function(t) {
				if (this.suggestList.is(":visible")) {
					var e = this.suggestList.find("li.tip-hover").index() || 0,
					i = this.suggestList.find("li").length;
					"down" == t ? e == i - 1 ? e = 0 : e++:"up" == t && (0 == e ? e = i - 1 : e--),
					this.suggestList.find("li").eq(e).addClass("tip-hover").siblings().removeClass("tip-hover"),
					this.inputElem.val(this.suggestList.find("li").eq(e).text())
				}
			},
			suggestEnterHandle: function() {
				var t = this.suggestList.find("li.tip-hover");
				t.length && this.inputElem.val(t.text()),
				this.hideSuggest()
			},
			suggestClickHandle: function(t) {
				var e = $(t.target);
				this.inputElem.val(e.text()),
				this.hideSuggest()
			},
			htmlEncode: function(t) {
				var e = "";
				return null == t || "undefined" == typeof t || 0 == t.length ? "": (e = t.replace(/&/g, "&amp;"), e = e.replace(/</g, "&lt;"), e = e.replace(/>/g, "&gt;"), e = e.replace(/ /g, "&nbsp;"), e = e.replace(/\'/g, "'"), e = e.replace(/\"/g, "&quot;"), e = e.replace(/\n/g, "<br>"))
			},
			bindEvent: function() {
				var t = this;
				this.inputElem.off("keyup.loginInput focus.loginInput keydown.loginInput blur.loginInput").on("keyup.loginInput focus.loginInput",
				function(e) {
					var i = e.which || e.keyCode;
					switch (i) {
					case 38:
						return ! 1;
					case 40:
						return
					}
					var n = t.getInputVal();
					t.htmlEncode(n) != n ? t.hideSuggest() : n.length > 0 && n.length < 30 && n.split("@").length <= 2 ? t.updateSuggestList() : t.hideSuggest()
				}).on("keydown.loginInput",
				function(e) {
					var i = e.which || e.keyCode;
					switch (i) {
					case 27:
						return void t.hideSuggest();
					case 38:
						return t.switchSuggestList("up"),
						!1;
					case 40:
						return void t.switchSuggestList("down");
					case 13:
						return void t.suggestEnterHandle()
					}
				}).on("blur.loginInput",
				function() {
					t.hideSuggest()
				}),
				this.suggestList.off().on("mousedown", "li",
				function(e) {
					t.suggestClickHandle(e)
				})
			}
		},
		t.exports = i
	},
	WPtr: function(t, e, i) {
		var n, o; !
		function(s) {
			n = s,
			o = "function" == typeof n ? n.call(e, i, e, t) : n,
			!(void 0 !== o && (t.exports = o))
		} (function() {
			function t() {
				for (var t = 0,
				e = {}; t < arguments.length; t++) {
					var i = arguments[t];
					for (var n in i) e[n] = i[n]
				}
				return e
			}
			function e(i) {
				function n(e, o, s) {
					var r;
					if ("undefined" != typeof document) {
						if (arguments.length > 1) {
							if (s = t({
								path: "/"
							},
							n.defaults, s), "number" == typeof s.expires) {
								var a = new Date;
								a.setMilliseconds(a.getMilliseconds() + 864e5 * s.expires),
								s.expires = a
							}
							try {
								r = JSON.stringify(o),
								/^[\{\[]/.test(r) && (o = r)
							} catch(t) {}
							return o = i.write ? i.write(o, e) : encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
							e = encodeURIComponent(String(e)),
							e = e.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent),
							e = e.replace(/[\(\)]/g, escape),
							document.cookie = [e, "=", o, s.expires && "; expires=" + s.expires.toUTCString(), s.path && "; path=" + s.path, s.domain && "; domain=" + s.domain, s.secure ? "; secure": ""].join("")
						}
						e || (r = {});
						for (var h = document.cookie ? document.cookie.split("; ") : [], l = /(%[0-9A-Z]{2})+/g, u = 0; u < h.length; u++) {
							var c = h[u].split("="),
							p = c.slice(1).join("=");
							'"' === p.charAt(0) && (p = p.slice(1, -1));
							try {
								var f = c[0].replace(l, decodeURIComponent);
								if (p = i.read ? i.read(p, f) : i(p, f) || p.replace(l, decodeURIComponent), this.json) try {
									p = JSON.parse(p)
								} catch(t) {}
								if (e === f) {
									r = p;
									break
								}
								e || (r[f] = p)
							} catch(t) {}
						}
						return r
					}
				}
				return n.set = n,
				n.get = function(t) {
					return n(t)
				},
				n.getJSON = function() {
					return n.apply({
						json: !0
					},
					[].slice.call(arguments))
				},
				n.defaults = {},
				n.remove = function(e, i) {
					n(e, "", t(i, {
						expires: -1
					}))
				},
				n.withConverter = e,
				n
			}
			return e(function() {})
		})
	},
	"4G7m": function(t, e, i) {
		var n = i("M34W"),
		o = n.getRealHostname(),
		s = {
			encrypt: !0,
			encryptPublicKey: "-----BEGIN PUBLIC KEY-----\t\t\t\t\t\t\tMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDmRjZFlLX9akll+2dCdtN5ehDx\t\t\t\t\t\t\tPvmWes3kchShI1FafeorF+LWm5oK2YJFTpzA9WO2Xod1Q1FUrt82bjfYRHDfoerJ\t\t\t\t\t\t\t6rjMtjgXnDAYsk6nbhefibbQzYzxNA62yc6TbpUvRi+SosLfGQifqwtu/6OBMoka\t\t\t\t\t\t\tgLvbujKFpAfb9cfGewIDAQAB\t\t\t\t\t\t\t-----END PUBLIC KEY-----",
			hide_close_icon: 1,
			enable_qq: 1,
			enable_qcloud: 1,
			hide_register: 0,
			login_css: "https://imgcache.qq.com/open_proj/proj_qcloud_v2/gateway/login-regist/css/login-v20170405.css?t=201705182040",
			qcloud_login_url: "https://" + o + "/login/ajax/",
			qcloud_post_proxy: "https://" + o + "/login/proxy",
			s_url: "https://" + o,
			login_forward_url: "https://" + o + "/login/forward",
			pt_login_forward_url: "https://" + o + "/login/qqAccessCallback",
			vcode_url: "https://" + o + "/captcha",
			forgetpwd_url: "https://" + o + "/password/recover",
			register_url: "https://" + o + "/register",
			ptlogin_url: "https://xui.ptlogin2.qq.com/cgi-bin/xlogin",
			ptlogin_config: {
				appid: 543009503,
				daid: 0,
				style: 20,
				enable_qlogin: 1,
				target: "self",
				link_target: "blank",
				hide_close_icon: 1,
				hide_border: 1,
				hide_title_bar: 1,
				hide_reg: 1,
				hide_feedback: 1,
				hide_title: 1,
				s_url: ""
			},
			mpLoginUrl: "https://" + o + "/login/mp?",
			wechatLoginUrl: "https://" + o + "/login/wechat?",
			mWechatLoginUrl: "https://" + o + "/login/mWechat?",
			defaultLoginType: "email",
			isThirdParty: 0,
			enableIframeWechatLogin: 1,
			isIntl: 0
		};
		t.exports = s
	},
	M34W: function(t, e) {
		var i = {
			getRealHostname: function() {
				var t = location.hostname;
				return t.indexOf("qcloud.com") != -1 ? "www.qcloud.com": t.indexOf("cloud.tencent.com") != -1 ? "cloud.tencent.com": "www.qcloud.com"
			},
			getCookieDomain: function() {
				var t = location.hostname;
				return t.indexOf("qcloud.com") != -1 ? ".qcloud.com": t.indexOf("cloud.tencent.com") != -1 ? ".cloud.tencent.com": ".qcloud.com"
			},
			getQcmainHostname: function() {
				var t = location.hostname;
				return t.indexOf("qcloud.com") != -1 ? "www.qcloud.com": t.indexOf("intl.cloud.tencent.com") != -1 ? "intl.cloud.tencent.com": t.indexOf("cloud.tencent.com") != -1 ? "cloud.tencent.com": "www.qcloud.com"
			}
		};
		t.exports = i
	},
	ijdI: function(t, e) {
		t.exports = '<div class="qc-pt-login-content J-commonLoginContent <% if(language == "en") {%>international<%}%>">\n\t<% if (!hide_close_icon) { %>\n\t<a href="javascript:;" class="mask-btn-close J-closeLoginBox"></a>\n\t<% } %>\n\t<!--login start-->\n\t<div class="login-tab">\n\t\t<% if (!isMobile) {%>\n\t\t<h1 class="login-tab-title J-txtLoginTitle"><%=__("\u767b \u5f55")%></h1>\n\t\t<% } %>\n\t\t<!--\u90ae\u7bb1\u624b\u673a\u767b\u5f55\u3000start-->\n\t\t<div class="login-box J-loginContentBox J-qcloginBox" style="display: none">\n\t\t\t<div class="login-form">\n\t\t\t\t<% if (isMobile && !hide_register) { %>\n\t\t\t\t<div class="m-login-tips"><%=__("\u4f7f\u7528\u90ae\u7bb1\u8d26\u53f7\u767b\u5f55")%></div>\n\t\t\t\t<% } %>\n\t\t\t\t<div class="tc-msg error" style="display:none">\n\t\t\t\t\t<span class="msg-icon"></span>\n\t\t\t\t\t<div class="tip-info J-loginTip"></div>\n\t\t\t\t</div>\n\t\t\t\t<ul class="form-list">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<div class="form-input">\n\t\t\t\t\t\t\t<div class="form-unit tip-unit">\n\t\t\t\t\t\t\t\t<% if (isThirdParty || isIntl) {%>\n\t\t\t\t\t\t\t\t\t<label class="input-tips" style="display: none;"><%=__("\u90ae\u7bb1\u5730\u5740")%></label>\n\t\t\t\t\t\t\t\t\t<input value="<%=lusername%>" type="text" class="qc-log-input-text lg J-username" placeholder="<%=__("\u90ae\u7bb1\u5730\u5740")%>">\n\t\t\t\t\t\t\t\t<%} else {%>\n\t\t\t\t\t\t\t\t\t<label class="input-tips" style="display: none;"><%=__("\u90ae\u7bb1\u5730\u5740/DNSPod\u8d26\u53f7")%></label>\n\t\t\t\t\t\t\t\t\t<input value="<%=lusername%>" type="text" class="qc-log-input-text lg J-username" placeholder="<%=__("\u90ae\u7bb1\u5730\u5740/DNSPod\u8d26\u53f7")%>">\n\t\t\t\t\t\t\t\t<%}%>\n\t\t\t\t\t\t\t\t<ul class="tip-list J-mailSuggest" style="display:none;">\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<div class="form-input">\n\t\t\t\t\t\t\t<div class="form-unit">\n\t\t\t\t\t\t\t\t<label class="input-tips" style="display: none;"><%=__("\u5bc6\u7801")%></label>\n\t\t\t\t\t\t\t\t<input type="password" class="qc-log-input-text lg J-password" placeholder="<%=__("\u5bc6\u7801")%>">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li style="display:none" class="J-vcodeArea">\n\t\t\t\t\t\t<div class="form-input fm-security">\n\t\t\t\t\t\t\t<div class="form-unit">\n\t\t\t\t\t\t\t\t<label class="input-tips" style="display: none;"><%=__("\u9a8c\u8bc1\u7801")%></label>\n\t\t\t\t\t\t\t\t<input type="text" class="qc-log-input-text J-vcodeInput" placeholder="<%=__("\u9a8c\u8bc1\u7801")%>" style="width:124px">\n\t\t\t\t\t\t\t\t<a href="javascript:;" class="security-num J-changeVCode">\n\t\t\t\t\t\t\t\t\t<img class="security-img J-vcodeImg">\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class="op-btn">\n\t\t\t\t<input type="button" value="<%=__("\u767b \u5f55")%>" class="qc-log-btn J-loginBtn" hotrep="login.btn.doLogin">\n\t\t\t\t<button type="button" class="qc-log-btn lg" style="display:none">\n\t\t\t\t\t<div class="m-loading">\n\t\t\t\t\t\t<div class="loading">\n\t\t\t\t\t\t\t<div class="one"></div>\n\t\t\t\t\t\t\t<div class="two"></div>\n\t\t\t\t\t\t\t<div class="three"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</button>\n\t\t\t\t<% if (!isMobile) { %>\n\t\t\t\t<div class="psw-info">\n\t\t\t\t\t<a href="<%=forgetpwd_url%>?s_url=<%=encodeURIComponent(s_url)%>" class="forgot-psw J-link" hotrep="login.pc.forgotPwd"><%=__("\u5fd8\u8bb0\u8d26\u53f7\u6216\u5bc6\u7801\uff1f")%></a>\n\t\t\t\t</div>\n\t\t\t\t<% } %>\n\t\t\t</div>\n\t\t</div>\n\t\t<!--\u90ae\u7bb1\u624b\u673a\u767b\u5f55 end-->\n\t\t<!--QQ\u767b\u5f55\u793a\u610f start-->\n\t\t<div class="login-box qq-box J-loginContentBox J-ptloginBox" style="height:300px; padding-bottom:0px;">\n\t\t\t<iframe id="qc_ptlogin_iframe" scrolling="no" width="100%" height="100%" frameborder="0" allowtransparency="yes"></iframe>\n\t\t</div>\n\n\t\t<% if(!isMobile) { %>\n\t\t<div class="login-box wx-box J-loginContentBox J-wxloginBox" style="display: none; height: 260px;">\n\t\t\t<div class="lg-qr-box">\n\t\t\t\t<iframe frameborder="no" scrolling="no" style="width:100%; height:215px;" src="" style="display: none;"></iframe>\n\t\t\t</div>\n\t\t\t<div class="lg-qr-txt">\n\t\t\t\t<p>\n\t\t\t\t\t<%=__("\u8bf7\u4f7f\u7528\u5fae\u4fe1\u626b\u63cf\u4e8c\u7ef4\u7801\u767b\u5f55")%> <br><%=__("\u201c\u817e\u8baf\u4e91\u201d")%>\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\t\t<% } %>\n\t\t<!--QQ\u767b\u5f55\u793a\u610f end-->\n\n\t\t<% if (!isMobile) { %>\n\t\t<div class="outside-login">\n\t\t\t<% if (!isIntl) { %>\n\t\t\t<div class="outside-login-tit">\n\t\t\t\t<span class="J-txtMoreLoginType"><%=__("\u66f4\u591a\u767b\u5f55\u65b9\u5f0f")%></span>\n\t\t\t</div>\n\t\t\t<div class="outside-login-con">\n\t\t\t\t<div class="outside-login-list">\n\t\t\t\t\t<a class="outside-login-btn mail actived J-btnSwitchLoginType" href="javascript:;" data-type="email" data-hot="login.email" hotrep="login.email">\n\t\t\t\t\t\t<em><i class="mail-login-icon"></i></em>\n\t\t\t\t\t\t<span><%=__("\u90ae\u7bb1\u8d26\u53f7")%></span>\n\t\t\t\t\t</a>\n\t\t\t\t\t<a class="outside-login-btn wx actived J-btnSwitchLoginType" data-type="wx" href="<%=wechatLoginUrl%>s_url=<%=encodeURIComponent(s_url)%>" data-hot="login.wx" hotrep="login.wx">\n\t\t\t\t\t\t<em><i class="wx-login-icon"></i></em>\n\t\t\t\t\t\t<span><%=__("\u5fae\u4fe1\u8d26\u53f7")%></span>\n\t\t\t\t\t</a>\n\t\t\t\t\t<a class="outside-login-btn wxoa actived J-btnSwitchLoginType" data-type="wxmp" href="<%=mpLoginUrl%>s_url=<%=encodeURIComponent(s_url)%>" data-hot="login.mp" hotrep="login.mp">\n\t\t\t\t\t\t<em><i class="wxoa-login-icon"></i></em>\n\t\t\t\t\t\t<span><%=__("\u5fae\u4fe1\u516c\u4f17\u53f7")%></span>\n\t\t\t\t\t</a>\n\t\t\t\t\t<a class="outside-login-btn qq J-btnSwitchLoginType" href="javascript:;" data-type="qq" data-hot="login.qq" hotrep="login.qq">\n\t\t\t\t\t\t<em><i class="qq-login-icon"></i></em>\n\t\t\t\t\t\t<span><%=__("QQ\u8d26\u53f7")%></span>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<% } %>\n\t\t</div>\n\t\t<% } %>\n\n\t</div>\n\t<!--login end-->\n\n\t<!--\u6ce8\u518c\u63d0\u793a start-->\n\t<% if(isMobile) {%>\n\t<div class="regist">\n\t\t<p class="tag-line">\n\t\t\t<a href="<%=forgetpwd_url%>" class="link J-link" hotrep="login.m.forgotPwd"><%=__("\u5fd8\u8bb0\u5bc6\u7801\uff1f")%></a>\n\n\t\t\t<% if (!hide_register) { %>\n\t\t\t<span class="login-text">\n\t\t\t\t<% if(language != "en" || isIntl) {%>\n\t\t\t\t<%=__("\u8fd8\u6ca1\u6709\u8d26\u53f7\uff1f")%><a href="<%=register_url%>?s_url=<%=encodeURIComponent(s_url)%>" class="link J-link" hotrep="login.m.register"><%=__("\u7acb\u5373\u6ce8\u518c")%></a>\n\t\t\t\t<% } %>\n\t\t\t</span>\n\t\t\t<% } %>\n\t\t</p>\n\t</div>\n\t<%} %>\n\n\t<% if (!isMobile && !hide_register) { %>\n\t<div class="regist">\n\t\t<p class="tag-line">\n\t\t\t<% if(language != "en" || isIntl) {%>\n\t\t\t<%=__("\u8fd8\u6ca1\u6709\u8d26\u53f7\uff1f")%><a href="<%=register_url%>?s_url=<%=encodeURIComponent(s_url)%>" class="link J-link" hotrep="login.pc.register"><%=__("\u7acb\u5373\u6ce8\u518c")%></a>\n\t\t\t<% } %>\n\t\t</p>\n\t</div>\n\t<%} %>\n\t<!--\u6ce8\u518c\u63d0\u793a end-->\n</div>\n\n<% if (isMobile && !isIntl) { %>\n<div class="wx-login">\n\t<div class="wx-login-tit">\n\t\t<span><%=__("\u66f4\u591a\u767b\u5f55\u65b9\u5f0f")%></span>\n\t</div>\n\t<div class="login-icon-wrap">\n\t\t<% if(isWechat || isSupportWxLoginInMobile) { %>\n\t\t<a class="wx-login-btn green J-link" href="<%=wechatLoginUrl%>s_url=<%=encodeURIComponent(s_url)%>&fwd_flag=<%= fwd_flag %>">\n\t\t\t<em><i class="wx-login-icon"></i></em>\n\t\t\t<span><%=__("\u5fae\u4fe1\u8d26\u53f7")%></span>\n\t\t</a>\n\t\t<% } %>\n\t\t<a class="wx-login-btn blue J-jumpToQQMobileLogin" href="javascript:;">\n\t\t\t<em><i class="qq-login-icon"></i></em><span><%=__("QQ\u8d26\u53f7")%></span>\n\t\t</a>\n\t</div>\n</div>\n<% } %>\n\n\n'
	},
	YIfu: function(t, e, i) {
		var n = i("WPtr"),
		o = Math.random().toString(36).slice(2),
		s = i("4G7m"),
		r = i("ijdI"),
		a = i("sdDX"),
		h = i("Oh7S"),
		l = i("Uzku"),
		u = i("M34W"),
		c = u.getRealHostname(),
		p = a.__,
		f = {
			name: "login",
			_uin: "",
			_csrfCode: "",
			_loginNamespace: ".qcmain_login_dialog",
			_loginboxId: "qcmain_login_box_" + o,
			_loginmaskId: "qcmain_login_mask_" + o,
			_currentLoginType: "",
			init: function() {
				return this.updateUin(),
				this.updateCsrfCode(),
				window.QCLoginCssLoaded && (a.cssLoaded = !0),
				this
			},
			getUin: function() {
				return this._uin
			},
			getCsrfCode: function() {
				return this._csrfCode
			},
			updateUin: function() {
				var t = n.get("uin") || "";
				this._uin = t.replace(/^o0*/, "")
			},
			isLogin: function() {
				return !! this.getUin()
			},
			updateCsrfCode: function() {
				var t = n.get("skey") || n.get("p_skey");
				if (t) {
					for (var e = 5381,
					i = 0,
					o = t.length; i < o; i += 1) e += (e << 5) + t.charCodeAt(i);
					this._csrfCode = 2147483647 & e
				} else this._csrfCode = ""
			},
			gotoLoginPage: function(t) {
				var e = "https://" + c + "/login";
				t !== !0 && (e += "?s_url=" + encodeURIComponent(location.href)),
				this._clearLoginState(),
				location.href = e
			},
			gotoMobilePtloginPage: function(t, e) {
				var i = this,
				n = "https://ui.ptlogin2.qq.com/cgi-bin/login?hln_u_tips=QQ&hide_title_bar=1&bgcolor=ffffff&no_verifyimg=1&link_target=blank&style=9&appid=543009503&target=parent&&enable_qlogin=1",
				o = i.opts.pt_login_forward_url + "?s_url=" + encodeURIComponent(t || i.opts.s_url);
				"undefined" != typeof e && (o += "&fwd_flag=" + encodeURIComponent(e)),
				n += "&s_url=" + encodeURIComponent(o),
				"en" == this._getLanguage() && (n += "&lang=1033"),
				this._clearLoginState(),
				location.href = n
			},
			gotoMobileLoginPage: function(t) {
				return this.gotoLoginPage()
			},
			gotoRegisterPage: function() {
				location.href = "https://" + c + "/register?s_url=" + encodeURIComponent(location.href)
			},
			preHandlerOpts: function(t) {
				var e = this;
				t = t || {},
				t.s_url || t.container || (s.s_url = location.href),
				t.isThirdParty && (s.isThirdParty = t.isThirdParty, s.enableIframeWechatLogin = 0),
				t.language && (p = a.getTranslator(t.language));
				var i = a.getLastLoginType(),
				o = ("" + t.defaultLoginType).toLowerCase();
				/^(qq|email|wx)$/.test(o) || (o = s.defaultLoginType),
				"wx" !== o || s.enableIframeWechatLogin || (o = s.defaultLoginType),
				i || (i = o),
				"wx" !== i || s.enableIframeWechatLogin || (i = o),
				t.defaultLoginType = o,
				this._currentLoginType = i,
				location.hostname && location.hostname.indexOf("intl.cloud.tencent.com") != -1 && (this._currentLoginType = t.defaultLoginType = s.defaultLoginType = "email", s.isIntl = 1, s.register_url = "https://intl.cloud.tencent.com/register", s.forgetpwd_url = "https://intl.cloud.tencent.com/password/recover"),
				t.fwd_flag = this._getForwardDirectiveFlag(t),
				this.opts = $.extend({
					__: p,
					lusername: n.get("lusername") || "",
					language: e._getLanguage(t),
					isMobile: a.isMobile(),
					isWechat: a.isWechat(),
					isSupportWxLoginInMobile: a.isSupportWxLoginInMobile()
				},
				s, t),
				this.opts.wechatLoginUrl = a.getWechatLoginUrl()
			},
			showLoginBox: function(t) {
				var e = this;
				return e.preHandlerOpts(t),
				!e.opts.container && n.get("subAccountLoginPage") ? location.href = n.get("subAccountLoginPage") : e.opts.container || !a.isMobile() && 2 != n.get("intl") ? (e.opts.container || e._clearLoginState(), void a.loadCss().done(function() {
					if (e.opts.container) {
						var t = e.$loginbox = $(a.tmpl(r, e.opts));
						$(e.opts.container).append(t)
					} else {
						var t = e._getLoginBox().show(),
						i = (e._getLoginMask().show(), $(window)),
						n = "resize" + e._loginNamespace;
						"message" + e._loginNamespace;
						t.html($(a.tmpl(r, e.opts))),
						i.off(n).on(n,
						function() {
							t.css({
								left: function() {
									return (i.width() - t.width()) / 2
								},
								top: function() {
									var e = (i.height() - t.height()) / 2;
									return Math.max(0, Math.min(300, e))
								}
							})
						}).trigger(n)
					}
					e.opts.beforeBindEvent && "function" == typeof e.opts.beforeBindEvent && e.opts.beforeBindEvent(),
					e.bindEvents()
				})) : e._getLoginPage()
			},
			bindEvents: function() {
				var t = this;
				a.isMobile() ? (t.$loginbox.find(".J-qcloginBox, .J-ptloginBox").hide(), t.$loginbox.find(".J-qcloginBox").show()) : t.switchLoginType(t._currentLoginType),
				t.$loginbox.find(".J-loginBtn").off().on("click",
				function() {
					t.sendLoginRequest()
				}),
				t.$loginbox.find(".J-changeVCode").off().on("click",
				function() {
					t._setVCodeImgUrl()
				}),
				t.$loginbox.find(".login-form input").off().on("blur",
				function() {
					a.hideInputErrorTip(this),
					a.hidePromptTip(this)
				}).on("keypress",
				function(t) {
					a.hideInputErrorTip(this),
					$(this).hasClass("J-password") && a.capslock(t) && a.showPromptTip(this, "\u952e\u76d8\u5927\u5199\u9501\u5b9a\u5df2\u6253\u5f00\uff0c\u8bf7\u6ce8\u610f")
				}),
				t.$loginbox.on("keyup", ".J-password",
				function(t) {
					20 == (t.which || t.keyCode) && a.hidePromptTip()
				}),
				t.$loginbox.find(".J-jumpToQQMobileLogin").off().on("click",
				function() {
					t._clearLoginState(),
					t.gotoMobilePtloginPage(t.opts.s_url, t.opts.fwd_flag)
				}),
				t.$loginbox.find(".J-password, .J-vcodeInput").off("keydown").on("keydown",
				function(e) {
					10 != e.which && 13 != e.which || t.sendLoginRequest()
				}),
				t.$loginbox.find(".J-closeLoginBox").off().on("click",
				function() {
					t.$loginbox.hide(),
					t.$loginmask.hide()
				}),
				t.$loginbox.find(".J-link").off().on("click",
				function() {
					return t._redirect($(this).attr("href")),
					!1
				}),
				t.$loginbox.find(".J-btnSwitchLoginType").off().on("click",
				function(e) {
					e.preventDefault();
					var i = $(this).data("type");
					t.switchLoginType(i)
				}),
				!t.opts.hide_close_icon && t.$loginmask && t.$loginmask.off().on("click",
				function() {
					t.hideLoginBox()
				}),
				a.isMobile() || t.opts.hideMailSuggest || new l({
					input: t.$loginbox.find(".J-username"),
					suggest: t.$loginbox.find(".J-mailSuggest")
				}),
				t.$loginbox.on("click", ".J-switchChineseLogin",
				function() {
					n.remove("intl", {
						domain: u.getCookieDomain(),
						path: "/"
					}),
					location.href = "https://cloud.tencent.com/login?s_url=" + encodeURIComponent(t.opts.s_url)
				}),
				t.$loginbox.on("click", ".J-switchIntlLogin",
				function() {
					location.href = "https://intl.cloud.tencent.com/login?s_url=" + encodeURIComponent(t.opts.s_url)
				}),
				t.$loginbox.on("click", ".J-switchQQLogin",
				function() {
					a.isMobile() ? (t._clearLoginState(), t.gotoMobilePtloginPage(t.opts.s_url, t.opts.fwd_flag)) : ($(".J-loginTip").html("").parent().hide(), t.default_uin = t.$loginbox.find(".J-username").val(), t.$loginbox.find(".J-username").val(""), t.$loginbox.find(".J-password").val(""), t.switchLoginType("qq", !0))
				}),
				h.init()
			},
			sendLoginRequest: function() {
				var t = this,
				e = a.checkLoginForm();
				e && (e.action = "login", t.opts.isThirdParty || (e.areaType = t.opts.isIntl ? 2 : 1), t.$loginbox.find(".J-loginBtn").hide().next("button").show(), c == location.host && location.protocol.indexOf("https") != -1 ? $.ajax({
					url: this.opts.qcloud_login_url,
					data: e,
					method: "POST",
					type: "POST",
					timeout: 2e4
				}).always(function(e) {
					t.loginReturnHandle(e)
				}) : a.proxyPost({
					url: this.opts.qcloud_login_url,
					data: e
				},
				function(e) {
					t.loginReturnHandle(e)
				}))
			},
			loginReturnHandle: function(t) {
				var e = this;
				switch (t = t || {},
				0 != t.code && e.$loginbox.find(".J-loginBtn").show().next("button").hide(), +t.code) {
				case 0:
					e._redirect(e.opts.login_forward_url + "?s_url=" + encodeURIComponent(e.opts.s_url) + "&fwd_flag=" + encodeURIComponent(this.opts.fwd_flag));
					break;
				case 70002:
					a.showInputErrorTip(e.$loginbox.find(".J-username"), "\u53c2\u6570\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165");
					break;
				case 70006:
				case 70008:
					a.showInputErrorTip(e.$loginbox.find(".J-password"), "\u8d26\u53f7\u4e0d\u5b58\u5728\u6216\u5bc6\u7801\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165");
					break;
				case 70007:
					e.$loginbox.find(".J-password").val(""),
					a.showInputErrorTip(e.$loginbox.find(".J-password"), "\u8d26\u53f7\u4e0d\u5b58\u5728\u6216\u5bc6\u7801\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165"),
					e.$loginbox.find(".J-vcodeInput").val(""),
					e.$loginbox.find(".J-vcodeArea").show(),
					e._setVCodeImgUrl();
					break;
				case 70010:
					a.showInputErrorTip(e.$loginbox.find(".J-username"), "\u8d26\u53f7\u5bc6\u7801\u9519\u8bef\u6b21\u6570\u8fbe\u5230\u4e0a\u9650\uff0c\u5f53\u65e5\u4e0d\u53ef\u767b\u5f55");
					break;
				case 310001:
					e.$loginbox.find(".J-vcodeInput").val(""),
					e.$loginbox.find(".J-vcodeArea").show(),
					a.showInputErrorTip(e.$loginbox.find(".J-vcodeInput"), "\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801"),
					e._setVCodeImgUrl();
					break;
				case 310002:
					e.$loginbox.find(".J-vcodeInput").val(""),
					e.$loginbox.find(".J-vcodeArea").show(),
					a.showInputErrorTip(e.$loginbox.find(".J-vcodeInput"), "\u9a8c\u8bc1\u7801\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165"),
					e._setVCodeImgUrl();
					break;
				case 70024:
					e.opts.isIntl ? a.showInputErrorTip(null, 'Your account is for Tencent Cloud China\uff0c<a href="javascript:;" class="J-switchChineseLogin">Log in now</a>') : a.showInputErrorTip(null, p("\u8be5\u8d26\u53f7\u5c5e\u4e8e\u56fd\u9645\u7ad9\u8d26\u53f7\uff0c") + '<a href="javascript:;" class="J-switchIntlLogin">' + p("\u524d\u5f80\u767b\u5f55") + "</a>");
					break;
				case 30301:
					a.showInputErrorTip(null, p('\u8be5\u8d26\u53f7\u53ef\u80fd\u662f\u901a\u8fc7QQ\u5feb\u6377\u6ce8\u518c\uff0c\u8bf7<a href="javascript:;" class="J-switchQQLogin">\u5207\u6362\u81f3QQ\u767b\u5f55<a/>'));
					break;
				default:
					a.showInputErrorTip(e.$loginbox.find(".J-username"), "\u767b\u5f55\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5")
				}
			},
			switchLoginType: function(t, e) {
				var i = this,
				n = i.$loginbox.find(".J-txtLoginTitle"),
				o = i.$loginbox.find(".J-txtMoreLoginType"),
				s = n.text(),
				r = o.text();
				switch (t) {
				default:
				case "email":
					s = p("\u90ae\u7bb1\u767b\u5f55"),
					r = p("\u5feb\u6377\u767b\u5f55"),
					i._currentLoginType = t,
					i.$loginbox.find(".J-loginContentBox").hide();
					var h = i.$loginbox.find(".J-qcloginBox"),
					l = h.find(".J-username"),
					u = h.find(".J-password");
					h.show(),
					$.trim(l.val()) ? u.focus() : l.focus(),
					a.saveLoginTypeInLocal("email");
					break;
				case "qq":
					s = p("QQ\u767b\u5f55"),
					r = p("\u66f4\u591a\u767b\u5f55\u65b9\u5f0f"),
					i._currentLoginType = t,
					i.$loginbox.find(".J-loginContentBox").hide(),
					i.$loginbox.find(".J-ptloginBox").show(),
					i.$loginbox.find(".J-ptloginBox iframe").attr("src") && !e || i.$loginbox.find(".J-ptloginBox iframe").attr("src", i._getPtloginUrl(i.opts)),
					a.saveLoginTypeInLocal("qq");
					break;
				case "wx":
					i.opts.enableIframeWechatLogin ? (s = p("\u5fae\u4fe1\u767b\u5f55"), r = p("\u66f4\u591a\u767b\u5f55\u65b9\u5f0f"), i._currentLoginType = t, i.$loginbox.find(".J-loginContentBox").hide(), i.$loginbox.find(".J-wxloginBox").show(), i.$loginbox.find(".J-wxloginBox iframe").attr("src") || i.$loginbox.find(".J-wxloginBox iframe").attr("src", i._getWXLoginUrl(i.opts.enableIframeWechatLogin)).show(), a.saveLoginTypeInLocal("wx")) : i._redirect(i._getWXLoginUrl());
					break;
				case "wxmp":
					i._redirect(i._getWXMPLoginUrl())
				}
				n.text(s),
				o.text(r),
				i.$loginbox.find(".J-btnSwitchLoginType[data-type=" + i._currentLoginType + "]").removeClass("actived").siblings().addClass("actived"),
				a.notifyResize()
			},
			hideLoginBox: function() {
				this.$loginbox && this.$loginbox.empty().hide(),
				this.$loginmask && this.$loginmask.hide()
			},
			logout: function() {
				this._clearLoginState()
			},
			_getLoginBox: function() {
				var t = $("#" + this._loginboxId);
				return t.length || (t = $("<div>").css({
					position: "fixed",
					left: 0,
					top: 0,
					width: "430px",
					height: "534px",
					"background-color": "transparent",
					"z-index": 9001,
					"border-radius": "4px"
				}).attr("id", this._loginboxId).appendTo("body")),
				this.$loginbox = t
			},
			_getLoginMask: function() {
				var t = $("#" + this._loginmaskId);
				return t.length || (t = $("<div>").css({
					position: "fixed",
					left: 0,
					top: 0,
					right: 0,
					bottom: 0,
					background: "#000",
					opacity: ".75",
					"z-index": 9e3
				}).attr("id", this._loginmaskId).appendTo("body")),
				this.$loginmask = t
			},
			_getPtloginUrl: function(t) {
				var e = this,
				i = this.opts.ptlogin_url,
				n = this.opts.ptlogin_config;
				return n.s_url = this.opts.s_url,
				n.s_url = e.opts.pt_login_forward_url + "?s_url=" + encodeURIComponent(n.s_url),
				"undefined" != typeof this.opts.fwd_flag && (n.s_url += "&fwd_flag=" + encodeURIComponent(this.opts.fwd_flag)),
				"undefined" != typeof this.opts.no_redirect && (n.s_url += "&no_redirect=" + encodeURIComponent(this.opts.no_redirect)),
				n.lang || "en" != this._getLanguage(this.opts) || (n.lang = 1033),
				e.default_uin && (n.default_uin = e.default_uin, e.default_uin = ""),
				i + "?" + $.param(n)
			},
			_getWXLoginUrl: function(t) {
				var e = this.opts.wechatLoginUrl + "s_url=" + encodeURIComponent(this.opts.s_url);
				return t && (e += "&theme=simple"),
				"undefined" != typeof this.opts.fwd_flag && (e += "&fwd_flag=" + encodeURIComponent(this.opts.fwd_flag)),
				e
			},
			_getWXMPLoginUrl: function() {
				var t = this.opts.mpLoginUrl + "s_url=" + encodeURIComponent(this.opts.s_url);
				return "undefined" != this.opts.fwd_flag && (t += "&fwd_flag=" + encodeURIComponent(this.opts.fwd_flag)),
				t
			},
			_getForwardDirectiveFlag: function(t) {
				var e = 1,
				i = 2,
				n = 4,
				o = 0;
				return t.shallowLogin || t.skipRegisterCompletion || (o += e),
				t.shallowLogin || t.skipLoginProtect || (o += i),
				t.shallowLogin || t.skipOwnerSelection || (o += n),
				o
			},
			_getLanguage: function(t) {
				return (t || {}).language || n.get("language") || ""
			},
			_getVCodeUrl: function() {
				return this.opts.vcode_url + "?t=" + (new Date).getTime()
			},
			_setVCodeImgUrl: function() {
				this.$loginbox.find(".J-vcodeImg").attr("src", this._getVCodeUrl()),
				a.notifyResize()
			},
			_clearLoginState: function() {
				var t = {
					domain: u.getCookieDomain(),
					path: "/"
				};
				n.remove("uin", t),
				n.remove("skey", t),
				n.remove("p_skey", t),
				n.remove("nick", t),
				n.remove("tinyid", t),
				this.updateCsrfCode()
			},
			_messageCallback: function(t) {
				var e = this,
				i = {},
				n = t.origin || t.originalEvent.origin;
				if (n && (n = n.replace(/(:\d+)/g, "")), /\.(tencent\.com|qcloud\.com|qq\.com|dnspod\.cn|dnspod\.com)$/i.test(n)) {
					try {
						i = JSON.parse(t.data || "")
					} catch(t) {}
					switch (i.action) {
					case "redirect":
						i && i.url && !/^http/i.test(i.url) && (i.url = ""),
						e._redirect(i.url || top.location.href);
						break;
					case "loginReturnHandle":
						e.loginReturnHandle(i.resp);
						break;
					case "loginCompletion":
						e._loginCompletionCallback()
					}
				}
			},
			_redirect: function(t) {
				try {
					var e = top.location.href;
					t.indexOf("#") != -1 && e.split("#")[0] == t.split("#")[0] ? top.location.reload() : top.location.href = t
				} catch(e) {
					top.postMessage(JSON.stringify({
						action: "redirect",
						url: t
					}), "*")
				}
			},
			_loginCompletionCallback: function() {
				this.hideLoginBox(),
				this.opts.completionCallback && this.opts.completionCallback()
			},
			_getLoginPage: function() {
				var t = "https://" + c + "/login";
				t += "?s_url=" + encodeURIComponent(this.opts.s_url),
				this.opts.skipRegisterCompletion && (t += "&rc=0"),
				this.opts.skipLoginProtect && (t += "&vf=0"),
				this.opts.skipOwnerSelection && (t += "&sc=0"),
				"undefined" != typeof this.opts.fwd_flag && (t += "&fwd_flag=" + this.opts.fwd_flag),
				this._clearLoginState(),
				location.href = t
			}
		};
		window.addEventListener && window.addEventListener("message",
		function(t) {
			f._messageCallback(t)
		},
		!1),
		t.exports = f.init()
	},
	HbSM: function(t, e) {
		function i(t, e, i) {
			null != t && ("number" == typeof t ? this.fromNumber(t, e, i) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e))
		}
		function n() {
			return new i(null)
		}
		function o(t, e, i, n, o, s) {
			for (; --s >= 0;) {
				var r = e * this[t++] + i[n] + o;
				o = Math.floor(r / 67108864),
				i[n++] = 67108863 & r
			}
			return o
		}
		function s(t, e, i, n, o, s) {
			for (var r = 32767 & e,
			a = e >> 15; --s >= 0;) {
				var h = 32767 & this[t],
				l = this[t++] >> 15,
				u = a * h + l * r;
				h = r * h + ((32767 & u) << 15) + i[n] + (1073741823 & o),
				o = (h >>> 30) + (u >>> 15) + a * l + (o >>> 30),
				i[n++] = 1073741823 & h
			}
			return o
		}
		function r(t, e, i, n, o, s) {
			for (var r = 16383 & e,
			a = e >> 14; --s >= 0;) {
				var h = 16383 & this[t],
				l = this[t++] >> 14,
				u = a * h + l * r;
				h = r * h + ((16383 & u) << 14) + i[n] + o,
				o = (h >> 28) + (u >> 14) + a * l,
				i[n++] = 268435455 & h
			}
			return o
		}
		function a(t) {
			return Le.charAt(t)
		}
		function h(t, e) {
			var i = Ie[t.charCodeAt(e)];
			return null == i ? -1 : i
		}
		function l(t) {
			for (var e = this.t - 1; e >= 0; --e) t[e] = this[e];
			t.t = this.t,
			t.s = this.s
		}
		function u(t) {
			this.t = 1,
			this.s = t < 0 ? -1 : 0,
			t > 0 ? this[0] = t: t < -1 ? this[0] = t + this.DV: this.t = 0
		}
		function c(t) {
			var e = n();
			return e.fromInt(t),
			e
		}
		function p(t, e) {
			var n;
			if (16 == e) n = 4;
			else if (8 == e) n = 3;
			else if (256 == e) n = 8;
			else if (2 == e) n = 1;
			else if (32 == e) n = 5;
			else {
				if (4 != e) return void this.fromRadix(t, e);
				n = 2
			}
			this.t = 0,
			this.s = 0;
			for (var o = t.length,
			s = !1,
			r = 0; --o >= 0;) {
				var a = 8 == n ? 255 & t[o] : h(t, o);
				a < 0 ? "-" == t.charAt(o) && (s = !0) : (s = !1, 0 == r ? this[this.t++] = a: r + n > this.DB ? (this[this.t - 1] |= (a & (1 << this.DB - r) - 1) << r, this[this.t++] = a >> this.DB - r) : this[this.t - 1] |= a << r, r += n, r >= this.DB && (r -= this.DB))
			}
			8 == n && 0 != (128 & t[0]) && (this.s = -1, r > 0 && (this[this.t - 1] |= (1 << this.DB - r) - 1 << r)),
			this.clamp(),
			s && i.ZERO.subTo(this, this)
		}
		function f() {
			for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t;)--this.t
		}
		function d(t) {
			if (this.s < 0) return "-" + this.negate().toString(t);
			var e;
			if (16 == t) e = 4;
			else if (8 == t) e = 3;
			else if (2 == t) e = 1;
			else if (32 == t) e = 5;
			else {
				if (4 != t) return this.toRadix(t);
				e = 2
			}
			var i, n = (1 << e) - 1,
			o = !1,
			s = "",
			r = this.t,
			h = this.DB - r * this.DB % e;
			if (r-->0) for (h < this.DB && (i = this[r] >> h) > 0 && (o = !0, s = a(i)); r >= 0;) h < e ? (i = (this[r] & (1 << h) - 1) << e - h, i |= this[--r] >> (h += this.DB - e)) : (i = this[r] >> (h -= e) & n, h <= 0 && (h += this.DB, --r)),
			i > 0 && (o = !0),
			o && (s += a(i));
			return o ? s: "0"
		}
		function g() {
			var t = n();
			return i.ZERO.subTo(this, t),
			t
		}
		function m() {
			return this.s < 0 ? this.negate() : this
		}
		function y(t) {
			var e = this.s - t.s;
			if (0 != e) return e;
			var i = this.t;
			if (e = i - t.t, 0 != e) return this.s < 0 ? -e: e;
			for (; --i >= 0;) if (0 != (e = this[i] - t[i])) return e;
			return 0
		}
		function b(t) {
			var e, i = 1;
			return 0 != (e = t >>> 16) && (t = e, i += 16),
			0 != (e = t >> 8) && (t = e, i += 8),
			0 != (e = t >> 4) && (t = e, i += 4),
			0 != (e = t >> 2) && (t = e, i += 2),
			0 != (e = t >> 1) && (t = e, i += 1),
			i
		}
		function w() {
			return this.t <= 0 ? 0 : this.DB * (this.t - 1) + b(this[this.t - 1] ^ this.s & this.DM)
		}
		function x(t, e) {
			var i;
			for (i = this.t - 1; i >= 0; --i) e[i + t] = this[i];
			for (i = t - 1; i >= 0; --i) e[i] = 0;
			e.t = this.t + t,
			e.s = this.s
		}
		function T(t, e) {
			for (var i = t; i < this.t; ++i) e[i - t] = this[i];
			e.t = Math.max(this.t - t, 0),
			e.s = this.s
		}
		function S(t, e) {
			var i, n = t % this.DB,
			o = this.DB - n,
			s = (1 << o) - 1,
			r = Math.floor(t / this.DB),
			a = this.s << n & this.DM;
			for (i = this.t - 1; i >= 0; --i) e[i + r + 1] = this[i] >> o | a,
			a = (this[i] & s) << n;
			for (i = r - 1; i >= 0; --i) e[i] = 0;
			e[r] = a,
			e.t = this.t + r + 1,
			e.s = this.s,
			e.clamp()
		}
		function _(t, e) {
			e.s = this.s;
			var i = Math.floor(t / this.DB);
			if (i >= this.t) return void(e.t = 0);
			var n = t % this.DB,
			o = this.DB - n,
			s = (1 << n) - 1;
			e[0] = this[i] >> n;
			for (var r = i + 1; r < this.t; ++r) e[r - i - 1] |= (this[r] & s) << o,
			e[r - i] = this[r] >> n;
			n > 0 && (e[this.t - i - 1] |= (this.s & s) << o),
			e.t = this.t - i,
			e.clamp()
		}
		function R(t, e) {
			for (var i = 0,
			n = 0,
			o = Math.min(t.t, this.t); i < o;) n += this[i] - t[i],
			e[i++] = n & this.DM,
			n >>= this.DB;
			if (t.t < this.t) {
				for (n -= t.s; i < this.t;) n += this[i],
				e[i++] = n & this.DM,
				n >>= this.DB;
				n += this.s
			} else {
				for (n += this.s; i < t.t;) n -= t[i],
				e[i++] = n & this.DM,
				n >>= this.DB;
				n -= t.s
			}
			e.s = n < 0 ? -1 : 0,
			n < -1 ? e[i++] = this.DV + n: n > 0 && (e[i++] = n),
			e.t = i,
			e.clamp()
		}
		function E(t, e) {
			var n = this.abs(),
			o = t.abs(),
			s = n.t;
			for (e.t = s + o.t; --s >= 0;) e[s] = 0;
			for (s = 0; s < o.t; ++s) e[s + n.t] = n.am(0, o[s], e, s, 0, n.t);
			e.s = 0,
			e.clamp(),
			this.s != t.s && i.ZERO.subTo(e, e)
		}
		function D(t) {
			for (var e = this.abs(), i = t.t = 2 * e.t; --i >= 0;) t[i] = 0;
			for (i = 0; i < e.t - 1; ++i) {
				var n = e.am(i, e[i], t, 2 * i, 0, 1); (t[i + e.t] += e.am(i + 1, 2 * e[i], t, 2 * i + 1, n, e.t - i - 1)) >= e.DV && (t[i + e.t] -= e.DV, t[i + e.t + 1] = 1)
			}
			t.t > 0 && (t[t.t - 1] += e.am(i, e[i], t, 2 * i, 0, 1)),
			t.s = 0,
			t.clamp()
		}
		function L(t, e, o) {
			var s = t.abs();
			if (! (s.t <= 0)) {
				var r = this.abs();
				if (r.t < s.t) return null != e && e.fromInt(0),
				void(null != o && this.copyTo(o));
				null == o && (o = n());
				var a = n(),
				h = this.s,
				l = t.s,
				u = this.DB - b(s[s.t - 1]);
				u > 0 ? (s.lShiftTo(u, a), r.lShiftTo(u, o)) : (s.copyTo(a), r.copyTo(o));
				var c = a.t,
				p = a[c - 1];
				if (0 != p) {
					var f = p * (1 << this.F1) + (c > 1 ? a[c - 2] >> this.F2: 0),
					d = this.FV / f,
					g = (1 << this.F1) / f,
					m = 1 << this.F2,
					v = o.t,
					y = v - c,
					w = null == e ? n() : e;
					for (a.dlShiftTo(y, w), o.compareTo(w) >= 0 && (o[o.t++] = 1, o.subTo(w, o)), i.ONE.dlShiftTo(c, w), w.subTo(a, a); a.t < c;) a[a.t++] = 0;
					for (; --y >= 0;) {
						var x = o[--v] == p ? this.DM: Math.floor(o[v] * d + (o[v - 1] + m) * g);
						if ((o[v] += a.am(0, x, o, y, 0, c)) < x) for (a.dlShiftTo(y, w), o.subTo(w, o); o[v] < --x;) o.subTo(w, o)
					}
					null != e && (o.drShiftTo(c, e), h != l && i.ZERO.subTo(e, e)),
					o.t = c,
					o.clamp(),
					u > 0 && o.rShiftTo(u, o),
					h < 0 && i.ZERO.subTo(o, o)
				}
			}
		}
		function I(t) {
			var e = n();
			return this.abs().divRemTo(t, null, e),
			this.s < 0 && e.compareTo(i.ZERO) > 0 && t.subTo(e, e),
			e
		}
		function J(t) {
			this.m = t
		}
		function U(t) {
			return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t
		}
		function B(t) {
			return t
		}
		function C(t) {
			t.divRemTo(this.m, null, t)
		}
		function A(t, e, i) {
			t.multiplyTo(e, i),
			this.reduce(i)
		}
		function P(t, e) {
			t.squareTo(e),
			this.reduce(e)
		}
		function O() {
			if (this.t < 1) return 0;
			var t = this[0];
			if (0 == (1 & t)) return 0;
			var e = 3 & t;
			return e = e * (2 - (15 & t) * e) & 15,
			e = e * (2 - (255 & t) * e) & 255,
			e = e * (2 - ((65535 & t) * e & 65535)) & 65535,
			e = e * (2 - t * e % this.DV) % this.DV,
			e > 0 ? this.DV - e: -e
		}
		function q(t) {
			this.m = t,
			this.mp = t.invDigit(),
			this.mpl = 32767 & this.mp,
			this.mph = this.mp >> 15,
			this.um = (1 << t.DB - 15) - 1,
			this.mt2 = 2 * t.t
		}
		function K(t) {
			var e = n();
			return t.abs().dlShiftTo(this.m.t, e),
			e.divRemTo(this.m, null, e),
			t.s < 0 && e.compareTo(i.ZERO) > 0 && this.m.subTo(e, e),
			e
		}
		function k(t) {
			var e = n();
			return t.copyTo(e),
			this.reduce(e),
			e
		}
		function M(t) {
			for (; t.t <= this.mt2;) t[t.t++] = 0;
			for (var e = 0; e < this.m.t; ++e) {
				var i = 32767 & t[e],
				n = i * this.mpl + ((i * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
				for (i = e + this.m.t, t[i] += this.m.am(0, n, t, e, 0, this.m.t); t[i] >= t.DV;) t[i] -= t.DV,
				t[++i]++
			}
			t.clamp(),
			t.drShiftTo(this.m.t, t),
			t.compareTo(this.m) >= 0 && t.subTo(this.m, t)
		}
		function V(t, e) {
			t.squareTo(e),
			this.reduce(e)
		}
		function N(t, e, i) {
			t.multiplyTo(e, i),
			this.reduce(i)
		}
		function $() {
			return 0 == (this.t > 0 ? 1 & this[0] : this.s)
		}
		function H(t, e) {
			if (t > 4294967295 || t < 1) return i.ONE;
			var o = n(),
			s = n(),
			r = e.convert(this),
			a = b(t) - 1;
			for (r.copyTo(o); --a >= 0;) if (e.sqrTo(o, s), (t & 1 << a) > 0) e.mulTo(s, r, o);
			else {
				var h = o;
				o = s,
				s = h
			}
			return e.revert(o)
		}
		function j(t, e) {
			var i;
			return i = t < 256 || e.isEven() ? new J(e) : new q(e),
			this.exp(t, i)
		}
		function F() {
			var t = n();
			return this.copyTo(t),
			t
		}
		function Q() {
			if (this.s < 0) {
				if (1 == this.t) return this[0] - this.DV;
				if (0 == this.t) return - 1
			} else {
				if (1 == this.t) return this[0];
				if (0 == this.t) return 0
			}
			return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
		}
		function W() {
			return 0 == this.t ? this.s: this[0] << 24 >> 24
		}
		function z() {
			return 0 == this.t ? this.s: this[0] << 16 >> 16
		}
		function G(t) {
			return Math.floor(Math.LN2 * this.DB / Math.log(t))
		}
		function Z() {
			return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
		}
		function Y(t) {
			if (null == t && (t = 10), 0 == this.signum() || t < 2 || t > 36) return "0";
			var e = this.chunkSize(t),
			i = Math.pow(t, e),
			o = c(i),
			s = n(),
			r = n(),
			a = "";
			for (this.divRemTo(o, s, r); s.signum() > 0;) a = (i + r.intValue()).toString(t).substr(1) + a,
			s.divRemTo(o, s, r);
			return r.intValue().toString(t) + a
		}
		function X(t, e) {
			this.fromInt(0),
			null == e && (e = 10);
			for (var n = this.chunkSize(e), o = Math.pow(e, n), s = !1, r = 0, a = 0, l = 0; l < t.length; ++l) {
				var u = h(t, l);
				u < 0 ? "-" == t.charAt(l) && 0 == this.signum() && (s = !0) : (a = e * a + u, ++r >= n && (this.dMultiply(o), this.dAddOffset(a, 0), r = 0, a = 0))
			}
			r > 0 && (this.dMultiply(Math.pow(e, r)), this.dAddOffset(a, 0)),
			s && i.ZERO.subTo(this, this)
		}
		function tt(t, e, n) {
			if ("number" == typeof e) if (t < 2) this.fromInt(1);
			else for (this.fromNumber(t, n), this.testBit(t - 1) || this.bitwiseTo(i.ONE.shiftLeft(t - 1), ht, this), this.isEven() && this.dAddOffset(1, 0); ! this.isProbablePrime(e);) this.dAddOffset(2, 0),
			this.bitLength() > t && this.subTo(i.ONE.shiftLeft(t - 1), this);
			else {
				var o = new Array,
				s = 7 & t;
				o.length = (t >> 3) + 1,
				e.nextBytes(o),
				s > 0 ? o[0] &= (1 << s) - 1 : o[0] = 0,
				this.fromString(o, 256)
			}
		}
		function et() {
			var t = this.t,
			e = new Array;
			e[0] = this.s;
			var i, n = this.DB - t * this.DB % 8,
			o = 0;
			if (t-->0) for (n < this.DB && (i = this[t] >> n) != (this.s & this.DM) >> n && (e[o++] = i | this.s << this.DB - n); t >= 0;) n < 8 ? (i = (this[t] & (1 << n) - 1) << 8 - n, i |= this[--t] >> (n += this.DB - 8)) : (i = this[t] >> (n -= 8) & 255, n <= 0 && (n += this.DB, --t)),
			0 != (128 & i) && (i |= -256),
			0 == o && (128 & this.s) != (128 & i) && ++o,
			(o > 0 || i != this.s) && (e[o++] = i);
			return e
		}
		function it(t) {
			return 0 == this.compareTo(t)
		}
		function nt(t) {
			return this.compareTo(t) < 0 ? this: t
		}
		function ot(t) {
			return this.compareTo(t) > 0 ? this: t
		}
		function st(t, e, i) {
			var n, o, s = Math.min(t.t, this.t);
			for (n = 0; n < s; ++n) i[n] = e(this[n], t[n]);
			if (t.t < this.t) {
				for (o = t.s & this.DM, n = s; n < this.t; ++n) i[n] = e(this[n], o);
				i.t = this.t
			} else {
				for (o = this.s & this.DM, n = s; n < t.t; ++n) i[n] = e(o, t[n]);
				i.t = t.t
			}
			i.s = e(this.s, t.s),
			i.clamp()
		}
		function rt(t, e) {
			return t & e
		}
		function at(t) {
			var e = n();
			return this.bitwiseTo(t, rt, e),
			e
		}
		function ht(t, e) {
			return t | e
		}
		function lt(t) {
			var e = n();
			return this.bitwiseTo(t, ht, e),
			e
		}
		function ut(t, e) {
			return t ^ e
		}
		function ct(t) {
			var e = n();
			return this.bitwiseTo(t, ut, e),
			e
		}
		function pt(t, e) {
			return t & ~e
		}
		function ft(t) {
			var e = n();
			return this.bitwiseTo(t, pt, e),
			e
		}
		function dt() {
			for (var t = n(), e = 0; e < this.t; ++e) t[e] = this.DM & ~this[e];
			return t.t = this.t,
			t.s = ~this.s,
			t
		}
		function gt(t) {
			var e = n();
			return t < 0 ? this.rShiftTo( - t, e) : this.lShiftTo(t, e),
			e
		}
		function mt(t) {
			var e = n();
			return t < 0 ? this.lShiftTo( - t, e) : this.rShiftTo(t, e),
			e
		}
		function vt(t) {
			if (0 == t) return - 1;
			var e = 0;
			return 0 == (65535 & t) && (t >>= 16, e += 16),
			0 == (255 & t) && (t >>= 8, e += 8),
			0 == (15 & t) && (t >>= 4, e += 4),
			0 == (3 & t) && (t >>= 2, e += 2),
			0 == (1 & t) && ++e,
			e
		}
		function yt() {
			for (var t = 0; t < this.t; ++t) if (0 != this[t]) return t * this.DB + vt(this[t]);
			return this.s < 0 ? this.t * this.DB: -1
		}
		function bt(t) {
			for (var e = 0; 0 != t;) t &= t - 1,
			++e;
			return e
		}
		function wt() {
			for (var t = 0,
			e = this.s & this.DM,
			i = 0; i < this.t; ++i) t += bt(this[i] ^ e);
			return t
		}
		function xt(t) {
			var e = Math.floor(t / this.DB);
			return e >= this.t ? 0 != this.s: 0 != (this[e] & 1 << t % this.DB)
		}
		function Tt(t, e) {
			var n = i.ONE.shiftLeft(t);
			return this.bitwiseTo(n, e, n),
			n
		}
		function St(t) {
			return this.changeBit(t, ht)
		}
		function _t(t) {
			return this.changeBit(t, pt)
		}
		function Rt(t) {
			return this.changeBit(t, ut)
		}
		function Et(t, e) {
			for (var i = 0,
			n = 0,
			o = Math.min(t.t, this.t); i < o;) n += this[i] + t[i],
			e[i++] = n & this.DM,
			n >>= this.DB;
			if (t.t < this.t) {
				for (n += t.s; i < this.t;) n += this[i],
				e[i++] = n & this.DM,
				n >>= this.DB;
				n += this.s
			} else {
				for (n += this.s; i < t.t;) n += t[i],
				e[i++] = n & this.DM,
				n >>= this.DB;
				n += t.s
			}
			e.s = n < 0 ? -1 : 0,
			n > 0 ? e[i++] = n: n < -1 && (e[i++] = this.DV + n),
			e.t = i,
			e.clamp()
		}
		function Dt(t) {
			var e = n();
			return this.addTo(t, e),
			e
		}
		function Lt(t) {
			var e = n();
			return this.subTo(t, e),
			e
		}
		function It(t) {
			var e = n();
			return this.multiplyTo(t, e),
			e
		}
		function Jt() {
			var t = n();
			return this.squareTo(t),
			t
		}
		function Ut(t) {
			var e = n();
			return this.divRemTo(t, e, null),
			e
		}
		function Bt(t) {
			var e = n();
			return this.divRemTo(t, null, e),
			e
		}
		function Ct(t) {
			var e = n(),
			i = n();
			return this.divRemTo(t, e, i),
			new Array(e, i)
		}
		function At(t) {
			this[this.t] = this.am(0, t - 1, this, 0, 0, this.t),
			++this.t,
			this.clamp()
		}
		function Pt(t, e) {
			if (0 != t) {
				for (; this.t <= e;) this[this.t++] = 0;
				for (this[e] += t; this[e] >= this.DV;) this[e] -= this.DV,
				++e >= this.t && (this[this.t++] = 0),
				++this[e]
			}
		}
		function Ot() {}
		function qt(t) {
			return t
		}
		function Kt(t, e, i) {
			t.multiplyTo(e, i)
		}
		function kt(t, e) {
			t.squareTo(e)
		}
		function Mt(t) {
			return this.exp(t, new Ot)
		}
		function Vt(t, e, i) {
			var n = Math.min(this.t + t.t, e);
			for (i.s = 0, i.t = n; n > 0;) i[--n] = 0;
			var o;
			for (o = i.t - this.t; n < o; ++n) i[n + this.t] = this.am(0, t[n], i, n, 0, this.t);
			for (o = Math.min(t.t, e); n < o; ++n) this.am(0, t[n], i, n, 0, e - n);
			i.clamp()
		}
		function Nt(t, e, i) {--e;
			var n = i.t = this.t + t.t - e;
			for (i.s = 0; --n >= 0;) i[n] = 0;
			for (n = Math.max(e - this.t, 0); n < t.t; ++n) i[this.t + n - e] = this.am(e - n, t[n], i, 0, 0, this.t + n - e);
			i.clamp(),
			i.drShiftTo(1, i)
		}
		function $t(t) {
			this.r2 = n(),
			this.q3 = n(),
			i.ONE.dlShiftTo(2 * t.t, this.r2),
			this.mu = this.r2.divide(t),
			this.m = t
		}
		function Ht(t) {
			if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
			if (t.compareTo(this.m) < 0) return t;
			var e = n();
			return t.copyTo(e),
			this.reduce(e),
			e
		}
		function jt(t) {
			return t
		}
		function Ft(t) {
			for (t.drShiftTo(this.m.t - 1, this.r2), t.t > this.m.t + 1 && (t.t = this.m.t + 1, t.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0;) t.dAddOffset(1, this.m.t + 1);
			for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0;) t.subTo(this.m, t)
		}
		function Qt(t, e) {
			t.squareTo(e),
			this.reduce(e)
		}
		function Wt(t, e, i) {
			t.multiplyTo(e, i),
			this.reduce(i)
		}
		function zt(t, e) {
			var i, o, s = t.bitLength(),
			r = c(1);
			if (s <= 0) return r;
			i = s < 18 ? 1 : s < 48 ? 3 : s < 144 ? 4 : s < 768 ? 5 : 6,
			o = s < 8 ? new J(e) : e.isEven() ? new $t(e) : new q(e);
			var a = new Array,
			h = 3,
			l = i - 1,
			u = (1 << i) - 1;
			if (a[1] = o.convert(this), i > 1) {
				var p = n();
				for (o.sqrTo(a[1], p); h <= u;) a[h] = n(),
				o.mulTo(p, a[h - 2], a[h]),
				h += 2
			}
			var f, d, g = t.t - 1,
			m = !0,
			v = n();
			for (s = b(t[g]) - 1; g >= 0;) {
				for (s >= l ? f = t[g] >> s - l & u: (f = (t[g] & (1 << s + 1) - 1) << l - s, g > 0 && (f |= t[g - 1] >> this.DB + s - l)), h = i; 0 == (1 & f);) f >>= 1,
				--h;
				if ((s -= h) < 0 && (s += this.DB, --g), m) a[f].copyTo(r),
				m = !1;
				else {
					for (; h > 1;) o.sqrTo(r, v),
					o.sqrTo(v, r),
					h -= 2;
					h > 0 ? o.sqrTo(r, v) : (d = r, r = v, v = d),
					o.mulTo(v, a[f], r)
				}
				for (; g >= 0 && 0 == (t[g] & 1 << s);) o.sqrTo(r, v),
				d = r,
				r = v,
				v = d,
				--s < 0 && (s = this.DB - 1, --g)
			}
			return o.revert(r)
		}
		function Gt(t) {
			var e = this.s < 0 ? this.negate() : this.clone(),
			i = t.s < 0 ? t.negate() : t.clone();
			if (e.compareTo(i) < 0) {
				var n = e;
				e = i,
				i = n
			}
			var o = e.getLowestSetBit(),
			s = i.getLowestSetBit();
			if (s < 0) return e;
			for (o < s && (s = o), s > 0 && (e.rShiftTo(s, e), i.rShiftTo(s, i)); e.signum() > 0;)(o = e.getLowestSetBit()) > 0 && e.rShiftTo(o, e),
			(o = i.getLowestSetBit()) > 0 && i.rShiftTo(o, i),
			e.compareTo(i) >= 0 ? (e.subTo(i, e), e.rShiftTo(1, e)) : (i.subTo(e, i), i.rShiftTo(1, i));
			return s > 0 && i.lShiftTo(s, i),
			i
		}
		function Zt(t) {
			if (t <= 0) return 0;
			var e = this.DV % t,
			i = this.s < 0 ? t - 1 : 0;
			if (this.t > 0) if (0 == e) i = this[0] % t;
			else for (var n = this.t - 1; n >= 0; --n) i = (e * i + this[n]) % t;
			return i
		}
		function Yt(t) {
			var e = t.isEven();
			if (this.isEven() && e || 0 == t.signum()) return i.ZERO;
			for (var n = t.clone(), o = this.clone(), s = c(1), r = c(0), a = c(0), h = c(1); 0 != n.signum();) {
				for (; n.isEven();) n.rShiftTo(1, n),
				e ? (s.isEven() && r.isEven() || (s.addTo(this, s), r.subTo(t, r)), s.rShiftTo(1, s)) : r.isEven() || r.subTo(t, r),
				r.rShiftTo(1, r);
				for (; o.isEven();) o.rShiftTo(1, o),
				e ? (a.isEven() && h.isEven() || (a.addTo(this, a), h.subTo(t, h)), a.rShiftTo(1, a)) : h.isEven() || h.subTo(t, h),
				h.rShiftTo(1, h);
				n.compareTo(o) >= 0 ? (n.subTo(o, n), e && s.subTo(a, s), r.subTo(h, r)) : (o.subTo(n, o), e && a.subTo(s, a), h.subTo(r, h))
			}
			return 0 != o.compareTo(i.ONE) ? i.ZERO: h.compareTo(t) >= 0 ? h.subtract(t) : h.signum() < 0 ? (h.addTo(t, h), h.signum() < 0 ? h.add(t) : h) : h
		}
		function Xt(t) {
			var e, i = this.abs();
			if (1 == i.t && i[0] <= Je[Je.length - 1]) {
				for (e = 0; e < Je.length; ++e) if (i[0] == Je[e]) return ! 0;
				return ! 1
			}
			if (i.isEven()) return ! 1;
			for (e = 1; e < Je.length;) {
				for (var n = Je[e], o = e + 1; o < Je.length && n < Ue;) n *= Je[o++];
				for (n = i.modInt(n); e < o;) if (n % Je[e++] == 0) return ! 1
			}
			return i.millerRabin(t)
		}
		function te(t) {
			var e = this.subtract(i.ONE),
			o = e.getLowestSetBit();
			if (o <= 0) return ! 1;
			var s = e.shiftRight(o);
			t = t + 1 >> 1,
			t > Je.length && (t = Je.length);
			for (var r = n(), a = 0; a < t; ++a) {
				r.fromInt(Je[Math.floor(Math.random() * Je.length)]);
				var h = r.modPow(s, this);
				if (0 != h.compareTo(i.ONE) && 0 != h.compareTo(e)) {
					for (var l = 1; l++<o && 0 != h.compareTo(e);) if (h = h.modPowInt(2, this), 0 == h.compareTo(i.ONE)) return ! 1;
					if (0 != h.compareTo(e)) return ! 1
				}
			}
			return ! 0
		}
		function ee() {
			this.i = 0,
			this.j = 0,
			this.S = new Array
		}
		function ie(t) {
			var e, i, n;
			for (e = 0; e < 256; ++e) this.S[e] = e;
			for (i = 0, e = 0; e < 256; ++e) i = i + this.S[e] + t[e % t.length] & 255,
			n = this.S[e],
			this.S[e] = this.S[i],
			this.S[i] = n;
			this.i = 0,
			this.j = 0
		}
		function ne() {
			var t;
			return this.i = this.i + 1 & 255,
			this.j = this.j + this.S[this.i] & 255,
			t = this.S[this.i],
			this.S[this.i] = this.S[this.j],
			this.S[this.j] = t,
			this.S[t + this.S[this.i] & 255]
		}
		function oe() {
			return new ee
		}
		function se() {
			if (null == Be) {
				for (Be = oe(); Ae < Pe;) {
					var t = Math.floor(65536 * Math.random());
					Ce[Ae++] = 255 & t
				}
				for (Be.init(Ce), Ae = 0; Ae < Ce.length; ++Ae) Ce[Ae] = 0;
				Ae = 0
			}
			return Be.next()
		}
		function re(t) {
			var e;
			for (e = 0; e < t.length; ++e) t[e] = se()
		}
		function ae() {}
		function he(t, e) {
			return new i(t, e)
		}
		function le(t, e) {
			if (e < t.length + 11) return console.error("Message too long for RSA"),
			null;
			for (var n = new Array,
			o = t.length - 1; o >= 0 && e > 0;) {
				var s = t.charCodeAt(o--);
				s < 128 ? n[--e] = s: s > 127 && s < 2048 ? (n[--e] = 63 & s | 128, n[--e] = s >> 6 | 192) : (n[--e] = 63 & s | 128, n[--e] = s >> 6 & 63 | 128, n[--e] = s >> 12 | 224)
			}
			n[--e] = 0;
			for (var r = new ae,
			a = new Array; e > 2;) {
				for (a[0] = 0; 0 == a[0];) r.nextBytes(a);
				n[--e] = a[0]
			}
			return n[--e] = 2,
			n[--e] = 0,
			new i(n)
		}
		function ue() {
			this.n = null,
			this.e = 0,
			this.d = null,
			this.p = null,
			this.q = null,
			this.dmp1 = null,
			this.dmq1 = null,
			this.coeff = null
		}
		function ce(t, e) {
			null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = he(t, 16), this.e = parseInt(e, 16)) : console.error("Invalid RSA public key")
		}
		function pe(t) {
			return t.modPowInt(this.e, this.n)
		}
		function fe(t) {
			var e = le(t, this.n.bitLength() + 7 >> 3);
			if (null == e) return null;
			var i = this.doPublic(e);
			if (null == i) return null;
			var n = i.toString(16);
			return 0 == (1 & n.length) ? n: "0" + n
		}
		function de(t, e) {
			for (var i = t.toByteArray(), n = 0; n < i.length && 0 == i[n];)++n;
			if (i.length - n != e - 1 || 2 != i[n]) return null;
			for (++n; 0 != i[n];) if (++n >= i.length) return null;
			for (var o = ""; ++n < i.length;) {
				var s = 255 & i[n];
				s < 128 ? o += String.fromCharCode(s) : s > 191 && s < 224 ? (o += String.fromCharCode((31 & s) << 6 | 63 & i[n + 1]), ++n) : (o += String.fromCharCode((15 & s) << 12 | (63 & i[n + 1]) << 6 | 63 & i[n + 2]), n += 2)
			}
			return o
		}
		function ge(t, e, i) {
			null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = he(t, 16), this.e = parseInt(e, 16), this.d = he(i, 16)) : console.error("Invalid RSA private key")
		}
		function me(t, e, i, n, o, s, r, a) {
			null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = he(t, 16), this.e = parseInt(e, 16), this.d = he(i, 16), this.p = he(n, 16), this.q = he(o, 16), this.dmp1 = he(s, 16), this.dmq1 = he(r, 16), this.coeff = he(a, 16)) : console.error("Invalid RSA private key")
		}
		function ve(t, e) {
			var n = new ae,
			o = t >> 1;
			this.e = parseInt(e, 16);
			for (var s = new i(e, 16);;) {
				for (; this.p = new i(t - o, 1, n), 0 != this.p.subtract(i.ONE).gcd(s).compareTo(i.ONE) || !this.p.isProbablePrime(10););
				for (; this.q = new i(o, 1, n), 0 != this.q.subtract(i.ONE).gcd(s).compareTo(i.ONE) || !this.q.isProbablePrime(10););
				if (this.p.compareTo(this.q) <= 0) {
					var r = this.p;
					this.p = this.q,
					this.q = r
				}
				var a = this.p.subtract(i.ONE),
				h = this.q.subtract(i.ONE),
				l = a.multiply(h);
				if (0 == l.gcd(s).compareTo(i.ONE)) {
					this.n = this.p.multiply(this.q),
					this.d = s.modInverse(l),
					this.dmp1 = this.d.mod(a),
					this.dmq1 = this.d.mod(h),
					this.coeff = this.q.modInverse(this.p);
					break
				}
			}
		}
		function ye(t) {
			if (null == this.p || null == this.q) return t.modPow(this.d, this.n);
			for (var e = t.mod(this.p).modPow(this.dmp1, this.p), i = t.mod(this.q).modPow(this.dmq1, this.q); e.compareTo(i) < 0;) e = e.add(this.p);
			return e.subtract(i).multiply(this.coeff).mod(this.p).multiply(this.q).add(i)
		}
		function be(t) {
			var e = he(t, 16),
			i = this.doPrivate(e);
			return null == i ? null: de(i, this.n.bitLength() + 7 >> 3)
		}
		function we(t) {
			var e, i, n = "";
			for (e = 0; e + 3 <= t.length; e += 3) i = parseInt(t.substring(e, e + 3), 16),
			n += ke.charAt(i >> 6) + ke.charAt(63 & i);
			for (e + 1 == t.length ? (i = parseInt(t.substring(e, e + 1), 16), n += ke.charAt(i << 2)) : e + 2 == t.length && (i = parseInt(t.substring(e, e + 2), 16), n += ke.charAt(i >> 2) + ke.charAt((3 & i) << 4)); (3 & n.length) > 0;) n += Me;
			return n
		}
		function xe(t) {
			var e, i, n = "",
			o = 0;
			for (e = 0; e < t.length && t.charAt(e) != Me; ++e) v = ke.indexOf(t.charAt(e)),
			v < 0 || (0 == o ? (n += a(v >> 2), i = 3 & v, o = 1) : 1 == o ? (n += a(i << 2 | v >> 4), i = 15 & v, o = 2) : 2 == o ? (n += a(i), n += a(v >> 2), i = 3 & v, o = 3) : (n += a(i << 2 | v >> 4), n += a(15 & v), o = 0));
			return 1 == o && (n += a(i << 2)),
			n
		}
		var Te, Se = 0xdeadbeefcafe,
		_e = 15715070 == (16777215 & Se);
		_e && "Microsoft Internet Explorer" == navigator.appName ? (i.prototype.am = s, Te = 30) : _e && "Netscape" != navigator.appName ? (i.prototype.am = o, Te = 26) : (i.prototype.am = r, Te = 28),
		i.prototype.DB = Te,
		i.prototype.DM = (1 << Te) - 1,
		i.prototype.DV = 1 << Te;
		var Re = 52;
		i.prototype.FV = Math.pow(2, Re),
		i.prototype.F1 = Re - Te,
		i.prototype.F2 = 2 * Te - Re;
		var Ee, De, Le = "0123456789abcdefghijklmnopqrstuvwxyz",
		Ie = new Array;
		for (Ee = "0".charCodeAt(0), De = 0; De <= 9; ++De) Ie[Ee++] = De;
		for (Ee = "a".charCodeAt(0), De = 10; De < 36; ++De) Ie[Ee++] = De;
		for (Ee = "A".charCodeAt(0), De = 10; De < 36; ++De) Ie[Ee++] = De;
		J.prototype.convert = U,
		J.prototype.revert = B,
		J.prototype.reduce = C,
		J.prototype.mulTo = A,
		J.prototype.sqrTo = P,
		q.prototype.convert = K,
		q.prototype.revert = k,
		q.prototype.reduce = M,
		q.prototype.mulTo = N,
		q.prototype.sqrTo = V,
		i.prototype.copyTo = l,
		i.prototype.fromInt = u,
		i.prototype.fromString = p,
		i.prototype.clamp = f,
		i.prototype.dlShiftTo = x,
		i.prototype.drShiftTo = T,
		i.prototype.lShiftTo = S,
		i.prototype.rShiftTo = _,
		i.prototype.subTo = R,
		i.prototype.multiplyTo = E,
		i.prototype.squareTo = D,
		i.prototype.divRemTo = L,
		i.prototype.invDigit = O,
		i.prototype.isEven = $,
		i.prototype.exp = H,
		i.prototype.toString = d,
		i.prototype.negate = g,
		i.prototype.abs = m,
		i.prototype.compareTo = y,
		i.prototype.bitLength = w,
		i.prototype.mod = I,
		i.prototype.modPowInt = j,
		i.ZERO = c(0),
		i.ONE = c(1),
		Ot.prototype.convert = qt,
		Ot.prototype.revert = qt,
		Ot.prototype.mulTo = Kt,
		Ot.prototype.sqrTo = kt,
		$t.prototype.convert = Ht,
		$t.prototype.revert = jt,
		$t.prototype.reduce = Ft,
		$t.prototype.mulTo = Wt,
		$t.prototype.sqrTo = Qt;
		var Je = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997],
		Ue = (1 << 26) / Je[Je.length - 1];
		i.prototype.chunkSize = G,
		i.prototype.toRadix = Y,
		i.prototype.fromRadix = X,
		i.prototype.fromNumber = tt,
		i.prototype.bitwiseTo = st,
		i.prototype.changeBit = Tt,
		i.prototype.addTo = Et,
		i.prototype.dMultiply = At,
		i.prototype.dAddOffset = Pt,
		i.prototype.multiplyLowerTo = Vt,
		i.prototype.multiplyUpperTo = Nt,
		i.prototype.modInt = Zt,
		i.prototype.millerRabin = te,
		i.prototype.clone = F,
		i.prototype.intValue = Q,
		i.prototype.byteValue = W,
		i.prototype.shortValue = z,
		i.prototype.signum = Z,
		i.prototype.toByteArray = et,
		i.prototype.equals = it,
		i.prototype.min = nt,
		i.prototype.max = ot,
		i.prototype.and = at,
		i.prototype.or = lt,
		i.prototype.xor = ct,
		i.prototype.andNot = ft,
		i.prototype.not = dt,
		i.prototype.shiftLeft = gt,
		i.prototype.shiftRight = mt,
		i.prototype.getLowestSetBit = yt,
		i.prototype.bitCount = wt,
		i.prototype.testBit = xt,
		i.prototype.setBit = St,
		i.prototype.clearBit = _t,
		i.prototype.flipBit = Rt,
		i.prototype.add = Dt,
		i.prototype.subtract = Lt,
		i.prototype.multiply = It,
		i.prototype.divide = Ut,
		i.prototype.remainder = Bt,
		i.prototype.divideAndRemainder = Ct,
		i.prototype.modPow = zt,
		i.prototype.modInverse = Yt,
		i.prototype.pow = Mt,
		i.prototype.gcd = Gt,
		i.prototype.isProbablePrime = Xt,
		i.prototype.square = Jt,
		ee.prototype.init = ie,
		ee.prototype.next = ne;
		var Be, Ce, Ae, Pe = 256;
		if (null == Ce) {
			Ce = new Array,
			Ae = 0;
			var Oe;
			if (window.crypto && window.crypto.getRandomValues) {
				var qe = new Uint32Array(256);
				for (window.crypto.getRandomValues(qe), Oe = 0; Oe < qe.length; ++Oe) Ce[Ae++] = 255 & qe[Oe]
			}
			var Ke = function(t) {
				if (this.count = this.count || 0, this.count >= 256 || Ae >= Pe) return void(window.removeEventListener ? window.removeEventListener("mousemove", Ke, !1) : window.detachEvent && window.detachEvent("onmousemove", Ke));
				try {
					var e = t.x + t.y;
					Ce[Ae++] = 255 & e,
					this.count += 1
				} catch(t) {}
			};
			window.addEventListener ? window.addEventListener("mousemove", Ke, !1) : window.attachEvent && window.attachEvent("onmousemove", Ke)
		}
		ae.prototype.nextBytes = re,
		ue.prototype.doPublic = pe,
		ue.prototype.setPublic = ce,
		ue.prototype.encrypt = fe,
		ue.prototype.doPrivate = ye,
		ue.prototype.setPrivate = ge,
		ue.prototype.setPrivateEx = me,
		ue.prototype.generate = ve,
		ue.prototype.decrypt = be,
		function() {
			var t = function(t, e, o) {
				var s = new ae,
				r = t >> 1;
				this.e = parseInt(e, 16);
				var a = new i(e, 16),
				h = this,
				l = function() {
					var e = function() {
						if (h.p.compareTo(h.q) <= 0) {
							var t = h.p;
							h.p = h.q,
							h.q = t
						}
						var e = h.p.subtract(i.ONE),
						n = h.q.subtract(i.ONE),
						s = e.multiply(n);
						0 == s.gcd(a).compareTo(i.ONE) ? (h.n = h.p.multiply(h.q), h.d = a.modInverse(s), h.dmp1 = h.d.mod(e), h.dmq1 = h.d.mod(n), h.coeff = h.q.modInverse(h.p), setTimeout(function() {
							o()
						},
						0)) : setTimeout(l, 0)
					},
					u = function() {
						h.q = n(),
						h.q.fromNumberAsync(r, 1, s,
						function() {
							h.q.subtract(i.ONE).gcda(a,
							function(t) {
								0 == t.compareTo(i.ONE) && h.q.isProbablePrime(10) ? setTimeout(e, 0) : setTimeout(u, 0)
							})
						})
					},
					c = function() {
						h.p = n(),
						h.p.fromNumberAsync(t - r, 1, s,
						function() {
							h.p.subtract(i.ONE).gcda(a,
							function(t) {
								0 == t.compareTo(i.ONE) && h.p.isProbablePrime(10) ? setTimeout(u, 0) : setTimeout(c, 0)
							})
						})
					};
					setTimeout(c, 0)
				};
				setTimeout(l, 0)
			};
			ue.prototype.generateAsync = t;
			var e = function(t, e) {
				var i = this.s < 0 ? this.negate() : this.clone(),
				n = t.s < 0 ? t.negate() : t.clone();
				if (i.compareTo(n) < 0) {
					var o = i;
					i = n,
					n = o
				}
				var s = i.getLowestSetBit(),
				r = n.getLowestSetBit();
				if (r < 0) return void e(i);
				s < r && (r = s),
				r > 0 && (i.rShiftTo(r, i), n.rShiftTo(r, n));
				var a = function() { (s = i.getLowestSetBit()) > 0 && i.rShiftTo(s, i),
					(s = n.getLowestSetBit()) > 0 && n.rShiftTo(s, n),
					i.compareTo(n) >= 0 ? (i.subTo(n, i), i.rShiftTo(1, i)) : (n.subTo(i, n), n.rShiftTo(1, n)),
					i.signum() > 0 ? setTimeout(a, 0) : (r > 0 && n.lShiftTo(r, n), setTimeout(function() {
						e(n)
					},
					0))
				};
				setTimeout(a, 10)
			};
			i.prototype.gcda = e;
			var o = function(t, e, n, o) {
				if ("number" == typeof e) if (t < 2) this.fromInt(1);
				else {
					this.fromNumber(t, n),
					this.testBit(t - 1) || this.bitwiseTo(i.ONE.shiftLeft(t - 1), ht, this),
					this.isEven() && this.dAddOffset(1, 0);
					var s = this,
					r = function() {
						s.dAddOffset(2, 0),
						s.bitLength() > t && s.subTo(i.ONE.shiftLeft(t - 1), s),
						s.isProbablePrime(e) ? setTimeout(function() {
							o()
						},
						0) : setTimeout(r, 0)
					};
					setTimeout(r, 0)
				} else {
					var a = new Array,
					h = 7 & t;
					a.length = (t >> 3) + 1,
					e.nextBytes(a),
					h > 0 ? a[0] &= (1 << h) - 1 : a[0] = 0,
					this.fromString(a, 256)
				}
			};
			i.prototype.fromNumberAsync = o
		} ();
		var ke = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
		Me = "=",
		Ve = Ve || {};
		Ve.env = Ve.env || {};
		var Ne = Ve,
		$e = Object.prototype,
		He = "[object Function]",
		je = ["toString", "valueOf"];
		Ve.env.parseUA = function(t) {
			var e, i = function(t) {
				var e = 0;
				return parseFloat(t.replace(/\./g,
				function() {
					return 1 == e++?"": "."
				}))
			},
			n = navigator,
			o = {
				ie: 0,
				opera: 0,
				gecko: 0,
				webkit: 0,
				chrome: 0,
				mobile: null,
				air: 0,
				ipad: 0,
				iphone: 0,
				ipod: 0,
				ios: null,
				android: 0,
				webos: 0,
				caja: n && n.cajaVersion,
				secure: !1,
				os: null
			},
			s = t || navigator && navigator.userAgent,
			r = window && window.location,
			a = r && r.href;
			return o.secure = a && 0 === a.toLowerCase().indexOf("https"),
			s && (/windows|win32/i.test(s) ? o.os = "windows": /macintosh/i.test(s) ? o.os = "macintosh": /rhino/i.test(s) && (o.os = "rhino"), /KHTML/.test(s) && (o.webkit = 1), e = s.match(/AppleWebKit\/([^\s]*)/), e && e[1] && (o.webkit = i(e[1]), / Mobile\//.test(s) ? (o.mobile = "Apple", e = s.match(/OS ([^\s]*)/), e && e[1] && (e = i(e[1].replace("_", "."))), o.ios = e, o.ipad = o.ipod = o.iphone = 0, e = s.match(/iPad|iPod|iPhone/), e && e[0] && (o[e[0].toLowerCase()] = o.ios)) : (e = s.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/), e && (o.mobile = e[0]), /webOS/.test(s) && (o.mobile = "WebOS", e = s.match(/webOS\/([^\s]*);/), e && e[1] && (o.webos = i(e[1]))), / Android/.test(s) && (o.mobile = "Android", e = s.match(/Android ([^\s]*);/), e && e[1] && (o.android = i(e[1])))), e = s.match(/Chrome\/([^\s]*)/), e && e[1] ? o.chrome = i(e[1]) : (e = s.match(/AdobeAIR\/([^\s]*)/), e && (o.air = e[0]))), o.webkit || (e = s.match(/Opera[\s\/]([^\s]*)/), e && e[1] ? (o.opera = i(e[1]), e = s.match(/Version\/([^\s]*)/), e && e[1] && (o.opera = i(e[1])), e = s.match(/Opera Mini[^;]*/), e && (o.mobile = e[0])) : (e = s.match(/MSIE\s([^;]*)/), e && e[1] ? o.ie = i(e[1]) : (e = s.match(/Gecko\/([^\s]*)/), e && (o.gecko = 1, e = s.match(/rv:([^\s\)]*)/), e && e[1] && (o.gecko = i(e[1]))))))),
			o
		},
		Ve.env.ua = Ve.env.parseUA(),
		Ve.isFunction = function(t) {
			return "function" == typeof t || $e.toString.apply(t) === He
		},
		Ve._IEEnumFix = Ve.env.ua.ie ?
		function(t, e) {
			var i, n, o;
			for (i = 0; i < je.length; i += 1) n = je[i],
			o = e[n],
			Ne.isFunction(o) && o != $e[n] && (t[n] = o)
		}: function() {},
		Ve.extend = function(t, e, i) {
			if (!e || !t) throw new Error("extend failed, please check that all dependencies are included.");
			var n, o = function() {};
			if (o.prototype = e.prototype, t.prototype = new o, t.prototype.constructor = t, t.superclass = e.prototype, e.prototype.constructor == $e.constructor && (e.prototype.constructor = e), i) {
				for (n in i) Ne.hasOwnProperty(i, n) && (t.prototype[n] = i[n]);
				Ne._IEEnumFix(t.prototype, i)
			}
		},
		/**
	 * @fileOverview
	 * @name asn1-1.0.js
	 * @author Kenji Urushima kenji.urushima@gmail.com
	 * @version 1.0.2 (2013-May-30)
	 * @since 2.1
	 * @license <a href="http://kjur.github.io/jsrsasign/license/">MIT License</a>
	 */
		"undefined" != typeof KJUR && KJUR || (KJUR = {}),
		"undefined" != typeof KJUR.asn1 && KJUR.asn1 || (KJUR.asn1 = {}),
		KJUR.asn1.ASN1Util = new
		function() {
			this.integerToByteHex = function(t) {
				var e = t.toString(16);
				return e.length % 2 == 1 && (e = "0" + e),
				e
			},
			this.bigIntToMinTwosComplementsHex = function(t) {
				var e = t.toString(16);
				if ("-" != e.substr(0, 1)) e.length % 2 == 1 ? e = "0" + e: e.match(/^[0-7]/) || (e = "00" + e);
				else {
					var n = e.substr(1),
					o = n.length;
					o % 2 == 1 ? o += 1 : e.match(/^[0-7]/) || (o += 2);
					for (var s = "",
					r = 0; r < o; r++) s += "f";
					var a = new i(s, 16),
					h = a.xor(t).add(i.ONE);
					e = h.toString(16).replace(/^-/, "")
				}
				return e
			},
			this.getPEMStringFromHex = function(t, e) {
				var i = CryptoJS.enc.Hex.parse(t),
				n = CryptoJS.enc.Base64.stringify(i),
				o = n.replace(/(.{64})/g, "$1\r\n");
				return o = o.replace(/\r\n$/, ""),
				"-----BEGIN " + e + "-----\r\n" + o + "\r\n-----END " + e + "-----\r\n"
			}
		},
		KJUR.asn1.ASN1Object = function() {
			var t = "";
			this.getLengthHexFromValue = function() {
				if ("undefined" == typeof this.hV || null == this.hV) throw "this.hV is null or undefined.";
				if (this.hV.length % 2 == 1) throw "value hex must be even length: n=" + t.length + ",v=" + this.hV;
				var e = this.hV.length / 2,
				i = e.toString(16);
				if (i.length % 2 == 1 && (i = "0" + i), e < 128) return i;
				var n = i.length / 2;
				if (n > 15) throw "ASN.1 length too long to represent by 8x: n = " + e.toString(16);
				var o = 128 + n;
				return o.toString(16) + i
			},
			this.getEncodedHex = function() {
				return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(), this.hL = this.getLengthHexFromValue(), this.hTLV = this.hT + this.hL + this.hV, this.isModified = !1),
				this.hTLV
			},
			this.getValueHex = function() {
				return this.getEncodedHex(),
				this.hV
			},
			this.getFreshValueHex = function() {
				return ""
			}
		},
		KJUR.asn1.DERAbstractString = function(t) {
			KJUR.asn1.DERAbstractString.superclass.constructor.call(this);
			this.getString = function() {
				return this.s
			},
			this.setString = function(t) {
				this.hTLV = null,
				this.isModified = !0,
				this.s = t,
				this.hV = stohex(this.s)
			},
			this.setStringHex = function(t) {
				this.hTLV = null,
				this.isModified = !0,
				this.s = null,
				this.hV = t
			},
			this.getFreshValueHex = function() {
				return this.hV
			},
			"undefined" != typeof t && ("undefined" != typeof t.str ? this.setString(t.str) : "undefined" != typeof t.hex && this.setStringHex(t.hex))
		},
		Ve.extend(KJUR.asn1.DERAbstractString, KJUR.asn1.ASN1Object),
		KJUR.asn1.DERAbstractTime = function(t) {
			KJUR.asn1.DERAbstractTime.superclass.constructor.call(this);
			this.localDateToUTC = function(t) {
				utc = t.getTime() + 6e4 * t.getTimezoneOffset();
				var e = new Date(utc);
				return e
			},
			this.formatDate = function(t, e) {
				var i = this.zeroPadding,
				n = this.localDateToUTC(t),
				o = String(n.getFullYear());
				"utc" == e && (o = o.substr(2, 2));
				var s = i(String(n.getMonth() + 1), 2),
				r = i(String(n.getDate()), 2),
				a = i(String(n.getHours()), 2),
				h = i(String(n.getMinutes()), 2),
				l = i(String(n.getSeconds()), 2);
				return o + s + r + a + h + l + "Z"
			},
			this.zeroPadding = function(t, e) {
				return t.length >= e ? t: new Array(e - t.length + 1).join("0") + t
			},
			this.getString = function() {
				return this.s
			},
			this.setString = function(t) {
				this.hTLV = null,
				this.isModified = !0,
				this.s = t,
				this.hV = stohex(this.s)
			},
			this.setByDateValue = function(t, e, i, n, o, s) {
				var r = new Date(Date.UTC(t, e - 1, i, n, o, s, 0));
				this.setByDate(r)
			},
			this.getFreshValueHex = function() {
				return this.hV
			}
		},
		Ve.extend(KJUR.asn1.DERAbstractTime, KJUR.asn1.ASN1Object),
		KJUR.asn1.DERAbstractStructured = function(t) {
			KJUR.asn1.DERAbstractString.superclass.constructor.call(this);
			this.setByASN1ObjectArray = function(t) {
				this.hTLV = null,
				this.isModified = !0,
				this.asn1Array = t
			},
			this.appendASN1Object = function(t) {
				this.hTLV = null,
				this.isModified = !0,
				this.asn1Array.push(t)
			},
			this.asn1Array = new Array,
			"undefined" != typeof t && "undefined" != typeof t.array && (this.asn1Array = t.array)
		},
		Ve.extend(KJUR.asn1.DERAbstractStructured, KJUR.asn1.ASN1Object),
		KJUR.asn1.DERBoolean = function() {
			KJUR.asn1.DERBoolean.superclass.constructor.call(this),
			this.hT = "01",
			this.hTLV = "0101ff"
		},
		Ve.extend(KJUR.asn1.DERBoolean, KJUR.asn1.ASN1Object),
		KJUR.asn1.DERInteger = function(t) {
			KJUR.asn1.DERInteger.superclass.constructor.call(this),
			this.hT = "02",
			this.setByBigInteger = function(t) {
				this.hTLV = null,
				this.isModified = !0,
				this.hV = KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)
			},
			this.setByInteger = function(t) {
				var e = new i(String(t), 10);
				this.setByBigInteger(e)
			},
			this.setValueHex = function(t) {
				this.hV = t
			},
			this.getFreshValueHex = function() {
				return this.hV
			},
			"undefined" != typeof t && ("undefined" != typeof t.bigint ? this.setByBigInteger(t.bigint) : "undefined" != typeof t.int ? this.setByInteger(t.int) : "undefined" != typeof t.hex && this.setValueHex(t.hex))
		},
		Ve.extend(KJUR.asn1.DERInteger, KJUR.asn1.ASN1Object),
		KJUR.asn1.DERBitString = function(t) {
			KJUR.asn1.DERBitString.superclass.constructor.call(this),
			this.hT = "03",
			this.setHexValueIncludingUnusedBits = function(t) {
				this.hTLV = null,
				this.isModified = !0,
				this.hV = t
			},
			this.setUnusedBitsAndHexValue = function(t, e) {
				if (t < 0 || 7 < t) throw "unused bits shall be from 0 to 7: u = " + t;
				var i = "0" + t;
				this.hTLV = null,
				this.isModified = !0,
				this.hV = i + e
			},
			this.setByBinaryString = function(t) {
				t = t.replace(/0+$/, "");
				var e = 8 - t.length % 8;
				8 == e && (e = 0);
				for (var i = 0; i <= e; i++) t += "0";
				for (var n = "",
				i = 0; i < t.length - 1; i += 8) {
					var o = t.substr(i, 8),
					s = parseInt(o, 2).toString(16);
					1 == s.length && (s = "0" + s),
					n += s
				}
				this.hTLV = null,
				this.isModified = !0,
				this.hV = "0" + e + n
			},
			this.setByBooleanArray = function(t) {
				for (var e = "",
				i = 0; i < t.length; i++) e += 1 == t[i] ? "1": "0";
				this.setByBinaryString(e)
			},
			this.newFalseArray = function(t) {
				for (var e = new Array(t), i = 0; i < t; i++) e[i] = !1;
				return e
			},
			this.getFreshValueHex = function() {
				return this.hV
			},
			"undefined" != typeof t && ("undefined" != typeof t.hex ? this.setHexValueIncludingUnusedBits(t.hex) : "undefined" != typeof t.bin ? this.setByBinaryString(t.bin) : "undefined" != typeof t.array && this.setByBooleanArray(t.array))
		},
		Ve.extend(KJUR.asn1.DERBitString, KJUR.asn1.ASN1Object),
		KJUR.asn1.DEROctetString = function(t) {
			KJUR.asn1.DEROctetString.superclass.constructor.call(this, t),
			this.hT = "04"
		},
		Ve.extend(KJUR.asn1.DEROctetString, KJUR.asn1.DERAbstractString),
		KJUR.asn1.DERNull = function() {
			KJUR.asn1.DERNull.superclass.constructor.call(this),
			this.hT = "05",
			this.hTLV = "0500"
		},
		Ve.extend(KJUR.asn1.DERNull, KJUR.asn1.ASN1Object),
		KJUR.asn1.DERObjectIdentifier = function(t) {
			var e = function(t) {
				var e = t.toString(16);
				return 1 == e.length && (e = "0" + e),
				e
			},
			n = function(t) {
				var n = "",
				o = new i(t, 10),
				s = o.toString(2),
				r = 7 - s.length % 7;
				7 == r && (r = 0);
				for (var a = "",
				h = 0; h < r; h++) a += "0";
				s = a + s;
				for (var h = 0; h < s.length - 1; h += 7) {
					var l = s.substr(h, 7);
					h != s.length - 7 && (l = "1" + l),
					n += e(parseInt(l, 2))
				}
				return n
			};
			KJUR.asn1.DERObjectIdentifier.superclass.constructor.call(this),
			this.hT = "06",
			this.setValueHex = function(t) {
				this.hTLV = null,
				this.isModified = !0,
				this.s = null,
				this.hV = t
			},
			this.setValueOidString = function(t) {
				if (!t.match(/^[0-9.]+$/)) throw "malformed oid string: " + t;
				var i = "",
				o = t.split("."),
				s = 40 * parseInt(o[0]) + parseInt(o[1]);
				i += e(s),
				o.splice(0, 2);
				for (var r = 0; r < o.length; r++) i += n(o[r]);
				this.hTLV = null,
				this.isModified = !0,
				this.s = null,
				this.hV = i
			},
			this.setValueName = function(t) {
				if ("undefined" == typeof KJUR.asn1.x509.OID.name2oidList[t]) throw "DERObjectIdentifier oidName undefined: " + t;
				var e = KJUR.asn1.x509.OID.name2oidList[t];
				this.setValueOidString(e)
			},
			this.getFreshValueHex = function() {
				return this.hV
			},
			"undefined" != typeof t && ("undefined" != typeof t.oid ? this.setValueOidString(t.oid) : "undefined" != typeof t.hex ? this.setValueHex(t.hex) : "undefined" != typeof t.name && this.setValueName(t.name))
		},
		Ve.extend(KJUR.asn1.DERObjectIdentifier, KJUR.asn1.ASN1Object),
		KJUR.asn1.DERUTF8String = function(t) {
			KJUR.asn1.DERUTF8String.superclass.constructor.call(this, t),
			this.hT = "0c"
		},
		Ve.extend(KJUR.asn1.DERUTF8String, KJUR.asn1.DERAbstractString),
		KJUR.asn1.DERNumericString = function(t) {
			KJUR.asn1.DERNumericString.superclass.constructor.call(this, t),
			this.hT = "12"
		},
		Ve.extend(KJUR.asn1.DERNumericString, KJUR.asn1.DERAbstractString),
		KJUR.asn1.DERPrintableString = function(t) {
			KJUR.asn1.DERPrintableString.superclass.constructor.call(this, t),
			this.hT = "13"
		},
		Ve.extend(KJUR.asn1.DERPrintableString, KJUR.asn1.DERAbstractString),
		KJUR.asn1.DERTeletexString = function(t) {
			KJUR.asn1.DERTeletexString.superclass.constructor.call(this, t),
			this.hT = "14"
		},
		Ve.extend(KJUR.asn1.DERTeletexString, KJUR.asn1.DERAbstractString),
		KJUR.asn1.DERIA5String = function(t) {
			KJUR.asn1.DERIA5String.superclass.constructor.call(this, t),
			this.hT = "16"
		},
		Ve.extend(KJUR.asn1.DERIA5String, KJUR.asn1.DERAbstractString),
		KJUR.asn1.DERUTCTime = function(t) {
			KJUR.asn1.DERUTCTime.superclass.constructor.call(this, t),
			this.hT = "17",
			this.setByDate = function(t) {
				this.hTLV = null,
				this.isModified = !0,
				this.date = t,
				this.s = this.formatDate(this.date, "utc"),
				this.hV = stohex(this.s)
			},
			"undefined" != typeof t && ("undefined" != typeof t.str ? this.setString(t.str) : "undefined" != typeof t.hex ? this.setStringHex(t.hex) : "undefined" != typeof t.date && this.setByDate(t.date))
		},
		Ve.extend(KJUR.asn1.DERUTCTime, KJUR.asn1.DERAbstractTime),
		KJUR.asn1.DERGeneralizedTime = function(t) {
			KJUR.asn1.DERGeneralizedTime.superclass.constructor.call(this, t),
			this.hT = "18",
			this.setByDate = function(t) {
				this.hTLV = null,
				this.isModified = !0,
				this.date = t,
				this.s = this.formatDate(this.date, "gen"),
				this.hV = stohex(this.s)
			},
			"undefined" != typeof t && ("undefined" != typeof t.str ? this.setString(t.str) : "undefined" != typeof t.hex ? this.setStringHex(t.hex) : "undefined" != typeof t.date && this.setByDate(t.date))
		},
		Ve.extend(KJUR.asn1.DERGeneralizedTime, KJUR.asn1.DERAbstractTime),
		KJUR.asn1.DERSequence = function(t) {
			KJUR.asn1.DERSequence.superclass.constructor.call(this, t),
			this.hT = "30",
			this.getFreshValueHex = function() {
				for (var t = "",
				e = 0; e < this.asn1Array.length; e++) {
					var i = this.asn1Array[e];
					t += i.getEncodedHex()
				}
				return this.hV = t,
				this.hV
			}
		},
		Ve.extend(KJUR.asn1.DERSequence, KJUR.asn1.DERAbstractStructured),
		KJUR.asn1.DERSet = function(t) {
			KJUR.asn1.DERSet.superclass.constructor.call(this, t),
			this.hT = "31",
			this.getFreshValueHex = function() {
				for (var t = new Array,
				e = 0; e < this.asn1Array.length; e++) {
					var i = this.asn1Array[e];
					t.push(i.getEncodedHex())
				}
				return t.sort(),
				this.hV = t.join(""),
				this.hV
			}
		},
		Ve.extend(KJUR.asn1.DERSet, KJUR.asn1.DERAbstractStructured),
		KJUR.asn1.DERTaggedObject = function(t) {
			KJUR.asn1.DERTaggedObject.superclass.constructor.call(this),
			this.hT = "a0",
			this.hV = "",
			this.isExplicit = !0,
			this.asn1Object = null,
			this.setASN1Object = function(t, e, i) {
				this.hT = e,
				this.isExplicit = t,
				this.asn1Object = i,
				this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(), this.hTLV = null, this.isModified = !0) : (this.hV = null, this.hTLV = i.getEncodedHex(), this.hTLV = this.hTLV.replace(/^../, e), this.isModified = !1)
			},
			this.getFreshValueHex = function() {
				return this.hV
			},
			"undefined" != typeof t && ("undefined" != typeof t.tag && (this.hT = t.tag), "undefined" != typeof t.explicit && (this.isExplicit = t.explicit), "undefined" != typeof t.obj && (this.asn1Object = t.obj, this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)))
		},
		Ve.extend(KJUR.asn1.DERTaggedObject, KJUR.asn1.ASN1Object),
		function(t) {
			"use strict";
			var e, i = {};
			i.decode = function(i) {
				var n;
				if (e === t) {
					var o = "0123456789ABCDEF",
					s = " \f\n\r\t\xa0\u2028\u2029";
					for (e = [], n = 0; n < 16; ++n) e[o.charAt(n)] = n;
					for (o = o.toLowerCase(), n = 10; n < 16; ++n) e[o.charAt(n)] = n;
					for (n = 0; n < s.length; ++n) e[s.charAt(n)] = -1
				}
				var r = [],
				a = 0,
				h = 0;
				for (n = 0; n < i.length; ++n) {
					var l = i.charAt(n);
					if ("=" == l) break;
					if (l = e[l], l != -1) {
						if (l === t) throw "Illegal character at offset " + n;
						a |= l,
						++h >= 2 ? (r[r.length] = a, a = 0, h = 0) : a <<= 4
					}
				}
				if (h) throw "Hex encoding incomplete: 4 bits missing";
				return r
			},
			window.Hex = i
		} (),
		function(t) {
			"use strict";
			var e, i = {};
			i.decode = function(i) {
				var n;
				if (e === t) {
					var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
					s = "= \f\n\r\t\xa0\u2028\u2029";
					for (e = [], n = 0; n < 64; ++n) e[o.charAt(n)] = n;
					for (n = 0; n < s.length; ++n) e[s.charAt(n)] = -1
				}
				var r = [],
				a = 0,
				h = 0;
				for (n = 0; n < i.length; ++n) {
					var l = i.charAt(n);
					if ("=" == l) break;
					if (l = e[l], l != -1) {
						if (l === t) throw "Illegal character at offset " + n;
						a |= l,
						++h >= 4 ? (r[r.length] = a >> 16, r[r.length] = a >> 8 & 255, r[r.length] = 255 & a, a = 0, h = 0) : a <<= 6
					}
				}
				switch (h) {
				case 1:
					throw "Base64 encoding incomplete: at least 2 bits missing";
				case 2:
					r[r.length] = a >> 10;
					break;
				case 3:
					r[r.length] = a >> 16,
					r[r.length] = a >> 8 & 255
				}
				return r
			},
			i.re = /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
			i.unarmor = function(t) {
				var e = i.re.exec(t);
				if (e) if (e[1]) t = e[1];
				else {
					if (!e[2]) throw "RegExp out of sync";
					t = e[2]
				}
				return i.decode(t)
			},
			window.Base64 = i
		} (),
		function(t) {
			"use strict";
			function e(t, i) {
				t instanceof e ? (this.enc = t.enc, this.pos = t.pos) : (this.enc = t, this.pos = i)
			}
			function i(t, e, i, n, o) {
				this.stream = t,
				this.header = e,
				this.length = i,
				this.tag = n,
				this.sub = o
			}
			var n = 100,
			o = "\u2026",
			s = {
				tag: function(t, e) {
					var i = document.createElement(t);
					return i.className = e,
					i
				},
				text: function(t) {
					return document.createTextNode(t)
				}
			};
			e.prototype.get = function(e) {
				if (e === t && (e = this.pos++), e >= this.enc.length) throw "Requesting byte offset " + e + " on a stream of length " + this.enc.length;
				return this.enc[e]
			},
			e.prototype.hexDigits = "0123456789ABCDEF",
			e.prototype.hexByte = function(t) {
				return this.hexDigits.charAt(t >> 4 & 15) + this.hexDigits.charAt(15 & t)
			},
			e.prototype.hexDump = function(t, e, i) {
				for (var n = "",
				o = t; o < e; ++o) if (n += this.hexByte(this.get(o)), i !== !0) switch (15 & o) {
				case 7:
					n += "  ";
					break;
				case 15:
					n += "\n";
					break;
				default:
					n += " "
				}
				return n
			},
			e.prototype.parseStringISO = function(t, e) {
				for (var i = "",
				n = t; n < e; ++n) i += String.fromCharCode(this.get(n));
				return i
			},
			e.prototype.parseStringUTF = function(t, e) {
				for (var i = "",
				n = t; n < e;) {
					var o = this.get(n++);
					i += o < 128 ? String.fromCharCode(o) : o > 191 && o < 224 ? String.fromCharCode((31 & o) << 6 | 63 & this.get(n++)) : String.fromCharCode((15 & o) << 12 | (63 & this.get(n++)) << 6 | 63 & this.get(n++))
				}
				return i
			},
			e.prototype.parseStringBMP = function(t, e) {
				for (var i = "",
				n = t; n < e; n += 2) {
					var o = this.get(n),
					s = this.get(n + 1);
					i += String.fromCharCode((o << 8) + s)
				}
				return i
			},
			e.prototype.reTime = /^((?:1[89]|2\d)?\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,
			e.prototype.parseTime = function(t, e) {
				var i = this.parseStringISO(t, e),
				n = this.reTime.exec(i);
				return n ? (i = n[1] + "-" + n[2] + "-" + n[3] + " " + n[4], n[5] && (i += ":" + n[5], n[6] && (i += ":" + n[6], n[7] && (i += "." + n[7]))), n[8] && (i += " UTC", "Z" != n[8] && (i += n[8], n[9] && (i += ":" + n[9]))), i) : "Unrecognized time: " + i
			},
			e.prototype.parseInteger = function(t, e) {
				var i = e - t;
				if (i > 4) {
					i <<= 3;
					var n = this.get(t);
					if (0 === n) i -= 8;
					else for (; n < 128;) n <<= 1,
					--i;
					return "(" + i + " bit)"
				}
				for (var o = 0,
				s = t; s < e; ++s) o = o << 8 | this.get(s);
				return o
			},
			e.prototype.parseBitString = function(t, e) {
				var i = this.get(t),
				n = (e - t - 1 << 3) - i,
				o = "(" + n + " bit)";
				if (n <= 20) {
					var s = i;
					o += " ";
					for (var r = e - 1; r > t; --r) {
						for (var a = this.get(r), h = s; h < 8; ++h) o += a >> h & 1 ? "1": "0";
						s = 0
					}
				}
				return o
			},
			e.prototype.parseOctetString = function(t, e) {
				var i = e - t,
				s = "(" + i + " byte) ";
				i > n && (e = t + n);
				for (var r = t; r < e; ++r) s += this.hexByte(this.get(r));
				return i > n && (s += o),
				s
			},
			e.prototype.parseOID = function(t, e) {
				for (var i = "",
				n = 0,
				o = 0,
				s = t; s < e; ++s) {
					var r = this.get(s);
					if (n = n << 7 | 127 & r, o += 7, !(128 & r)) {
						if ("" === i) {
							var a = n < 80 ? n < 40 ? 0 : 1 : 2;
							i = a + "." + (n - 40 * a)
						} else i += "." + (o >= 31 ? "bigint": n);
						n = o = 0
					}
				}
				return i
			},
			i.prototype.typeName = function() {
				if (this.tag === t) return "unknown";
				var e = this.tag >> 6,
				i = (this.tag >> 5 & 1, 31 & this.tag);
				switch (e) {
				case 0:
					switch (i) {
					case 0:
						return "EOC";
					case 1:
						return "BOOLEAN";
					case 2:
						return "INTEGER";
					case 3:
						return "BIT_STRING";
					case 4:
						return "OCTET_STRING";
					case 5:
						return "NULL";
					case 6:
						return "OBJECT_IDENTIFIER";
					case 7:
						return "ObjectDescriptor";
					case 8:
						return "EXTERNAL";
					case 9:
						return "REAL";
					case 10:
						return "ENUMERATED";
					case 11:
						return "EMBEDDED_PDV";
					case 12:
						return "UTF8String";
					case 16:
						return "SEQUENCE";
					case 17:
						return "SET";
					case 18:
						return "NumericString";
					case 19:
						return "PrintableString";
					case 20:
						return "TeletexString";
					case 21:
						return "VideotexString";
					case 22:
						return "IA5String";
					case 23:
						return "UTCTime";
					case 24:
						return "GeneralizedTime";
					case 25:
						return "GraphicString";
					case 26:
						return "VisibleString";
					case 27:
						return "GeneralString";
					case 28:
						return "UniversalString";
					case 30:
						return "BMPString";
					default:
						return "Universal_" + i.toString(16)
					}
				case 1:
					return "Application_" + i.toString(16);
				case 2:
					return "[" + i + "]";
				case 3:
					return "Private_" + i.toString(16)
				}
			},
			i.prototype.reSeemsASCII = /^[ -~]+$/,
			i.prototype.content = function() {
				if (this.tag === t) return null;
				var e = this.tag >> 6,
				i = 31 & this.tag,
				s = this.posContent(),
				r = Math.abs(this.length);
				if (0 !== e) {
					if (null !== this.sub) return "(" + this.sub.length + " elem)";
					var a = this.stream.parseStringISO(s, s + Math.min(r, n));
					return this.reSeemsASCII.test(a) ? a.substring(0, 2 * n) + (a.length > 2 * n ? o: "") : this.stream.parseOctetString(s, s + r)
				}
				switch (i) {
				case 1:
					return 0 === this.stream.get(s) ? "false": "true";
				case 2:
					return this.stream.parseInteger(s, s + r);
				case 3:
					return this.sub ? "(" + this.sub.length + " elem)": this.stream.parseBitString(s, s + r);
				case 4:
					return this.sub ? "(" + this.sub.length + " elem)": this.stream.parseOctetString(s, s + r);
				case 6:
					return this.stream.parseOID(s, s + r);
				case 16:
				case 17:
					return "(" + this.sub.length + " elem)";
				case 12:
					return this.stream.parseStringUTF(s, s + r);
				case 18:
				case 19:
				case 20:
				case 21:
				case 22:
				case 26:
					return this.stream.parseStringISO(s, s + r);
				case 30:
					return this.stream.parseStringBMP(s, s + r);
				case 23:
				case 24:
					return this.stream.parseTime(s, s + r)
				}
				return null
			},
			i.prototype.toString = function() {
				return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (null === this.sub ? "null": this.sub.length) + "]"
			},
			i.prototype.print = function(e) {
				if (e === t && (e = ""), document.writeln(e + this), null !== this.sub) {
					e += "  ";
					for (var i = 0,
					n = this.sub.length; i < n; ++i) this.sub[i].print(e)
				}
			},
			i.prototype.toPrettyString = function(e) {
				e === t && (e = "");
				var i = e + this.typeName() + " @" + this.stream.pos;
				if (this.length >= 0 && (i += "+"), i += this.length, 32 & this.tag ? i += " (constructed)": 3 != this.tag && 4 != this.tag || null === this.sub || (i += " (encapsulates)"), i += "\n", null !== this.sub) {
					e += "  ";
					for (var n = 0,
					o = this.sub.length; n < o; ++n) i += this.sub[n].toPrettyString(e)
				}
				return i
			},
			i.prototype.toDOM = function() {
				var t = s.tag("div", "node");
				t.asn1 = this;
				var e = s.tag("div", "head"),
				i = this.typeName().replace(/_/g, " ");
				e.innerHTML = i;
				var n = this.content();
				if (null !== n) {
					n = String(n).replace(/</g, "&lt;");
					var o = s.tag("span", "preview");
					o.appendChild(s.text(n)),
					e.appendChild(o)
				}
				t.appendChild(e),
				this.node = t,
				this.head = e;
				var r = s.tag("div", "value");
				if (i = "Offset: " + this.stream.pos + "<br/>", i += "Length: " + this.header + "+", i += this.length >= 0 ? this.length: -this.length + " (undefined)", 32 & this.tag ? i += "<br/>(constructed)": 3 != this.tag && 4 != this.tag || null === this.sub || (i += "<br/>(encapsulates)"), null !== n && (i += "<br/>Value:<br/><b>" + n + "</b>", "object" == typeof oids && 6 == this.tag)) {
					var a = oids[n];
					a && (a.d && (i += "<br/>" + a.d), a.c && (i += "<br/>" + a.c), a.w && (i += "<br/>(warning!)"))
				}
				r.innerHTML = i,
				t.appendChild(r);
				var h = s.tag("div", "sub");
				if (null !== this.sub) for (var l = 0,
				u = this.sub.length; l < u; ++l) h.appendChild(this.sub[l].toDOM());
				return t.appendChild(h),
				e.onclick = function() {
					t.className = "node collapsed" == t.className ? "node": "node collapsed"
				},
				t
			},
			i.prototype.posStart = function() {
				return this.stream.pos
			},
			i.prototype.posContent = function() {
				return this.stream.pos + this.header
			},
			i.prototype.posEnd = function() {
				return this.stream.pos + this.header + Math.abs(this.length)
			},
			i.prototype.fakeHover = function(t) {
				this.node.className += " hover",
				t && (this.head.className += " hover")
			},
			i.prototype.fakeOut = function(t) {
				var e = / ?hover/;
				this.node.className = this.node.className.replace(e, ""),
				t && (this.head.className = this.head.className.replace(e, ""))
			},
			i.prototype.toHexDOM_sub = function(t, e, i, n, o) {
				if (! (n >= o)) {
					var r = s.tag("span", e);
					r.appendChild(s.text(i.hexDump(n, o))),
					t.appendChild(r)
				}
			},
			i.prototype.toHexDOM = function(e) {
				var i = s.tag("span", "hex");
				if (e === t && (e = i), this.head.hexNode = i, this.head.onmouseover = function() {
					this.hexNode.className = "hexCurrent"
				},
				this.head.onmouseout = function() {
					this.hexNode.className = "hex"
				},
				i.asn1 = this, i.onmouseover = function() {
					var t = !e.selected;
					t && (e.selected = this.asn1, this.className = "hexCurrent"),
					this.asn1.fakeHover(t)
				},
				i.onmouseout = function() {
					var t = e.selected == this.asn1;
					this.asn1.fakeOut(t),
					t && (e.selected = null, this.className = "hex")
				},
				this.toHexDOM_sub(i, "tag", this.stream, this.posStart(), this.posStart() + 1), this.toHexDOM_sub(i, this.length >= 0 ? "dlen": "ulen", this.stream, this.posStart() + 1, this.posContent()), null === this.sub) i.appendChild(s.text(this.stream.hexDump(this.posContent(), this.posEnd())));
				else if (this.sub.length > 0) {
					var n = this.sub[0],
					o = this.sub[this.sub.length - 1];
					this.toHexDOM_sub(i, "intro", this.stream, this.posContent(), n.posStart());
					for (var r = 0,
					a = this.sub.length; r < a; ++r) i.appendChild(this.sub[r].toHexDOM(e));
					this.toHexDOM_sub(i, "outro", this.stream, o.posEnd(), this.posEnd())
				}
				return i
			},
			i.prototype.toHexString = function(t) {
				return this.stream.hexDump(this.posStart(), this.posEnd(), !0)
			},
			i.decodeLength = function(t) {
				var e = t.get(),
				i = 127 & e;
				if (i == e) return i;
				if (i > 3) throw "Length over 24 bits not supported at position " + (t.pos - 1);
				if (0 === i) return - 1;
				e = 0;
				for (var n = 0; n < i; ++n) e = e << 8 | t.get();
				return e
			},
			i.hasContent = function(t, n, o) {
				if (32 & t) return ! 0;
				if (t < 3 || t > 4) return ! 1;
				var s = new e(o);
				3 == t && s.get();
				var r = s.get();
				if (r >> 6 & 1) return ! 1;
				try {
					var a = i.decodeLength(s);
					return s.pos - o.pos + a == n
				} catch(t) {
					return ! 1
				}
			},
			i.decode = function(t) {
				t instanceof e || (t = new e(t, 0));
				var n = new e(t),
				o = t.get(),
				s = i.decodeLength(t),
				r = t.pos - n.pos,
				a = null;
				if (i.hasContent(o, s, t)) {
					var h = t.pos;
					if (3 == o && t.get(), a = [], s >= 0) {
						for (var l = h + s; t.pos < l;) a[a.length] = i.decode(t);
						if (t.pos != l) throw "Content size is not correct for container starting at offset " + h
					} else try {
						for (;;) {
							var u = i.decode(t);
							if (0 === u.tag) break;
							a[a.length] = u
						}
						s = h - t.pos
					} catch(t) {
						throw "Exception while decoding undefined length content: " + t
					}
				} else t.pos += s;
				return new i(n, r, s, o, a)
			},
			i.test = function() {
				for (var t = [{
					value: [39],
					expected: 39
				},
				{
					value: [129, 201],
					expected: 201
				},
				{
					value: [131, 254, 220, 186],
					expected: 16702650
				}], n = 0, o = t.length; n < o; ++n) {
					var s = new e(t[n].value, 0),
					r = i.decodeLength(s);
					r != t[n].expected && document.write("In test[" + n + "] expected " + t[n].expected + " got " + r + "\n")
				}
			},
			window.ASN1 = i
		} (),
		ASN1.prototype.getHexStringValue = function() {
			var t = this.toHexString(),
			e = 2 * this.header,
			i = 2 * this.length;
			return t.substr(e, i)
		},
		ue.prototype.parseKey = function(t) {
			try {
				var e = 0,
				i = 0,
				n = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/,
				o = n.test(t) ? Hex.decode(t) : Base64.unarmor(t),
				s = ASN1.decode(o);
				if (3 === s.sub.length && (s = s.sub[2].sub[0]), 9 === s.sub.length) {
					e = s.sub[1].getHexStringValue(),
					this.n = he(e, 16),
					i = s.sub[2].getHexStringValue(),
					this.e = parseInt(i, 16);
					var r = s.sub[3].getHexStringValue();
					this.d = he(r, 16);
					var a = s.sub[4].getHexStringValue();
					this.p = he(a, 16);
					var h = s.sub[5].getHexStringValue();
					this.q = he(h, 16);
					var l = s.sub[6].getHexStringValue();
					this.dmp1 = he(l, 16);
					var u = s.sub[7].getHexStringValue();
					this.dmq1 = he(u, 16);
					var c = s.sub[8].getHexStringValue();
					this.coeff = he(c, 16)
				} else {
					if (2 !== s.sub.length) return ! 1;
					var p = s.sub[1],
					f = p.sub[0];
					e = f.sub[0].getHexStringValue(),
					this.n = he(e, 16),
					i = f.sub[1].getHexStringValue(),
					this.e = parseInt(i, 16)
				}
				return ! 0
			} catch(t) {
				return ! 1
			}
		},
		ue.prototype.getPrivateBaseKey = function() {
			var t = {
				array: [new KJUR.asn1.DERInteger({
					int: 0
				}), new KJUR.asn1.DERInteger({
					bigint: this.n
				}), new KJUR.asn1.DERInteger({
					int: this.e
				}), new KJUR.asn1.DERInteger({
					bigint: this.d
				}), new KJUR.asn1.DERInteger({
					bigint: this.p
				}), new KJUR.asn1.DERInteger({
					bigint: this.q
				}), new KJUR.asn1.DERInteger({
					bigint: this.dmp1
				}), new KJUR.asn1.DERInteger({
					bigint: this.dmq1
				}), new KJUR.asn1.DERInteger({
					bigint: this.coeff
				})]
			},
			e = new KJUR.asn1.DERSequence(t);
			return e.getEncodedHex()
		},
		ue.prototype.getPrivateBaseKeyB64 = function() {
			return we(this.getPrivateBaseKey())
		},
		ue.prototype.getPublicBaseKey = function() {
			var t = {
				array: [new KJUR.asn1.DERObjectIdentifier({
					oid: "1.2.840.113549.1.1.1"
				}), new KJUR.asn1.DERNull]
			},
			e = new KJUR.asn1.DERSequence(t);
			t = {
				array: [new KJUR.asn1.DERInteger({
					bigint: this.n
				}), new KJUR.asn1.DERInteger({
					int: this.e
				})]
			};
			var i = new KJUR.asn1.DERSequence(t);
			t = {
				hex: "00" + i.getEncodedHex()
			};
			var n = new KJUR.asn1.DERBitString(t);
			t = {
				array: [e, n]
			};
			var o = new KJUR.asn1.DERSequence(t);
			return o.getEncodedHex()
		},
		ue.prototype.getPublicBaseKeyB64 = function() {
			return we(this.getPublicBaseKey())
		},
		ue.prototype.wordwrap = function(t, e) {
			if (e = e || 64, !t) return t;
			var i = "(.{1," + e + "})( +|$\n?)|(.{1," + e + "})";
			return t.match(RegExp(i, "g")).join("\n")
		},
		ue.prototype.getPrivateKey = function() {
			var t = "-----BEGIN RSA PRIVATE KEY-----\n";
			return t += this.wordwrap(this.getPrivateBaseKeyB64()) + "\n",
			t += "-----END RSA PRIVATE KEY-----"
		},
		ue.prototype.getPublicKey = function() {
			var t = "-----BEGIN PUBLIC KEY-----\n";
			return t += this.wordwrap(this.getPublicBaseKeyB64()) + "\n",
			t += "-----END PUBLIC KEY-----"
		},
		ue.prototype.hasPublicKeyProperty = function(t) {
			return t = t || {},
			t.hasOwnProperty("n") && t.hasOwnProperty("e")
		},
		ue.prototype.hasPrivateKeyProperty = function(t) {
			return t = t || {},
			t.hasOwnProperty("n") && t.hasOwnProperty("e") && t.hasOwnProperty("d") && t.hasOwnProperty("p") && t.hasOwnProperty("q") && t.hasOwnProperty("dmp1") && t.hasOwnProperty("dmq1") && t.hasOwnProperty("coeff")
		},
		ue.prototype.parsePropertiesFrom = function(t) {
			this.n = t.n,
			this.e = t.e,
			t.hasOwnProperty("d") && (this.d = t.d, this.p = t.p, this.q = t.q, this.dmp1 = t.dmp1, this.dmq1 = t.dmq1, this.coeff = t.coeff)
		};
		var Fe = function(t) {
			ue.call(this),
			t && ("string" == typeof t ? this.parseKey(t) : (this.hasPrivateKeyProperty(t) || this.hasPublicKeyProperty(t)) && this.parsePropertiesFrom(t))
		};
		Fe.prototype = new ue,
		Fe.prototype.constructor = Fe;
		var Qe = function(t) {
			t = t || {},
			this.default_key_size = parseInt(t.default_key_size) || 1024,
			this.default_public_exponent = t.default_public_exponent || "010001",
			this.log = t.log || !1,
			this.key = null
		};
		Qe.prototype.setKey = function(t) {
			this.log && this.key && console.warn("A key was already set, overriding existing."),
			this.key = new Fe(t)
		},
		Qe.prototype.setPrivateKey = function(t) {
			this.setKey(t)
		},
		Qe.prototype.setPublicKey = function(t) {
			this.setKey(t)
		},
		Qe.prototype.decrypt = function(t) {
			try {
				return this.getKey().decrypt(xe(t))
			} catch(t) {
				return ! 1
			}
		},
		Qe.prototype.encrypt = function(t) {
			try {
				return we(this.getKey().encrypt(t))
			} catch(t) {
				return ! 1
			}
		},
		Qe.prototype.getKey = function(t) {
			if (!this.key) {
				if (this.key = new Fe, t && "[object Function]" === {}.toString.call(t)) return void this.key.generateAsync(this.default_key_size, this.default_public_exponent, t);
				this.key.generate(this.default_key_size, this.default_public_exponent)
			}
			return this.key
		},
		Qe.prototype.getPrivateKey = function() {
			return this.getKey().getPrivateKey()
		},
		Qe.prototype.getPrivateKeyB64 = function() {
			return this.getKey().getPrivateBaseKeyB64()
		},
		Qe.prototype.getPublicKey = function() {
			return this.getKey().getPublicKey()
		},
		Qe.prototype.getPublicKeyB64 = function() {
			return this.getKey().getPublicBaseKeyB64()
		},
		Qe.version = "2.3.1",
		t.exports = Qe
	},
	rCGI: function(t, e) {
		t.exports = {
			"\u767b\u5f55": "Sign In",
			"\u90ae\u7bb1\u767b\u5f55": "Sign In with Email",
			"\u90ae\u7bb1\u624b\u673a\u767b\u5f55": "Email/Phone",
			"QQ\u767b\u5f55": "Sign In with QQ",
			"\u5fae\u4fe1\u767b\u5f55": "Sign In with WeChat",
			"\u90ae\u7bb1\u5730\u5740": "Email address",
			"\u90ae\u7bb1\u5730\u5740/\u624b\u673a\u53f7\u7801": "Email address or Phone number",
			"\u90ae\u7bb1\u5730\u5740/DNSPod\u8d26\u53f7": "Email address or DNSPod account",
			"\u5bc6\u7801": "Password",
			"\u9a8c\u8bc1\u7801": "Verifiy Code",
			"\u5fd8\u8bb0\u5bc6\u7801": "Forgot password",
			"\u5fd8\u8bb0\u5bc6\u7801\uff1f": "Forgot password?",
			"\u767b \u5f55": "Sign In",
			"\u8fd8\u6ca1\u6709\u8d26\u53f7\uff1f": "No account ?",
			"\u7acb\u5373\u6ce8\u518c": "Sign up now",
			"\u53c2\u6570\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165": "Param error,Please enter again",
			"\u8d26\u53f7\u4e0d\u5b58\u5728\u6216\u5bc6\u7801\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165": "Account does not exist or password error , please re-enter",
			"\u9a8c\u8bc1\u7801\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165": "Verification code error. Please enter again",
			"\u767b\u5f55\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5": "Login failed. Please enter again",
			"\u8bf7\u8f93\u5165\u90ae\u7bb1": "Please enter email",
			"\u8bf7\u8f93\u5165\u90ae\u7bb1\u6216\u8005\u624b\u673a\u53f7\u7801": "Please enter email or phone number",
			"\u8bf7\u8f93\u5165\u5bc6\u7801": "Please enter your password",
			"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801": "Please enter the verification code",
			"\u8d26\u53f7\u5bc6\u7801\u9519\u8bef\u6b21\u6570\u8fbe\u5230\u4e0a\u9650\uff0c\u5f53\u65e5\u4e0d\u53ef\u767b\u5f55": "Too many password errors today , to ensure account security , please try tomorrow",
			"\u5fae\u4fe1\u516c\u4f17\u53f7": "WeChat OA",
			"\u5fae\u4fe1\u8d26\u53f7": "WeChat",
			"QQ\u8d26\u53f7": "QQ",
			"\u90ae\u7bb1\u8d26\u53f7": "Email",
			"\u767b\u5f55\u817e\u8baf\u4e91": "Sign in Tencent Cloud",
			"\u66f4\u591a\u767b\u5f55\u65b9\u5f0f": "More",
			"\u4f7f\u7528\u90ae\u7bb1\u8d26\u53f7\u767b\u5f55": "Sign in using your email account",
			"\u8bf7\u4f7f\u7528\u5fae\u4fe1\u626b\u63cf\u4e8c\u7ef4\u7801\u767b\u5f55": "Scan QR-code in WeChat to login",
			"\u201c\u817e\u8baf\u4e91\u201d": '"Tencent Cloud"',
			"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u90ae\u7bb1": "Please enter a correct email",
			"\u90ae\u7bb1\u683c\u5f0f\u6709\u8bef\uff0c\u8bf7\u4fee\u6539": "Email format error , please re-edit",
			"\u8be5\u8d26\u53f7\u5c5e\u4e8e\u56fd\u9645\u7ad9\u8d26\u53f7\uff0c": "Your account is for Tencent Cloud International\uff0c",
			"\u524d\u5f80\u767b\u5f55": "Log in now",
			"\u952e\u76d8\u5927\u5199\u9501\u5b9a\u5df2\u6253\u5f00\uff0c\u8bf7\u6ce8\u610f": "CapsLock On",
			"\u5feb\u6377\u767b\u5f55": "More",
			"\u5fd8\u8bb0\u8d26\u53f7\u6216\u5bc6\u7801\uff1f": "Forgot account or password?",
			'\u8be5\u8d26\u53f7\u53ef\u80fd\u662f\u901a\u8fc7QQ\u5feb\u6377\u6ce8\u518c\uff0c\u8bf7<a href="javascript:;" class="J-switchQQLogin">\u5207\u6362\u81f3QQ\u767b\u5f55<a/>': 'Your account was signed in with QQ , please <a href="javascript:;" class="J-switchQQLogin">switch to QQ  login window</a>'
		}
	},
	h97R: function(t, e) {
		function i(t, e, i) {
			var o = l.test(t),
			u = r.createElement(o ? "link": "script");
			if (i) {
				var c = isFunction(i) ? i(t) : i;
				c && (u.charset = c)
			}
			n(u, e, o, t),
			o ? (u.rel = "stylesheet", u.href = t, u.setAttribute("data-role", "global")) : (u.async = !0, u.src = t),
			s = u,
			h ? a.insertBefore(u, h) : a.appendChild(u),
			s = null
		}
		function n(t, e, i, n) {
			function s() {
				t.onload = t.onerror = t.onreadystatechange = null,
				t = null,
				e()
			}
			var r = "onload" in t;
			return ! i || !u && r ? void(r ? (t.onload = s, t.onerror = function() {
				s()
			}) : t.onreadystatechange = function() { / loaded | complete / .test(t.readyState) && s()
			}) : void setTimeout(function() {
				o(t, e)
			},
			1)
		}
		function o(t, e) {
			var i, n = t.sheet;
			if (u) n && (i = !0);
			else if (n) try {
				n.cssRules && (i = !0)
			} catch(t) {
				"NS_ERROR_DOM_SECURITY_ERR" === t.name && (i = !0)
			}
			setTimeout(function() {
				i ? e() : o(t, e)
			},
			20)
		}
		var s, r = document,
		a = r.head || r.getElementsByTagName("head")[0] || r.documentElement,
		h = a.getElementsByTagName("base")[0],
		l = /\.css(?:\?|$)/i,
		u = +navigator.userAgent.replace(/.*(?:AppleWebKit|AndroidWebKit)\/(\d+).*/, "$1") < 536;
		t.exports = i
	},
	Oh7S: function(t, e) {
		var i = {
			init: function() {
				var t = this;
				"placeholder" in document.createElement("input") || ($("input").on("keydown",
				function() {
					t.hidePlaceholder(this)
				}).on("keyup",
				function() {
					"" == this.value ? t.showPlaceholder(this) : t.hidePlaceholder(this)
				}).each(function() {
					"" != this.value ? t.hidePlaceholder(this) : t.showPlaceholder(this)
				}), $("input").prev("label").off().on("click",
				function() {
					$(this).next("input").focus()
				}))
			},
			showPlaceholder: function(t) {
				$(t).prev("label").show()
			},
			hidePlaceholder: function(t) {
				$(t).prev("label").hide()
			}
		};
		t.exports = i
	},
	sdDX: function(t, e, i) {
		var n = i("WPtr"),
		o = i("HbSM"),
		s = i("rCGI"),
		r = i("h97R"),
		a = i("4G7m"),
		h = i("M34W"),
		l = new o;
		l.setPublicKey(a.encryptPublicKey);
		var u = {
			loadCss: function() {
				var t = this,
				e = $.Deferred();
				return t.cssLoaded ? e.resolve() : r(a.login_css,
				function() {
					t.cssLoaded = !0,
					e.resolve()
				}),
				e
			},
			showInputErrorTip: function(t, e, i) {
				t = $(t),
				this.hideInputErrorTip(),
				this.hidePromptTip(t);
				var n = t.parent().find(".J-errorTip");
				i = i || {},
				n.length || (n = t.parent().append('<div class="qc-log-bubble  qc-log-bubble-top error J-errorTip" style="bottom: -32px; display:none">\t                    <div class="qc-log-bubble-inner" style="left:15px;"></div>\t                </div>').find(".J-errorTip")),
				$(".J-loginTip").html(this.__(e)).parent().show(),
				t.addClass("error").focus(),
				this.notifyResize()
			},
			hideInputErrorTip: function(t) {
				t ? $(t).removeClass("error").parent().find(".J-errorTip").hide() : $(".J-errorTip").hide().parent().find("input").removeClass("error"),
				this.notifyResize()
			},
			showPromptTip: function(t, e, i) {
				if (t = $(t), this.hidePromptTip(), !t.parent().find(".J-errorTip:visible").length) {
					var n = t.parent().find(".J-promptTip");
					i = i || {},
					n.length || (n = t.parent().append('<div class="qc-log-bubble  qc-log-bubble-bottom J-promptTip" style="top: -45px;">\t                    <div class="qc-log-bubble-inner" style="left:15px;"></div>\t                </div>').find(".J-promptTip")),
					n.show().find(".qc-log-bubble-inner").html(this.__(e)),
					this.notifyResize()
				}
			},
			hidePromptTip: function(t) {
				t ? $(t).parent().find(".J-promptTip").hide() : $(".J-promptTip").hide(),
				this.notifyResize()
			},
			checkLoginForm: function() {
				var t = $(".J-commonLoginContent"),
				e = t.find(".J-username"),
				i = $.trim(e.val()),
				n = t.find(".J-password"),
				o = $.trim(n.val()),
				s = t.find(".J-vcodeArea"),
				r = t.find(".J-vcodeInput"),
				h = $.trim(r.val()),
				u = {},
				c = this;
				if ("" == i) return c.showInputErrorTip(e, "\u8bf7\u8f93\u5165\u90ae\u7bb1"),
				!1;
				if (i.indexOf("@") == -1) return c.showInputErrorTip(e, "\u90ae\u7bb1\u683c\u5f0f\u6709\u8bef\uff0c\u8bf7\u4fee\u6539"),
				!1;
				if (u.username = i, "" == o) return c.showInputErrorTip(n, "\u8bf7\u8f93\u5165\u5bc6\u7801"),
				!1;
				if (u.password = a.encrypt ? l.encrypt(o) : o, s.is(":visible")) {
					if ("" == h) return c.showInputErrorTip(r, "\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801"),
					!1;
					u.vcode = h
				}
				return u
			},
			query: function(t) {
				return t = String(t).replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1"),
				location.search.slice(1).match(RegExp("(?:^|&)" + t + "(?:=([^&#]*)?|[&#]|$)")) ? String(RegExp.$1 || "").replace(/\+/g, " ") : void 0
			},
			__: function(t, e) {
				var e = e || n.get("language");
				return e && "en" == e && s && s[t] ? s[t] : t
			},
			getTranslator: function(t) {
				var e = this;
				return function(i) {
					return e.__(i, t)
				}
			},
			capslock: function(t) {
				if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) return ! 1;
				var e = t.keyCode || t.which,
				i = t.shiftKey || 16 == e || !1;
				return e >= 65 && e <= 90 && !i || e >= 97 && e <= 122 && i
			},
			tmpl: function() {
				var t = {},
				e = function(t) {
					return 0 == t ? t: (t = (t || "").toString(), t.replace(/&(?!\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;"))
				},
				i = function(t, e) {
					if (e) for (var i in e) {
						var n = new RegExp("<%#\\s?" + i + "%>", "g");
						t = t.replace(n, e[i])
					}
					return t
				};
				return function n(o, s, r) {
					var a = !/\W/.test(o); ! a && (o = i(o, r));
					var h = a ? t[o] = t[o] || n(i(document.getElementById(o).innerHTML, r)) : new Function("obj", "_escape", "var _p='';with(obj){_p+='" + o.replace(/[\r\t\n]/g, " ").split("\\'").join("\\\\'").split("'").join("\\'").split("<%").join("\t").replace(/\t-(.*?)%>/g, "'+$1+'").replace(/\t=(.*?)%>/g, "'+_escape($1)+'").split("\t").join("';").split("%>").join("_p+='") + "';} return _p;"),
					l = function(t) {
						return h(t, e)
					};
					return s ? l(s) : l
				}
			} (),
			loadProxyFrame: function(t) {
				var e = this;
				if (e.loadProxyFrameDfd) return e.loadProxyFrameDfd;
				e.loadProxyFrameDfd = $.Deferred();
				var i = document.createElement("iframe");
				return i.style.display = "none",
				i.src = t,
				i.onload = function() {
					e.loadProxyFrameDfd.resolve(i),
					i.onload = null
				},
				document.body.appendChild(i),
				e.loadProxyFrameDfd
			},
			proxyPost: function(t, e) {
				var i = this,
				n = "callback" + Math.floor(1e7 * Math.random());
				window[n] = function(t) {
					e(t);
					try {
						delete window[n]
					} catch(t) {
						window[n] = null
					}
				};
				var o = function(e) {
					try {
						e.contentWindow.postSend(t.url, t.data, n)
					} catch(s) {
						"TypeError" !== s.name || e.contentWindow ? e.contentWindow.postMessage(JSON.stringify({
							url: t.url,
							data: t.data,
							requestType: n
						}), "*") : (i.loadProxyFrameDfd = null, i.loadProxyFrame(a.qcloud_post_proxy).done(o))
					}
				};
				i.loadProxyFrame(a.qcloud_post_proxy).done(o)
			},
			isMobile: function() {
				var t = (navigator.userAgent || "").toLowerCase(),
				e = ["android", "iphone", "windows phone"];
				if (a.isThirdParty) return ! 1;
				for (var i = 0; i < e.length; i++) if (t.indexOf(e[i]) != -1) return ! 0;
				return ! 1
			},
			isWechat: function() {
				return navigator.userAgent.toLowerCase().indexOf("micromessenger") > -1
			},
			getWechatLoginUrl: function() {
				return this.isWechat() || this.isSupportWxLoginInMobile() ? a.mWechatLoginUrl: a.wechatLoginUrl
			},
			saveLoginTypeInLocal: function(t) {
				var e = 180;
				n.set("lastLoginType", t, {
					domain: h.getCookieDomain(),
					path: "/",
					expires: e
				})
			},
			getLastLoginType: function() {
				return n.get("lastLoginType") || ""
			},
			notifyResize: function() {
				top.postMessage(JSON.stringify({
					action: "resize",
					width: $(".login-tab").width(),
					height: $(".login-tab").height()
				}), "*")
			},
			isSupportWxLoginInMobile: function() {
				var t = navigator.userAgent;
				return this.isMobile() && (/qqbrowser/i.test(t) || /ucbrowser/i.test(t) || /iPhone.+Version\/[\d\.]+.*Safari/i.test(t))
			}
		};
		t.exports = u
	}
});