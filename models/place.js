var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Place = new Schema({
    Name: String,
    Desciption: String,
    createdAt: Date,
    updatedAt: Date
});

module.exports = mongoose.model('Place', Place);