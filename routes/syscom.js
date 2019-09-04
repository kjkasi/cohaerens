var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const Place = mongoose.model('Place');
const SysCom = mongoose.model('SysCom');
const Freq = mongoose.model('Freq');
const User = mongoose.model('User');

router.get('/', function(req, res) {
  SysCom.find({}, function(err, syscom){
    if (err) console.log(err);
    res.render('syscoms', {
      items: syscom,
      path: req.baseUrl,
      login: req.user
    });
  });
});

router.get('/:id', function(req, res){
  SysCom.findById(req.params.id, function(err, syscom){
    if (err) console.log(err);
    res.render('syscom', {item: syscom})
  });
});

router.post('/', function(req, res){
  SysCom.create({
    Name: req.body.name,
    Desciption: req.body.desciption,
    createdAt: Date.now()
  }, function(err, syscom){
    if (err) console.log(err);
    res.redirect('/syscom');
  });
});

router.post('/:id/delete', function(req, res){
  SysCom.findByIdAndDelete(req.params.id, function(err, syscom){
    if (err) console.log(err);
    res.redirect('/syscom');
  });
});

router.post('/:id/put', function(req, res){
  SysCom.findByIdAndUpdate(req.params.id, {
    Name: req.body.name,
    Desciption: req.body.desciption,
    updatedAt: Date.now()
  }, function(err, syscom){
    if (err) console.log(err);
    res.redirect('/syscom');
  });
});

module.exports = router;