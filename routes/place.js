var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function(req, res) {
  models.Place.findAll({}).then(function(place){
    res.render('places', {
      places: place,
      path: req.baseUrl,
      login: req.user,
    });
  });
});

router.get('/:id', function(req, res){
  models.Place.findOne({where: {id: req.params.id}}).then(function(place){
    res.render('place', {place: place})
  });
});

router.post('/', function(req, res){
  models.Place.create({
    //Name: req.query.name
    Name: req.body.name,
    Desciption: req.body.desciption
  }).then(function(){
    res.redirect('/place');
  });
})

router.post('/:id/delete', function(req, res){
  models.Place.destroy({where: {id: req.params.id}}).then(function(){
    res.redirect('/place');
  });
});

router.post('/:id/put', function(req, res){
  console.log(req.body);
  models.Place.update({Name: req.body.name, Desciption: req.body.desciption}, {where: {id: req.params.id}}).then(function(){
    res.redirect('/place');
  });
});

module.exports = router;
