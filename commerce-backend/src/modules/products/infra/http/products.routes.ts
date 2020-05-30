import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ProductsController from './ProductsController';

const productsRouter = Router();
const productsController = new ProductsController();

productsRouter.get('/', productsController.index);
productsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      price: Joi.number().required(),
    },
  }),
  productsController.create,
);

export default productsRouter;
