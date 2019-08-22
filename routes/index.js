var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function(req, res) {
  async function getAll() {
    var place = await models.Place.findAll(); 
    var syscom = await models.SysCom.findAll();
    var freq = await models.Freq.findAll();

    await res.render('index', {
      places: place,
      syscoms: syscom,
      freqs: freq,
      path: req.path,
      login: req.user,
    });
  }
  getAll();
});

router.get('/login', function(req, res){
  res.render('login', {
    result : req.user,
    login: req.user,
  });
});

module.exports = router;
