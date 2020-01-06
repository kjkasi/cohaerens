const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const Place = mongoose.Schema('Place');

const Place = new Schema({
    name: String,
    description: String
});

const Research = new Schema({
    name: String,
    description: String,
    place: Place
});

module.exports = mongoose.model('Research', Research);