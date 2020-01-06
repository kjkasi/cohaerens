var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const Place = mongoose.model('Place');
const SysCom = mongoose.model('SysCom');
const Freq = mongoose.model('Freq');
const User = mongoose.model('User');
const Recv = mongoose.model('Recv');
const TEC = mongoose.model('TEC');
const Research = mongoose.model('Research');

router.get('/place', function(req, res) {

  const page = Number(req.query.page);
  const perPage = Number(req.query.perPage);
  const offset = (page - 1) * perPage;
  const limit = perPage;

  const query = Place.find({});
  query.skip(offset).limit(limit);
  query.exec(function(err, items){
    if (err) console.log(err);
    Place.countDocuments({}, function (err, count) {
      if (err) console.log(err);
      res.json({
        count: count,
        result: items
      });  
    });
  });
});

router.get('/tec/list', function(req, res) {

  const page = Number(req.query.page);
  const perPage = Number(req.query.perPage);
  const offset = (page - 1) * perPage;
  const limit = perPage;

  const query = TEC.find({});
  query.skip(offset).limit(limit);
  query.exec(function(err, items){
    if (err) console.log(err);
    TEC.countDocuments({}, function (err, count) {
      if (err) console.log(err);
      res.json({
        count: count,
        result: items
      });  
    });
  });
});

router.get('/tec/:id', function(req, res) {
  TEC.findById(req.params.id, function(err, item) {
    if (err) console.log(err);
    res.json(item);
  });
});

router.post('/tec', function(req, res) {
  TEC.create({
    created: req.body.created,
    sourses: req.body.sourses,
    satellite: req.body.satellite,
    interval: req.body.interval,
    site: req.body.site,
    position: req.body.position,
    format: req.body.format,
    rows: req.body.rows
  }, function(err, item){
    if (err) console.log(err);
    res.sendStatus(200);
  });
});

router.get('/research/list', function(req, res) {

  const page = Number(req.query.page);
  const perPage = Number(req.query.perPage);
  const offset = (page - 1) * perPage;
  const limit = perPage;

  const query = Research.find({});
  query.skip(offset).limit(limit);
  query.exec(function(err, items){
    if (err) console.log(err);
    TEC.countDocuments({}, function (err, count) {
      if (err) console.log(err);
      res.json({
        count: count,
        result: items
      });  
    });
  });
});

router.get('/research/:id', function(req, res) {
  Research.findById(req.params.id, function(err, item) {
    if (err) console.log(err);
    res.json(item);
  });
});

router.post('/research', function(req, res) {
  Research.create({
    name: req.body.name,
    description: req.body.description
  }, function(err, item){
    if (err) console.log(err);
    res.sendStatus(200);
  });
});

module.exports = router;
