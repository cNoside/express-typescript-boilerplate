import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

import { env } from 'common/configs';
import { routes } from 'routes';
import { notFoundHandler } from 'common/middlewares';
import { errorHandler } from './common/middlewares/error-handler';

const app = express();

export async function main() {
  dotenv.config();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

  app.use(routes);
  app.use('', notFoundHandler);

  app.use(errorHandler);

  return app.listen(env.server.port, () => {
    console.clear();
    console.log(
      `Server running on port ${env.server.port}`
    );
  });
}
