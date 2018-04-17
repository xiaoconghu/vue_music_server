/**
 * Created by xiaoconghu on 2018/4/16.
 * 歌曲表
 */

const mongoose = require('mongoose');
let Db = require('../db-config/db');


let Schema = mongoose.Schema;
let playlistSchema = new Schema({
    userId: String,
    songId: String,
    songName: String,
    singerName: String,
    fileName: String,
    songUrl: String,
});

module.exports = new Db().getConnection().model('playlist', playlistSchema);