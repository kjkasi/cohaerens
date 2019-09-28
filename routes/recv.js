const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Recv = mongoose.model('Recv');
const passport = require('passport');
const Ensure = require('connect-ensure-login');

router.get('/', Ensure.ensureLoggedIn(), function(req, res) {
  Recv.find({}, function(err, items){
    if (err) console.log(err);
    res.render('recv', {
      items: items,
      path: req.baseUrl,
      login: req.user
    });
  });
});

router.get('/:id', function(req, res){
  Recv.findById(req.params.id, function(err, item){
    if (err) console.log(err);
    res.render('recv-edt', {item: item});
  });
});

router.post('/', function(req, res){
  Recv.create({
    Name: req.body.name,
    Desciption: req.body.desciption,
    createdAt: Date.now()
  }, function(err, place){
    if (err) console.log(err);
    res.redirect('/recv');
  });
})

router.post('/:id/delete', function(req, res){
  Recv.findByIdAndDelete(req.params.id, function(err, item){
    if (err) console.log(err);
    res.redirect('/recv');
  });
});

router.post('/:id/put', function(req, res){
  Recv.findByIdAndUpdate(req.params.id, {
    Name: req.body.name,
    Desciption: req.body.desciption,
    updatedAt: Date.now()
  }, function(err, item){
    if (err) console.log(err);
    res.redirect('/recv');
  });
});

module.exports = router;
