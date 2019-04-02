var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET place listing. */
router.get('/', function(req, res, next) {
  models.Place.findAll({}).then(places => res.json(users));
});

router.post('/', function(req, res, next){
  models.Place.create({
    Name: req.query.name
  }).then(function(){
    console.log(req.query.name);
    res.redirect('/place');
  });
})

module.exports = router;
