var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const Place = mongoose.model('Place');
const SysCom = mongoose.model('SysCom');
const Freq = mongoose.model('Freq');
const User = mongoose.model('User');

router.get('/', function(req, res) {
  Freq.find({}, function(err, freq){
    if (err) console.log(err);
    res.render('freqs', {
      items: freq,
      path: req.baseUrl,
      login: req.user,
    });
  });
});

router.get('/:id', function(req, res){
  Freq.findById(req.params.id, function(err, freq){
    if (err) console.log(err);
    res.render('freq', {item: freq})
  });
});

router.post('/', function(req, res){
  Freq.create({
    Name: req.body.name,
    Desciption: req.body.desciption,
    Start: req.body.start * Math.pow(10,9),
    End: req.body.end * Math.pow(10,9),
    createdAt: Date.now()
  }, function(err, freq){
    if (err) console.log(err);
    res.redirect('/freq');
  });
});

router.post('/:id/delete', function(req, res){
  Freq.findByIdAndDelete(req.params.id, function(err, freq){
    if (err) console.log(err);
    res.redirect('/freq');
  });
});

router.post('/:id/put', function(req, res){
  Freq.findByIdAndUpdate(req.params.id, {
    Name: req.body.name,
    Desciption: req.body.desciption,
    updatedAt: Date.now()
  }, function(err, freq){
    if (err) console.log(err);
    res.redirect('/freq');
  });
});

module.exports = router;