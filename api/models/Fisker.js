var mongoose = require('mongoose');
var db = require('../../config/db');

var userSchema = mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  dateAdded: { type: Date, default: Date.now }
});

module.exports = db.model('User', userSchema);
