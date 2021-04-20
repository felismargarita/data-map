package com.felis.data.util;

import com.alibaba.fastjson.JSONObject;
import com.felis.data.constants.Constants;
import com.felis.data.entity.User;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.session.Session;

public class UserUtil {

    public static User getUser(){
        Session session = SecurityUtils.getSubject().getSession();
        JSONObject info = (JSONObject) session.getAttribute(Constants.SESSION_USER_PERMISSION);
        JSONObject userJson = info.getJSONObject("user");
        return JSONObject.parseObject(userJson.toJSONString(), User.class);
    }
}
