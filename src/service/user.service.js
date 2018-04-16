/**
 * Created by xiaoconghu on 2018/4/14.
 */
let userModel = require('../model/user.model');
let crypto = require('crypto');
let Result = require('../utils/common-utils');
let {RESULT_CODE} = require('../utils/common-model');


class UserService {
    constructor() {

    }

    /**
     * 注册
     * @param user
     * @returns {Promise<any>}
     */
    register(user) {
        return new Promise((resolve, reject) => {
            let md5 = crypto.createHash("md5");
            md5.update(user.password);
            let str = md5.digest('hex').toUpperCase();
            user.password = str;
            userModel.create(user).then(success => {
                resolve(new Result(RESULT_CODE.SUCCESS.code, RESULT_CODE.SUCCESS.msg));
            }, failed => {
                reject(new Result(RESULT_CODE.PARAMETER_ERROR.code, RESULT_CODE.PARAMETER_ERROR.msg));
            })
        })

    }

    /**
     * 获取所有的用户
     * @returns {Promise<any>}
     */
    getUser() {
        return new Promise((resolve, reject) => {
            userModel.find({}).then(success => {
                resolve(success)
            }, failed => {
                reject(failed)
            })
        })
    }

    /**
     * 用户登陆
     * @param body
     * @returns {Promise<any>}
     */
    login(body) {
        return new Promise((resolve, reject) => {
            let {userName} =body ;
            userModel.find({userName}).then(success => {
                if (success && success.length > 0) {
                    let md5 = crypto.createHash("md5");
                    let password= md5.update(body.password).digest('hex').toUpperCase();
                    if (password === success[0].password) {
                        resolve(new Result(RESULT_CODE.SUCCESS.code,RESULT_CODE.SUCCESS.msg))
                    } else {
                        reject(new Result(RESULT_CODE.PASS_WORD_ERROR.code, RESULT_CODE.PASS_WORD_ERROR.msg))
                    }
                } else {
                    reject(new Result(RESULT_CODE.WEAK_NET_WORK.code,RESULT_CODE.WEAK_NET_WORK.msg))
                }
            }, failed => {
                reject(failed)
            })
        })
    }
}

module.exports = UserService;