var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Place = mongoose.model('Place');
var SysCom = mongoose.model('SysCom');
var Freq = mongoose.model('Freq');
var User = mongoose.model('User');

router.get('/', function(req, res) {
  User.find({}, function(err, user){
    if (err) console.log(err);
    res.render('users', {
      items: user,
      path: req.baseUrl,
      login: req.user,
    });
  });
});

router.get('/:id', function(req, res){
  User.findById(req.params.id, function(err, user){
    if (err) console.log(err);
    res.render('user', {item: user})
  });
});

router.post('/', function(req, res){
  User.create({
    Username: req.body.username,
    Password: req.body.password,
    Email: req.body.email,
    Desciption: req.body.desciption,
    createdAt: Date.now()
  }, function(err, user){
    if (err) console.log(err);
    res.redirect('/user');
  });
});

router.post('/:id/delete', function(req, res){
  User.findByIdAndDelete(req.params.id, function(err, user){
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
  }, function(err, user){
    if (err) console.log(err);
    res.redirect('/user');
  });
});

module.exports = router;
