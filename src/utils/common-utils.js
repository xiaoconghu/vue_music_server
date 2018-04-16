/**
 * Created by xiaoconghu on 2018/4/14.
 */
class Result {
    constructor(code, msg, data = []) {
        this.code = code;
        this.data = data;
        this.msg = msg
    }
}

module.exports = Result;