let express = require('express');
let router = express.Router();
let UserService = require('./../service/user.service');


/* GET users listing. */
router.get('/index', function (req, res, next) {
    UserService.register({id: 123, name: 'li', password: '1243'});
    res.send({data:'',msg:'请求成功',code:0});
});

router.get('/user', function (req, res, next) {
    UserService.getUser().then(result => {
        res.send(result)
    }, err => {
        res.send(err)
    })
});

module.exports = router;
