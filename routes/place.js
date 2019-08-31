var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Place = mongoose.model('Place');
var SysCom = mongoose.model('SysCom');
var Freq = mongoose.model('Freq');
var User = mongoose.model('User');

router.get('/', function(req, res) {
  Place.find({}, function(err, place){
    if (err) console.log(err);
    res.render('places', {
      items: place,
      path: req.baseUrl,
      login: req.user
    });
  });
});

router.get('/:id', function(req, res){
  Place.findById(req.params.id, function(err, place){
    if (err) console.log(err);
    res.render('place', {item: place});
  });
});

router.post('/', function(req, res){
  Place.create({
    Name: req.body.name,
    Desciption: req.body.desciption,
    createdAt: Date.now()
  }, function(err, place){
    if (err) console.log(err);
    res.redirect('/place');
  });
})

router.post('/:id/delete', function(req, res){
  Place.findByIdAndDelete(req.params.id, function(err, place){
    if (err) console.log(err);
    res.redirect('/place');
  });
});

router.post('/:id/put', function(req, res){
  Place.findByIdAndUpdate(req.params.id, {
    Name: req.body.name,
    Desciption: req.body.desciption,
    updatedAt: Date.now()
  }, function(err, place){
    if (err) console.log(err);
    res.redirect('/place');
  });
});

module.exports = router;
