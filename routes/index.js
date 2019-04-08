var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  models.Place.findAll({}).then(function(place){
    res.render('index', {places: place});
  });
});

module.exports = router;
