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
    }if(res.code === 402){
      window.location.href='/login'
    }
    else {
      if(process.env.DEBUG_MODE){
        const message = JSON.stringify(res)
        copy(message)
        notification.info({message})
      }
      message.error(res.message)
      return Promise.reject(res)
    }
  },
  error => {
    message.error(error.message||'系统超时,请稍后再试')
    return Promise.reject(error)
  }
);
export default service

