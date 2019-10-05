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
  SysCom.find({}, function(err, items){
    if (err) console.log(err);
    res.render('syscom', {
      items: items,
      path: req.baseUrl,
      login: req.user
    });
  });
});

router.get('/:id', function(req, res){
  SysCom.findById(req.params.id, function(err, item){
    if (err) console.log(err);
    res.render('syscom-edt', {item: item})
  });
});

router.post('/', function(req, res){
  SysCom.create({
    Name: req.body.name,
    Desciption: req.body.desciption,
    createdAt: Date.now()
  }, function(err, item){
    if (err) console.log(err);
    res.redirect('/syscom');
  });
});

router.post('/:id/delete', function(req, res){
  SysCom.findByIdAndDelete(req.params.id, function(err, item){
    if (err) console.log(err);
    res.redirect('/syscom');
  });
});

router.post('/:id/put', function(req, res){
  SysCom.findByIdAndUpdate(req.params.id, {
    Name: req.body.name,
    Desciption: req.body.desciption,
    updatedAt: Date.now()
  }, function(err, item){
    if (err) console.log(err);
    res.redirect('/syscom');
  });
});

module.exports = router;