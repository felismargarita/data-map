import sysService from '@/services/sysService'
import { ILoginInfo } from '@/types/commonTypes'
import _ from 'lodash'
import {Action,Effect,Reducer,Subscription} from 'umi'

export interface IUserModel {
  username:string
  nickname:string
  permissions:Array<string>
}

export interface userModalInterface {
  state:IUserModel,
  effects:{
    getInfo:Effect
  },
  reducers:{
    update:Reducer<IUserModel>
  },
}

const UserModal:userModalInterface= {
  state:{username:'',nickname:'',permissions:[]},
  reducers: {
    update(state, {payload:userInfo}){
      return userInfo
    }
  },
  effects:{
    *getInfo(action:Action,{put,call}){
      const info=yield call(sysService.getInfo)
      const {permissionCode,userInfo}=info as ILoginInfo
      const {nickname,username}=userInfo
      yield put({
        type:'update',
        payload:{
          username,
          nickname,
          permissions:permissionCode
        }
      })
    }
  },
}
export default UserModal
