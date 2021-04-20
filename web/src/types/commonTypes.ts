export interface ILoginInfo {
  permissionCode:string[]
  userInfo:{
    nickname:string
    username:string
  }
  tokenInfo:{
    tokenName:string
    tokenValue:string
  }
}

export interface PaginationProps {
  current:number
  size:number,
  order?:{
    column:string
    asc:boolean
  }
}

export interface PagingRes<T> {
  totalPage:number
  totalCount:number
  list:Array<T>
}

export interface IBaseSelectorOption {
  id:number
  code:string
  name:string
  status:number
  isDelete?:'Y'|'N'
}
export type IBaseSelector = Array<IBaseSelectorOption>

export type PermissionCodeType='list'|'add'|'update'|'delete'


export type ModalFormMode = 'add'|'edit'|'search'|'check'|'copy'

export type HttpMethodType = 'get'|'GET'|'post'|'POST'|'put'|'PUT'|'delete'|'DELETE'

export type PageType = 'add'|'edit'