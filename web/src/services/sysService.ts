import api from '@/api/api'

export default {
  getInfo(){
   return api.get('/login/getLoginInfo')
  }
}