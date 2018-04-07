//引入ajax支持 
import axios from "axios";
//import {getCookie} from '../util/util'
import router from '../router/index.js';
window.ajaxUrl = "/AlgorithmusMall";
window.timeout = false; //登录超时控制器

var config = axios.defaults;
config.method = 'post';
config.baseURL = window.ajaxUrl;
config.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//config.headers.post['Token'] = 'lalala';
config.timeout = 10000;
config.responseType = "json";
axios.interceptors.request.use(function(config) {
    //在发送请求之前做某事
    // const token = getCookie('name');
    //config.data = JSON.stringify(config.data);
    config.headers.Token = "aaa";
    return config;

}, function(error) {
    //请求错误时做些事
    //  return Promise.reject(error.message);
    return Promise.reject({ result: "800", retinfo: "客户端请求出错，请稍后再试" });

});

//添加响应拦截器
axios.interceptors.response.use(function(response) {
    // debugger
    //对响应数据做些事
    // console.log("--- -------------");
    // console.log(response);
    if (response.data.code == '3') {
        window.timeout = true;
    }
    if (response.data.code == '8888') {
        router.push({ path: '/' })
        console.log(router)
    }
    return response.data;
}, function(error) {
    //请求错误时做些事
    //return Promise.reject(error.message);
    return Promise.reject({ result: "900", msg: error, retinfo: "服务器响应出错，请稍后再试" });
});

export default axios;