/**
 * Created by xiaoconghu on 2018/4/14.
 */
let mongoose = require("mongoose");
const mongoConfig = "mongodb://localhost/xiaoconghu";

class Db {
    constructor() {
        this._conn = null;
    }

    static getInstance() {
        if (Db._instance) {
            Db._instance = new Db();
        }
        return this._instance;
    }

    getConnection() {
        if (this._conn) {
            return this._conn;
        }
        this._conn = mongoose.createConnection(mongoConfig, {
            useMongoClinet: false
        });
        this._conn.then(result => {
            console.log('数据库' + mongoConfig + '已连接');
        });
        return this._conn;
    }
}

module.exports = Db;