'use strict';

// Set default node environment to development
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test') {
	console.log(`Environment is set to: ${env}`);
}

exports = module.exports = require('./app');
