var mongoose = require('mongoose');
var db = require('../../config/db');

var zoneSchema = mongoose.Schema({
  name: { type: String, required: true }
});

module.exports = db.model('Zone', zoneSchema);
