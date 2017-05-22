'use strict';

var mongoose = require('mongoose');
var config = require('./environment');

module.exports = mongoose.connect(config.mongo.uri, config.mongo.options);

mongoose.connection.on('error', function(err) {
	console.error(`MongoDB connection error: ${err}`);
  process.exit(-1); // eslint-disable-line no-process-exit
});
