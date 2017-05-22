import SwaggerExpress from 'swagger-express-mw';
import app from 'express';
import config from './config/environment';

const server = app();

export const init = () => {
  const appConfig = {
    appRoot: __dirname, // required config
  };

  SwaggerExpress.create(appConfig, (err, swaggerExpress) => {
    if (err) { throw err; }

    // install middleware
    swaggerExpress.register(server);

    server.listen(config.port);

    if (swaggerExpress.runner.swagger.paths['/Fisker']) {
      console.log('runs cool');
    }
  });
};

export default server; // for testing
