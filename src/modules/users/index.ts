import { Router } from 'express';
import createHttpError from 'http-errors';
import asyncHandler from 'express-async-handler';

export const usersController = Router();

usersController.get(
  '/',
  asyncHandler((req, res) => {
    res.send({ message: 'Hello World!' });
  })
);

usersController.post(
  '/',
  asyncHandler(() => {
    throw createHttpError(501, 'Not implemented');
  })
);
