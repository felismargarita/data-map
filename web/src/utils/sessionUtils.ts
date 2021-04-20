import {TOKEN,MENUKEY} from '@/const/const'
export default {
  clearToken(){
    sessionStorage.removeItem(TOKEN)
  },
  isLogin(){
    return !!sessionStorage.getItem(TOKEN)
  },
  setToken(token:string){
    sessionStorage.setItem(TOKEN,token)
  },
  getToken(){
    return sessionStorage.getItem(TOKEN)
  },
  setMenuKey(key:string){
    sessionStorage.setItem(MENUKEY,key)
  },
  getMenuKey(){
    return sessionStorage.getItem(MENUKEY)
  }
}
