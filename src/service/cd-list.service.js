/**
 * Created by xiaoconghu on 2018/4/17.
 */
let cdListModel = require('../model/cd-list.model');
let Result = require('../utils/common-utils');
let {RESULT_CODE} = require('../utils/common-model');


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
     * 删除歌单
     * @param ids
     * @returns {Promise<any>}
     */
    deletList(ids) {
        return new Promise((resolve, reject) => {
            cdListModel.findByIdAndRemove(id).then(success => {
                resolve()
            }, failed => {
                reject()
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

}