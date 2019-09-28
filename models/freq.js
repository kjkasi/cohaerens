const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Freq = new Schema({
    Name: String,
    Desciption: String,
    Start: Number,
    End: Number,
    createdAt: Date,
    updatedAt: Date
});

module.exports = mongoose.model('Freq', Freq);