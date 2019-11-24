var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const Place = mongoose.model('Place');
const SysCom = mongoose.model('SysCom');
const Freq = mongoose.model('Freq');
const User = mongoose.model('User');
const Recv = mongoose.model('Recv');

/*
router.get('/place', function(req, res) {
  Place.find({}, function(err, items){
    if (err) console.log(err);
    const count = items.length;
    res.json({
      count: count,
      result: items
    });
  });
});
*/

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

module.exports = router;
