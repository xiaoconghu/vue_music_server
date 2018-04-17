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

module.exports = {
    RESULT_CODE
}
