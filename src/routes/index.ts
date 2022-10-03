import { Router } from 'express';

import { usersController } from 'modules/users';

const BASE_URL = '/api';

const v1 = Router()
  .use('/users', usersController);

export const routes = Router().use(`${BASE_URL}/v1`, v1);
