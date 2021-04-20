import React,{cloneElement} from 'react'
import {Tooltip} from 'antd'
import {useSelector} from 'umi'
import _ from 'lodash'


const containsArray=(parentArray?:Array<string>,childArray?:Array<string>):boolean=>{
  if(childArray){
    if(parentArray){
      return childArray.every(ele=>parentArray.includes(ele))
    }else{
      return false
    }
  }else{
    return true
  }
}

interface UserProps {
  permissions:Array<string>;
  roles:Array<string>};

interface AccessProps {
  permissions?:Array<string>;
  roles?:Array<string>;
  emptyNode?:React.ReactNode;
  disableEle?:boolean;
  overWriteProps?:object;
}

const Access:React.FC<AccessProps> = (props)=>{
  const user = useSelector(  (state:{user:UserProps})=>state.user)
  const {permissions,roles,emptyNode,disableEle,overWriteProps,children,...rest}=props
  if(containsArray(user.permissions,permissions) && containsArray(user.roles,roles)){
    const childrenElement =children as React.ReactElement
    return React.cloneElement(childrenElement,rest)
  }else{
    if(disableEle){
      const reactElement : React.ReactElement=cloneElement(children as React.ReactElement,{disabled:true,...overWriteProps})
      return <Tooltip placement="top" title="权限不足" trigger="click">{reactElement}</Tooltip>
    }else{
      const emptyNodeElement=emptyNode as React.ReactElement
      return emptyNodeElement || <></>
    }
  }
}

Access.displayName='Access'


export default Access
