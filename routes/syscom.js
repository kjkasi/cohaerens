var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function(req, res) {
  models.SysCom.findAll({}).then(function(syscom){
    res.render('syscoms', {
      syscoms: syscom,
      path: req.baseUrl
    });
  });
});

router.get('/:id', function(req, res){
  models.SysCom.findOne({where: {id: req.params.id}}).then(function(syscom){
    res.render('syscom', {syscoms: syscom})
  });
});

router.post('/', function(req, res){
  models.SysCom.create({
    Name: req.body.name,
    Desciption: req.body.desciption
  }).then(function(){
    res.redirect('/syscom');
  });
});

router.post('/:id/delete', function(req, res){
  models.SysCom.destroy({where: {id: req.params.id}}).then(function(){
    res.redirect('/syscom');
  });
});

router.post('/:id/put', function(req, res){
  models.SysCom.update({Name: req.body.name, Desciption: req.body.desciption}, {where: {id: req.params.id}}).then(function(){
    res.redirect('/syscom');
  });
});

module.exports = router;