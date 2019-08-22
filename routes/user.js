var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function(req, res) {
  models.User.findAll({}).then(function(user){
    res.render('users', {
      items: user,
      path: req.baseUrl,
      login: req.user,
    });
  });
});

router.get('/:id', function(req, res){
  models.User.findOne({where: {id: req.params.id}}).then(function(user){
    res.render('user', {item: user})
  });
});

router.post('/', function(req, res){
  models.User.create({
    Username: req.body.username,
    Password: req.body.password,
    Email: req.body.email,
    Desciption: req.body.desciption,
  }).then(function(){
    res.redirect('/user');
  });
});

router.post('/:id/delete', function(req, res){
  models.User.destroy({where: {id: req.params.id}}).then(function(){
    res.redirect('/user');
  });
});

router.post('/:id/put', function(req, res){
  models.User.update({
    Username: req.body.username,
    Password: req.body.password,
    Email: req.body.email,
    Desciption: req.body.desciption,
  }, {
    where: {
      id: req.params.id
    }}).then(function(){
    res.redirect('/user');
  });
});

module.exports = router;
