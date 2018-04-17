/**
 * Created by xiaoconghu on 2018/4/17.
 */
let express = require('express');
let router = express.Router();
let cdListService = new (require('./../service/cd-list.service'));

router.post('/insert', function (req, res, next) {
    let body = req.body;
    cdListService.insertList(body).then(success => {
        res.send(success);
    }, failed => {
        res.send(failed)
    });
});
router.delete('/delete', function (req, res, next) {
    let params = req.query;
    cdListService.deletList(params).then(success => {
        res.send(success);
    }, failed => {
        res.send(failed)
    });
});
router.put('/update', function (req, res, next) {
    let body = req.body;
    cdListService.insertList(body).then(success => {
        res.send(success);
    }, failed => {
        res.send(failed)
    });
});
router.get('/queryCdList', function (req, res, next) {
    let params = req.query;
    cdListService.queryList().then(success => {
        res.send(success);
    }, failed => {
        res.send(failed)
    });
});