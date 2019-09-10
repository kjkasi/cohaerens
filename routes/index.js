var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const Place = mongoose.model('Place');
const SysCom = mongoose.model('SysCom');
const Freq = mongoose.model('Freq');
const User = mongoose.model('User');
const passport = require('passport');
const Ensure = require('connect-ensure-login');

router.get('/', Ensure.ensureLoggedIn(), function(req, res) {
  async function getAll() {
    const place = await Place.find(); 
    const syscom = await SysCom.find();
    const freq = await Freq.find();

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
