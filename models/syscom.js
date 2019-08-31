var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SysCom = new Schema({
    Name: String,
    Desciption: String,
    createdAt: Date,
    updatedAt: Date
});

module.exports = mongoose.model('SysCom', SysCom);