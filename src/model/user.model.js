/**
 * Created by xiaoconghu on 2018/4/14.
 */
const mongoose = require('mongoose');
let Db = require('../db-config/db');


let Schema = mongoose.Schema;
let userSchema = new Schema({
    userName: String,
    password: String,
});

module.exports=new Db().getConnection().model('user', userSchema);