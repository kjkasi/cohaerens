var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET place listing. */
router.get('/', function(req, res, next) {
  models.Place.findAll().then(function(places){
    res.json(places);
  });
});

router.post('/', function(req, res, next){
  res.send('POST place')
})

module.exports = router;
