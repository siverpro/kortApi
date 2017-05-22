'use strict';
/*eslint no-process-env:0*/

var _ = require('lodash');

var all = {
	env: process.env.NODE_ENV,

	// Server port
	port: process.env.PORT || 10010,

	// Server IP
	ip: process.env.IP || '0.0.0.0',

	seedDB: false,

	mongo: {
		options: {
			db: {
				safe: true
			}
		}
	}
};

module.exports = _.merge(
	all,
	require(`./${process.env.NODE_ENV}.js`) || {}
);
