var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const Place = mongoose.model('Place');
const SysCom = mongoose.model('SysCom');
const Freq = mongoose.model('Freq');
const User = mongoose.model('User');
const Recv = mongoose.model('Recv');

router.get('/place', function(req, res) {
  Place.find({}, function(err, items){
    if (err) console.log(err);
    res.json(items);
  });
});

module.exports = router;
