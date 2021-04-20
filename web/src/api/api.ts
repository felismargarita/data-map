import axios from 'axios'
import urls from './urls'
import {message,notification} from 'antd'
import sessionUtils from '@/utils/sessionUtils'
import {TOKEN} from '@/const/const'
import copy from 'copy-to-clipboard'
const service = axios.create({
  baseURL: urls.SERVER,
})


// request拦截器
service.interceptors.request.use(config => {
  const token = sessionUtils.getToken()
  if(token){
    config.headers[TOKEN] = token
  }
  return config
}, error => {
  return Promise.reject(error)
})

// response拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code === 200) {
      return res.data;
    }if(res.code === 20011){
      window.location.href='/login'
    }
    else {
      message.error(res.msg)
      return Promise.reject(res)
    }
  },
  error => {
    message.error(error.msg||'系统超时,请稍后再试')
    return Promise.reject(error)
  }
);
export default service

