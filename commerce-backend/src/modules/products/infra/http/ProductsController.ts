import { Request, Response } from 'express';
import { container } from 'tsyringe';

import FindAllProductsService from '../../services/FindAllProductsService';
import FindOneProductService from '../../services/FindOneProductService';
import CreateProductService from '../../services/CreateProductService';
import UpdateProductService from '../../services/UpdateProductService';

export default class ClientsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { active } = request.query;
    const findAllProducts = container.resolve(FindAllProductsService);

    const clients = await findAllProducts.execute(active?.toString());

    return response.json(clients);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const findOneProduct = container.resolve(FindOneProductService);

    const product = await findOneProduct.execute(id);

    return response.json(product);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, price } = request.body;

    const createProduct = container.resolve(CreateProductService);

    const product = await createProduct.execute({ name, price });

    return response.json(product);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, price, active } = request.body;
    const updateProduct = container.resolve(UpdateProductService);

    const product = await updateProduct.execute({ id, name, price, active });

    return response.json(product);
  }
}
