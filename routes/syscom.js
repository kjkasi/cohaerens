var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function(req, res) {
  models.SysCom.findAll({}).then(function(syscom){
    res.render('syscoms', {syscom: syscom});
  });
});

module.exports = router;