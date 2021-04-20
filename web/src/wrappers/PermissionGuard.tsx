import React from 'react'
import {IUserModel} from '@/models/user'
import { Redirect,useSelector } from 'umi' 
const PermissionGuard:React.FC<any> = (props)=>{
  const {permissions} = useSelector((state:{user:IUserModel})=>state.user)
  if(permissions.length === 0){
    return <div/>
  }
  const {menu} = props.route
  if(!menu || permissions.some(perm=>perm.split(':')[0] === menu)){
    return props.children 
  }
  return <Redirect to="/403"/>
}

export default PermissionGuard