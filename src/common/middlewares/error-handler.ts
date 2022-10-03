import { HttpError } from 'http-errors';
import { Request, Response, NextFunction } from 'express';

import { HTTP_ERRORS } from 'common/constants';

export const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof HttpError) {
    res.status(err.statusCode).send({
      statusCode: err.statusCode,
      message: err.message
    });
  } else if (err instanceof SyntaxError) {
    res.status(400).send({
      statusCode: 400,
      message: HTTP_ERRORS[400],
      error: 'Invalid JSON payload passed.'
    });
  } else if (err instanceof Error) {
    console.error(err);
    res.status(500).send({
      statusCode: 500,
      message: HTTP_ERRORS[500]
    });
  } else {
    console.error(err);
    res.status(500).send({
      statusCode: 500,
      message: HTTP_ERRORS[500]
    });
  }
};
