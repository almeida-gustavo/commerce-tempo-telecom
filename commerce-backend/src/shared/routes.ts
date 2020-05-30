import { Router } from 'express';
import clientsRouter from '@modules/clients/infra/http/clients.routes';
import productsRouter from '@modules/products/infra/http/products.routes';

const routes = Router();

routes.use('/clients', clientsRouter);
routes.use('/products', productsRouter);

export default routes;
