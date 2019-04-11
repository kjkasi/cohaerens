var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function(req, res) {
  models.Freq.findAll({}).then(function(freq){
    //res.render('syscoms', {syscoms: syscom});
    res.json(DATABSE_URL);
  });
});

module.exports = router;