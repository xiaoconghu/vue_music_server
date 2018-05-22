/**
 * Created by xiaoconghu on 2018/4/16.
 */
const RESULT_CODE = {
    SUCCESS: {code: 0, msg: '请求成功'},
    WEAK_NET_WORK: {code: -1, msg: '网络异常'},
    PARAMETER_ERROR: {code: 10101, msg: '参数错误'},
    PASS_WORD_ERROR: {code: 10111, msg: '用户名或密码错误'},
    USER_LOGIN_ERROR: {code: 401, msg: '尚未登陆或登陆失效'}
};
function get_uuid(){
    let s = [];
    let hexDigits = "0123456789abcdef";
    for (let i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
    s[8] = s[13] = s[18] = s[23] = "-";

    let uuid = s.join("");
    return uuid;
}
module.exports = {
    RESULT_CODE,
    get_uuid
}
