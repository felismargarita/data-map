package com.felis.data.util;

import com.alibaba.fastjson.JSONObject;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import javax.annotation.Resource;


@Component(value = "WeiXin")
public class WeiXin {

    private static final String url = "http://127.0.0.1:9999/message/send";
    private static final String token = "2ca48791d2254b548379617bce7bb67b";

    @Resource
    private RestTemplateBuilder restTemplateBuilder;

    @Async
    public void message(String account,String content,String weixinToken){
        RestTemplate restTemplate=restTemplateBuilder.build();
        JSONObject info=new JSONObject();
        info.put("receiver",account);
        info.put("content",content);
        info.put("safeToken",weixinToken);
        restTemplate.postForObject(url,info, JSONObject.class);
    }


    public void send(String account,String content){
        message(account,content,token);
    }
}
