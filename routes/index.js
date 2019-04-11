var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  async function getAll() {
    var place = await models.Place.findAll({}).then(); 
    var syscom = await models.SysCom.findAll({}).then();
    var freq = await models.Freq.findAll({}).then();

    await res.render('index', {
      places: place,
      syscoms: syscom,
      freqs: freq
    });
  }
  getAll();
});

router.get('/solve', function(req, res, next) {
  let f1 = Math.pow(8.28*10, 6);
  let f2 = Math.pow(40*10, 9);
  let f3 = Math.pow(2, 3);
  res.json([f1, f2, f3]);
});


module.exports = router;
