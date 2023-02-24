// 首先导入 axios
import axios from 'axios'
import { message } from 'element-ui';
import router from '../router'

// 创建一个axios对象
const request = axios.create({
    baseURL: 'http://127.0.0.1:8061/',   // 基础路径，会自动添加到你请求url前面
    //baseURL: '/api/',   // 基础路径，会自动添加到你请求url前面
    timeout: 10000   // 请求超时，10000毫秒
})

//request.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

//http request 拦截器
request.interceptors.request.use(
    config => {
        //格式化data
        //config.data = JSON.stringify(config.data);
        //给请求加上请求头
        config.headers = {
            'Content-Type': 'application/json;charset=utf-8',
            //'Access-Control-Allow-Origin': 'http://localhost:6989',
            //'Access-Control-Allow-Credentials': 'true',
            'Authorization':  window.sessionStorage.getItem('token')
        }
        return config;
    },
    error => {
        // 请求异常处理
        message.error("网络链接异常", 3);
        console.log(Promise.resolve(error))
        return false;
    }
);

// 相应拦截器
request.interceptors.response.use(response => {
    // 在2xx范围内的任何状态代码都会触发此功能
    // 处理响应数据
  console.log(response)
    if (response.status !== 200){
            message.error(response.data.msg, 3)
            response.data.data = null;
    }
    // if (response.headers.authorization != null) {
    //     sessionStorage.setItem('Authorization', response.headers.authorization)
    // }
    return response.data.data;
}, error => {
    // 任何超出2xx范围的状态代码都会触发此功能
    // 处理响应错误
    message.error("异常", 3);
    console.log(Promise.resolve(error));
    return false;
});



// 导出自定义创建的 axios 对象
export default request
