/* eslint-disable no-console */
import 'reflect-metadata';
import 'express-async-errors';

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { errors } from 'celebrate';

import AppError from '@shared/errors/AppError';
import routes from './routes';

import '@shared/infra/typeorm';
import '@shared/container';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(errors());

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.log(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(3001, () => {
  console.log('Server is runing on port 3001');
});
