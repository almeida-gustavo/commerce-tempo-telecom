import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ClientsController from './ClientsController';

const clientsRouter = Router();
const clientsController = new ClientsController();

clientsRouter.get('/', clientsController.index);
clientsRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  clientsController.show,
);
clientsRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      name: Joi.string(),
      phone: Joi.string(),
      birthdate: Joi.date(),
      active: Joi.boolean(),
    },
  }),
  clientsController.update,
);
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
