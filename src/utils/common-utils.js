/**
 * Created by xiaoconghu on 2018/4/14.
 */
let {RESULT_CODE} = require('../utils/common-model');

class Result {
    constructor(code, msg, data = []) {
        this.code = code;
        this.data = data;
        this.msg = msg
    }

    static getSuccessInstance(data = []) {
        return new Result(RESULT_CODE.SUCCESS.code, RESULT_CODE.SUCCESS.msg, data)
    }
    static getNetWrokErrorInstance(data = []) {
       return new Result(RESULT_CODE.WEAK_NET_WORK, RESULT_CODE.WEAK_NET_WORK.msg, data)
    }
    static getParameterErrorInstance(data = []) {
       return new Result(RESULT_CODE.PARAMETER_ERROR.code, RESULT_CODE.PARAMETER_ERROR.msg, data)
    }

    static getPasswordErrorInstance(data = []) {
       return new Result(RESULT_CODE.PASS_WORD_ERROR.code, RESULT_CODE.PASS_WORD_ERROR.msg, data)
    }

    static getUserLoginErrorInstance(data = []) {
        return new Result(RESULT_CODE.USER_LOGIN_ERROR.code, RESULT_CODE.USER_LOGIN_ERROR.msg, data)
    }
}

module.exports = Result;