var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  //req.session.views = req.session.views === void 0 ? 0 : req.session.views;
  async function getAll() {
    var place = await models.Place.findAll({}).then(); 
    var syscom = await models.SysCom.findAll({}).then();
    var freq = await models.Freq.findAll({}).then();

    await res.render('index', {
      places: place,
      syscoms: syscom,
      freqs: freq,
      //views: req.session.views,
      path: req.path,
      login: req.session.login,
    });
  }
  getAll();
  //req.session.views++;
});

router.get('/solve', function(req, res, next) {
  let f1 = Math.pow(8.28*10, 6);
  let f2 = Math.pow(40*10, 9);
  let f3 = Math.pow(2, 3);
  res.json([f1, f2, f3]);
});

router.get('/login', function(req, res){
  req.session.login = req.session.login === void 0 ? 0 : req.session.login;
  req.session.login = 1;
  res.redirect('/');
});

router.get('/logout', function(req, res){
  req.session.login = req.session.login === void 0 ? 0 : req.session.login;
  req.session.login = 0;
  res.redirect('/');
});


module.exports = router;
