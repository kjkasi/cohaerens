var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Place = mongoose.model('Place');
var SysCom = mongoose.model('SysCom');
var Freq = mongoose.model('Freq');
var User = mongoose.model('User');

router.get('/', function(req, res) {
  async function getAll() {
    var place = await Place.find(); 
    var syscom = await SysCom.find();
    var freq = await Freq.find();

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
