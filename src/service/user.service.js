/**
 * Created by xiaoconghu on 2018/4/14.
 */
let userModel = require('../model/user.model');

class UserService {
    constructor() {

    }

    register(user) {
        return new Promise((resolve, reject) => {
            userModel.create(user).then(success => {
                resolve(success);
            }, failed => {
                reject(failed);
            })
        })

    }

    getUser() {
        return new Promise((resolve, reject) => {
            userModel.find({}).then(success => {
                resolve(success)
            }, failed => {
                reject(failed)
            })
        })
    }

    login(body) {
        return new Promise((resolve, reject) => {
            userModel.find(body).then(success => {
                resolve(success)
            }, failed => {
                reject(failed)
            })
        })
    }
}

module.exports = UserService;