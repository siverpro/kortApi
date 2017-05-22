'use strict';

var mongoose = require('mongoose');
var config = require('./environment');

module.exports = mongoose.connect(config.mongo.uri, config.mongo.options);

mongoose.connection.on('error', function(err) {
	console.error(`MongoDB connection error: ${err}`);
  process.exit(-1); // eslint-disable-line no-process-exit
});

<<<<<<< HEAD
module.exports = mongoose.createConnection('mongodb://localhost/fortunadb');
=======
mongoose.connection.once('open', function() {
	console.log('mongodb connection open');
});
>>>>>>> b0bce15d0d898cc29a67717ca59c4d7ae98cff70
