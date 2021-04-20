package com.felis.data.controller;


import com.alibaba.fastjson.JSONObject;
import com.felis.data.constants.ErrorEnum;
import com.felis.data.entity.User;
import com.felis.data.util.CommonUtil;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {


    @PostMapping("/login")
    public JSONObject login(@RequestBody User user){
        String username = user.getUsername();
        String password = user.getPassword();
        Subject currentUser = SecurityUtils.getSubject();
        UsernamePasswordToken token = new UsernamePasswordToken(username, password,false);
        try {
            currentUser.login(token);
            return CommonUtil.successJson();
        }catch (AuthenticationException e){
            return CommonUtil.errorJson(ErrorEnum.E_20010);
        }
    }
}
