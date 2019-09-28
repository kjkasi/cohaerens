const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Recv = new Schema({
    Name: String,
    Desciption: String,
    createdAt: Date,
    updatedAt: Date
});

module.exports = mongoose.model('Recv', Recv);