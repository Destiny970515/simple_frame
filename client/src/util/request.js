import axios from 'axios'
import baseCofig from '../util/baseConfig'
// import { Message, MessageBox } from 'element-ui'
// import qs from 'qs';

axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
// 创建axios实例
const service = axios.create({
  baseURL: baseCofig.host,
  timeout: 30000, // 请求超时
})
// request 请求拦截器
service.interceptors.request.use(config => {
  // config.headers.common['x-access-token'] = sessionStorage.getItem('token')  // 让每个请求携带token
  // if (config.method === 'post') {
  //   if (config.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
  //     config.data = qs.stringify(config.data)
  //   } else {
  //     config.data = config.data
  //   }
  // }
  return config
}, error => {
  return Promise.reject(error)
})

// respone 响应拦截器
service.interceptors.response.use(response => {
  const res = response.data
  if (res.status === 501 || res.status === 502) {
    // Message({
    //   message: res.msg,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    console.log(res.msg);
  } else {
    return res
  }
}, error => {
  return console.log(error);
  // return Message.error('网络错误')
});

export default service;