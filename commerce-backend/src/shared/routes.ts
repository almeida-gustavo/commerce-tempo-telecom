import { Router } from 'express';
import clientRouter from '@modules/clients/infra/http/clients.routes';

const routes = Router();

routes.use('/clients', clientRouter);

export default routes;
