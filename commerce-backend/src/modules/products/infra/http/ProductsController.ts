import { Request, Response } from 'express';
import { container } from 'tsyringe';

import FindAllProductsService from '../../services/FindAllProductsService';
import CreateProductService from '../../services/CreateProductService';

export default class ClientsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { active } = request.query;
    const findAllProducts = container.resolve(FindAllProductsService);

    const clients = await findAllProducts.execute(active?.toString());

    return response.json(clients);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, price } = request.body;

    const createProduct = container.resolve(CreateProductService);

    const product = await createProduct.execute({ name, price });

    return response.json(product);
  }
}
