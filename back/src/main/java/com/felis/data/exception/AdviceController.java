package com.felis.data.exception;


import com.alibaba.fastjson.JSONObject;
import com.felis.data.constants.ErrorEnum;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;


@RestControllerAdvice
public class AdviceController {

    @ExceptionHandler(DataMapException.class)
    public JSONObject DataMapExceptionHandler(DataMapException ex){
        ex.printStackTrace();
        JSONObject info = new JSONObject();
        info.put("code",ErrorEnum.E_20013);
        info.put("msg",ex.getMessage());
        return info;
    }

    @ExceptionHandler(RuntimeException.class)
    public JSONObject RuntimeExceptionHandler(RuntimeException ex){
        JSONObject info = new JSONObject();
        info.put("code",ErrorEnum.E_20013);
        info.put("msg",ex.getMessage());
        return info;
    }
    /**
     * 校验异常
     */
    @ExceptionHandler(ConstraintViolationException.class)
    public JSONObject handlerConstraintViolationException(ConstraintViolationException ex) {
        Set<ConstraintViolation<?>> violations = ex.getConstraintViolations();
        List<String> msg =  new ArrayList<>();
        for (ConstraintViolation<?> item : violations){
            msg.add(item.getMessage());
        }
        JSONObject rs =  new JSONObject();
        rs.put("code",ErrorEnum.E_20012);
        rs.put("msg",msg.toString());
        return rs;
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public JSONObject handlerMethodArgumentNotValidException(MethodArgumentNotValidException ex) {
        ex.printStackTrace();
        List<ObjectError> list = ex.getBindingResult().getAllErrors();
        List<String> msg =  new ArrayList<>();
        for (ObjectError error : list){
            msg.add(error.getDefaultMessage());
        }
        JSONObject rs =  new JSONObject();
        rs.put("code",ErrorEnum.E_20012);
        rs.put("msg",msg.toString());
        rs.put("info",null);
        return rs;
    }
}
