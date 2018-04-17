/**
 * Created by xiaoconghu on 2018/4/16.
 * 歌曲表
 */

const mongoose = require('mongoose');
let Db = require('../db-config/db');


let Schema = mongoose.Schema;
let playlistSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    songId: String,
    cDId: {
        type: Schema.Types.ObjectId,
        ref: 'cd_list'
    },
    songName: String,
    singerName: String,
    fileName: String,
    songUrl: String,
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

module.exports = new Db().getConnection().model('playlist', playlistSchema);