var express = require('express');
var router = express.Router();
var db = require('./../models/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.collection('xiao').find().toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
  });
  res.render('index', { title: 'Express' });
});

module.exports = router;
