package com.felis.data.constants;


public enum ErrorEnum {
    E_400(400, "请求处理异常，请稍后再试"),
    E_500(500, "请求方式有误,请检查 GET/POST"),
    E_501(501, "请求路径不存在"),
    E_502(502, "权限不足"),
    E_503(503, "内部错误"),
    E_20010(20010, "用户或密码错误"),
    E_20011(20011, "登陆已过期,请重新登陆"),
    E_20012(20012, "参数异常"),
    E_20013(20013, "DataMap异常"),
    ;

    private int errorCode;

    private String errorMsg;

    ErrorEnum(int errorCode, String errorMsg) {
        this.errorCode = errorCode;
        this.errorMsg = errorMsg;
    }

    public int getErrorCode() {
        return errorCode;
    }

    public String getErrorMsg() {
        return errorMsg;
    }

}