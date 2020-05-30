import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ClientsController from './ClientsController';

const clientsRouter = Router();
const clientsController = new ClientsController();

clientsRouter.get('/', clientsController.index);
clientsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      phone: Joi.string().required(),
      birthdate: Joi.date().required(),
    },
  }),
  clientsController.create,
);

export default clientsRouter;
