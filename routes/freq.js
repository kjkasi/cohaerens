var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function(req, res) {
  models.Freq.findAll({}).then(function(freq){
    res.render('freqs', {items: freq});
  });
});

router.get('/:id', function(req, res){
  models.Freq.findOne({where: {id: req.params.id}}).then(function(freq){
    res.render('freq', {item: freq})
  });
});

router.post('/', function(req, res){
  models.Freq.create({
    Name: req.body.name,
    Desciption: req.body.desciption,
    Start: req.body.start * Math.pow(10,9),
    End: req.body.end * Math.pow(10,9)
  }).then(function(){
    res.redirect('/freq');
  });
});

router.post('/:id/delete', function(req, res){
  models.Freq.destroy({where: {id: req.params.id}}).then(function(){
    res.redirect('/freq');
  });
});

router.post('/:id/put', function(req, res){
  models.Freq.update({Name: req.body.name, Desciption: req.body.desciption}, {where: {id: req.params.id}}).then(function(){
    res.redirect('/freq');
  });
});

module.exports = router;