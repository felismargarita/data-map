import React from 'react'
import Logo from '@/components/logo/Logo'
import {Form,Input,Button} from 'antd'
const Login = ()=>{

  return (
    <div className="login-page">
      <div>
        <div className="login-page-form">
          <div className="login-page-title">
            <Logo rotate/><span className="login-page-title-text">Data Map</span>
          </div>
          <Form>
            <Form.Item name="username" rules={[{required:true,message:'用户名必填'}]}>
              <Input placeholder="请输入用户名"/>
            </Form.Item>
            <Form.Item name="password" rules={[{required:true,message:'密码必填'}]}>
              <Input.Password placeholder="请输入密码"/>
            </Form.Item>
            <Form.Item>
              <Button block htmlType="submit" type="primary">登陆</Button>
            </Form.Item>
          </Form>
        </div>

      </div>
    </div>
  )
}

export default Login