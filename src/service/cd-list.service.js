/**
 * Created by xiaoconghu on 2018/4/17.
 */
let cdListModel = require('../model/cd-list.model');
let Result = require('../utils/common-utils');
let mongoose = require('mongoose');

class cdListService {

    constructor() {

    }

    /**
     * 新增歌单
     * @param body
     * @returns {Promise<any>}
     */
    insertList(body) {
        return new Promise((resolve, reject) => {
            cdListModel.create(body).then(success => {
                resolve(Result.getSuccessInstance());
            }, failed => {
                reject(Result.getParameterErrorInstance());
            })
        })
    }

    /**
     * 批量删除歌单
     * @param ids{Array}
     * @returns {Promise<any>}
     */
    deletList(ids) {
        return new Promise((resolve, reject) => {
            cdListModel.remove({_id: {$in: ids}}).then(success => {
                resolve(Result.getSuccessInstance())
            }, failed => {
                reject(Result.getParameterErrorInstance())
            })
        })
    }

    /**
     * 修改歌单
     * @param body
     * @returns {Promise<any>}
     */
    updataList(body) {
        return new Promise((resolve, reject) => {
            cdListModel.findByIdAndUpdate(body).then(success => {
                resolve()
            }, failed => {

            })
        })
    }

    /**
     * 获取当前用户下的
     * 分页查询歌单列表
     * @returns {Promise<any>}
     */
    queryList(body) {
        return new Promise((resolve, reject) => {
            let pageSize = body.pageSize;
            let pageIndex = body.pageIndex;
            cdListModel.find({'userId': mongoose.Types.ObjectId(body.userId)})
                .skip((pageIndex - 1) * pageSize)
                .limit(pageSize)
                .sort({'_id': -1})
                .exec((err, success) => {
                    if (err) {
                        reject(err);
                        return
                    }
                    resolve(Result.getSuccessInstance(success))
                })
        })
    }

}

module.exports = cdListService;