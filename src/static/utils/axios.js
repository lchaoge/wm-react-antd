/*
 * Description: Axios二次封装
 * Author: chaoge
 * Date: 2018/05/23
*/

//引入axios
import axios from 'axios'

let cancel ,promiseArr = {}
const CancelToken = axios.CancelToken;
//请求拦截器
axios.interceptors.request.use(config => {
    
    //发起请求时，取消掉当前正在进行的相同请求
    if (promiseArr[config.url]) {
        promiseArr[config.url]('操作取消')
        promiseArr[config.url] = cancel
    } else {
        promiseArr[config.url] = cancel
    }
      return config
}, error => {
    return Promise.reject(error)
})

// 携带cookie
axios.defaults.withCredentials=true;

//响应拦截器即异常处理
axios.interceptors.response.use(response => {
  if(response.status === 200){
    return response.data
  }
}, err => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.response.code = 400
          err.response.msg = '错误请求'
          break;
        case 401:
          err.response.code = 401
          err.response.msg = '未授权，请重新登录'
          break;
        case 403:
          err.response.code = 403
          err.response.msg = '拒绝访问'
          break;
        case 404:
          err.response.code = 404
          err.response.msg = '未找到资源'
          break;
        case 405:
          err.response.code = 405
          err.response.msg = '请求方法未允许'
          break;
        case 408:
          err.response.code = 408
          err.response.msg = '请求超时'
          break;
        case 500:
          err.response.code = 500
          err.response.msg = '服务器出错'
          break;
        case 501:
          err.response.code = 501
          err.response.msg = '网络未实现'
          break;
        case 502:
          err.response.code = 502
          err.response.msg = '网络错误'
          break;
        case 503:
          err.response.code = 503
          err.response.msg = '服务不可用'
          break;
        case 504:
          err.response.code = 504
          err.response.msg = '网络超时'
          break;
        case 505:
          err.response.code = 505
          err.response.msg = 'http版本不支持该请求'
          break;
        default:
          err.response.code = 9999
          err.response.msg = `连接错误${err.response.status}`
      }
    } else {
      err.response = {}
      err.response.code = 9999
      err.response.msg = "连接到服务器失败"
    }
    
//  message.err(err.message)
    return Promise.resolve(err.response)
})

//axios.defaults.baseURL = '/api'
// 设置默认请求头

axios.defaults.headers = {
	'Content-Type': 'application/json'
}
axios.defaults.timeout = 1000000

export default {
//  get请求
    get (url,param,headers) {
      if(headers===undefined){
        headers = {}
      }
      return new Promise((resolve,reject) => {
        axios({
          method: 'get',
          url,
          params: param,
          headers,
          cancelToken: new CancelToken(c => {
            cancel = c
          })
        }).then(res => {
          resolve(res)
        })
      })
    },
//  post请求
    post (url,param,headers) {
      if(headers===undefined){
        headers = {}
      }
      return new Promise((resolve,reject) => {
        axios({
          method: 'post',
          url,
          data: param,
          headers,
          cancelToken: new CancelToken(c => {
            cancel = c
          })
        }).then(res => {
          resolve(res)
        })
      })
    }
}