import _ from 'lodash'
import {Action,Effect,Reducer} from 'umi'
import sessionUtils from '@/utils/sessionUtils'
export interface IMenuModel {
  key:string
}

export interface MenuModalInterface {
  state:IMenuModel,
  reducers:{
    update:Reducer<IMenuModel>
  },
}

const MenuModal:MenuModalInterface= {
  state:{key:''},
  reducers: {
    update(state, {payload:key}){
      sessionUtils.setMenuKey(key)
      return {key}
    }
  }
}
export default MenuModal
