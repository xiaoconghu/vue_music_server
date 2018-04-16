let express = require('express');
let router = express.Router();
let UserService = new (require('./../service/user.service'));
let Result =  require('../utils/common-utils');
let {RESULT_CODE} = require('../utils/common-model');


router.post('/login', function (req, res, next) {
    let body = req.body;
    UserService.login(body).then(success=>{
        res.send(new Result(RESULT_CODE.SUCCESS.code,RESULT_CODE.SUCCESS.msg));
    },failed=>{
        res.send(failed)
    });
});

router.post('/register', function (req, res, next) {
    let body = req.body;
    UserService.register(body).then(success => {
        res.send(success);
    }, failed => {
        res.send(failed)
    });
});

router.get('/user', function (req, res, next) {
    UserService.getUser().then(result => {
        res.send(result)
    }, err => {
        res.send(err)
    })
});


module.exports = router;
