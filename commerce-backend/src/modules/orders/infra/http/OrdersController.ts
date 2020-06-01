import { Request, Response } from 'express';

import { container } from 'tsyringe';

import FindAllOrdersService from '../../services/FindAllOrdersService';
import FindOneOrderService from '../../services/FindOneOrderService';
import CreateOrdersService from '../../services/CreateOrdersService';

export default class OrdersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const findAllOrders = container.resolve(FindAllOrdersService);

    const orders = await findAllOrders.execute();

    return response.json(orders);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findOneOrder = container.resolve(FindOneOrderService);

    const order = await findOneOrder.execute(id);

    return response.json(order);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { client_id, products } = request.body;

    const createOrder = container.resolve(CreateOrdersService);

    const order = await createOrder.execute({ client_id, products });

    return response.json(order);
  }
}
