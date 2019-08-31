var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Freq = new Schema({
    Name: String,
    Desciption: String,
    Start: Number,
    End: Number,
    createdAt: Date,
    updatedAt: Date
});

module.exports = mongoose.model('Freq', Freq);