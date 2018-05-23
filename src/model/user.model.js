/**
 * Created by xiaoconghu on 2018/4/14.
 * 用户表
 */
const mongoose = require('mongoose');
let Db = require('../db-config/db');


let Schema = mongoose.Schema;
let userSchema = new Schema({
    userName: String,
    password: String,
    userCode: String,
    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        }
    }
});

module.exports = new Db().getConnection().model('user', userSchema);