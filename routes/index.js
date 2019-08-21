var express = require('express');
var router = express.Router();
var models = require('../models');
//var passport = require('passport');

router.get('/', function(req, res) {
  async function getAll() {
    var place = await models.Place.findAll(); 
    var syscom = await models.SysCom.findAll();
    var freq = await models.Freq.findAll();

    //console.log('req.user: ' + JSON.stringify(req.session.user));
    //console.log('req.admin: ' + JSON.stringify(req.admin));

    await res.render('index', {
      places: place,
      syscoms: syscom,
      freqs: freq,
      path: req.path,
      //login: req.session.login,
      //login: req.session.passport
      //login: {"id":1,"Username":"admin","Password":"admin","Email":"admin@localhost.localdomain","Desciption":null,"createdAt":"2019-07-07T07:23:10.488Z","updatedAt":"2019-07-07T07:23:10.488Z"},
    });
  }
  getAll();
});

router.get('/login', function(req, res){
  res.render('login', {
    result : req.user
  });
});

router.get('/admin', function(req, res){
  res.render('info', {
    //result: req.user 
    result: req.session.passport,
    login: req.isAuthenticated()
  });
});

module.exports = router;
