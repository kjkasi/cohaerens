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
  User.find({}, function(err, items){
    if (err) console.log(err);
    res.render('user', {
      items: items,
      path: req.baseUrl,
      login: req.user,
    });
  });
});

router.get('/:id', function(req, res){
  User.findById(req.params.id, function(err, item){
    if (err) console.log(err);
    res.render('user-edt', {item: item})
  });
});

router.post('/', function(req, res){
  User.create({
    Username: req.body.username,
    Password: req.body.password,
    Email: req.body.email,
    Desciption: req.body.desciption,
    createdAt: Date.now()
  }, function(err, item){
    if (err) console.log(err);
    res.redirect('/user');
  });
});

router.post('/:id/delete', function(req, res){
  User.findByIdAndDelete(req.params.id, function(err, item){
    if (err) console.log(err);
    res.redirect('/user');
  });
});

router.post('/:id/put', function(req, res){
  User.findByIdAndUpdate(req.params.id, {
    Username: req.body.username,
    Password: req.body.password,
    Email: req.body.email,
    Desciption: req.body.desciption,
    updatedAt: Date.now()
  }, function(err, item){
    if (err) console.log(err);
    res.redirect('/user');
  });
});

module.exports = router;
