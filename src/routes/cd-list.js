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
router.delete('/delete/:ids', function (req, res, next) {
    let ids = JSON.parse(req.params.ids);
    cdListService.deletList(ids).then(success => {
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
router.post('/queryCdList', function (req, res, next) {
    let params = req.body;
    cdListService.queryList(params).then(success => {
        res.send(success);
    }, failed => {
        res.send(failed)
    });
});
module.exports = router;