'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
var config = require('./config/environment');

var appConfig = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(appConfig, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  app.listen(config.port);
  console.log('running');

  if (swaggerExpress.runner.swagger.paths['/users']) {
    console.log('try this:\ncurl http://127.0.0.1:' + config.port + '/hello?name=Scott');
  }
});

module.exports = app; // for testing