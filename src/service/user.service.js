/**
 * Created by xiaoconghu on 2018/4/14.
 */
let userModel = require('../model/user.model');

class UserService {
    constructor() {

    }

    static register(user) {
        return new Promise((resolve, reject) => {
            userModel.create(user).then(success=>{
                resolve(success) ;
            },failed=>{
                reject(failed) ;
            })
        })

    }
    static getUser(){
        return new Promise((resolve, reject) => {
            userModel.find({}).then(success=>{
                resolve(success)
            },failed=>{
                reject(failed)
            })
        })

    }
}

module.exports = UserService;