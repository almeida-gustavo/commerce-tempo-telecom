import { Router } from 'express';
import clientsRouter from '@modules/clients/infra/http/clients.routes';
import productsRouter from '@modules/products/infra/http/products.routes';
import ordersRouter from '@modules/orders/infra/http/orders.routes';

const routes = Router();

routes.use('/clients', clientsRouter);
routes.use('/products', productsRouter);
routes.use('/orders', ordersRouter);

export default routes;
