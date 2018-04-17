let express = require('express');
let router = express.Router();
let UserService = new (require('./../service/user.service'));


router.post('/login', function (req, res, next) {
    let body = req.body;
    UserService.login(body).then(success=>{
        res.send(success);
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
