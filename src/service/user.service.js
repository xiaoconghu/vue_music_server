/**
 * Created by xiaoconghu on 2018/4/14.
 */
let userModel = require('../model/user.model');
let crypto = require('crypto');
let Result = require('../utils/common-utils');
let {get_uuid} = require('../utils/common-model');

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
                resolve(Result.getSuccessInstance());
            }, failed => {
                reject(Result.getParameterErrorInstance());
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
    login(req) {
        return new Promise((resolve, reject) => {
            let {userName} = req.body;
            userModel.find({userName}).then(success => {
                if (success && success.length > 0) {
                    let md5 = crypto.createHash("md5");
                    let password = md5.update(req.body.password).digest('hex').toUpperCase();
                    if (password === success[0].password) {
                        // 将用户存入session
                        req.session.user = success[0];
                        console.log(req.session);
                        let uuid = get_uuid();
                        resolve(Result.getSuccessInstance(uuid))
                    } else {
                        reject(Result.getPasswordErrorInstance())
                    }
                } else {
                    reject(Result.getNetWrokErrorInstance())
                }
            }, failed => {
                reject(failed)
            })
        })
    }
    // getUserDetail(){
    //     return new Promise((resolve, reject) => {
    //         userModel.find({}).populate('')
    //     })
    // }
}

module.exports = UserService;