import axios from 'axios'
import { setContentType, setFormatData } from './reqSetting';

// 是否提示 请求返回状态码非200时的 错误信息
let errorMessage = true;

// 创建axios实例
const service = axios.create({
  // baseURL: process.env.REACT_APP_API, // api的base_url
  baseURL: '/api',
  timeout: 60000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    // 设置Content-Type
    config.headers['Content-Type'] = setContentType(config.data['contentType']);
    config.headers['platform'] = 3;
    if (config.data.hasOwnProperty('contentType')) {
      delete config.data['contentType'];
    }
    // config.headers['Authorization'] = 'Basic MTAwNDoxMjM0NTY=';
    // 设置token
    
    // 设置token
    if (config.data['loginT']) {
      config.headers['Authorization'] = 'Basic MTAwNDoxMjM0NTY=';
      delete config.data['loginT']
    } else {
      config.headers['Authorization'] = `Bearer ${ sessionStorage.token }`;
    }
   
    // let stoken=localStorage.getItem('token')
    // try {
    //   if (stoken && config.url==='api/customer/index') {
    //     config.data.token = stoken
    //   }
    // } catch (err) { }
    /* 调了登录解开注释 */
    // try {
    //   if (getStore.getters.userInfo.token) {
    //     config.headers['uuid'] = getStore.getters.userInfo.token;
    //   }
    // } catch (err) { }

    // 设置当前请求是否要错误提示
    // try {
    //   errorMessage = config.setting.errorMessage
    // } catch (err) {
    //   errorMessage = true
    // }

    // 参数处理
    const { headers, data } = config;
    config.data = setFormatData(headers['Content-Type'], data);

    return config;
  },
  error => {
    // Do something with request error
    Promise.reject(error)
  }
)

// respone拦截器
service.interceptors.response.use(
  response => {
    const resData = response.data
    // 返回成功
    if (response.status === 200) return resData;

    // 其他错误
    if (errorMessage) {
    //   showErrorMes(resData.msg);
      // 提示错误信息
      // if (response.config.url.indexOf('websitemanage/profile/asksum') === -1) {
      //   showErrorMes(resData.msg)
      // }
    }

    return Promise.reject(resData)

  },
  error => {
    // showErrorMes();
    return Promise.reject(error)
  }
)
export default service
