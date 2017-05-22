var mongoose = require('mongoose');
var db = require('../../config/db');

var fangstSchema = mongoose.Schema({
  name: { type: String, required: true },
  fisher: { type: String, required: true },
  date: { type: Date, required: true },
});

module.exports = db.model('Fangst', fangstSchema);
