/**
 * Created by xiaoconghu on 2018/5/21.
 */
let express = require('express');
let users  = require('./users');
let playlist  = require('./playlist');
const routers = {
    users,
    playlist
};

let router = express();

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

Object.keys(routers).forEach(key => {
    router.use(`/${key}`, routers[key]);
});

module.exports = router;