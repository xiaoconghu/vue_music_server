/**
 * Created by xiaoconghu on 2018/4/17.
 */
const mongoose = require('mongoose');
let Db = require('../db-config/db');

let Schema = mongoose.Schema;
let cdListSchema = new Schema({
    userId: {
        type: Schema.Types.objectId,
        ref:'user'
    },
    cDId: String,
    cdName: String,
    songNum: Number,
    description: String,
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

module.exports = new Db().getConnection().model('cd_list', cdListSchema);