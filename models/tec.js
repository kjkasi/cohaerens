const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TEC = new Schema({
    created: String,
    sourses: String,
    satellite: String,
    interval: String,
    site: String,
    position: String,
    format: String,
    rows: [{
        tsn: String,
        hour: String,
        el: String,
        az: String,
        l1l2: String,
        p1p2: String,
        validity: String
    }]
});

module.exports = mongoose.model('TEC', TEC);