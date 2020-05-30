import { Router } from 'express';
import ClientsController from './ClientsController';

const clientsRouter = Router();
const clientsController = new ClientsController();

clientsRouter.get('/', clientsController.index);
clientsRouter.post('/', clientsController.create);

export default clientsRouter;
