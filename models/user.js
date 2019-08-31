var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    Username: String,
    Password: String,
    Email: String,
    Desciption: String,
    createdAt: Date,
    updatedAt: Date
});

module.exports = mongoose.model('User', User);