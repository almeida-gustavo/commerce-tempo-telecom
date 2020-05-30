import { inject, injectable } from 'tsyringe';

// import ICreateOrderDTO from 'modules/orders/dtos/ICreateOrdersDTO';
import IClientsRepository from '@modules/clients/repositories/IClientsRepository';
import AppError from '@shared/errors/AppError';
import IProductsRepository from 'modules/products/repositories/IProductsRepository';
import IOrdersRepository from '../repositories/IOrdersRepository';
import IResultOrderDto from '../dtos/IResultOrderDTO';

interface IProduct {
  product_id: string;
}

interface IRequest {
  client_id: string;
  products: IProduct[];
}

@injectable()
class CreateOrdersService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,

    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,

    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute({
    client_id,
    products,
  }: IRequest): Promise<IResultOrderDto> {
    const client = await this.clientsRepository.findById(client_id);

    if (!client) {
      throw new AppError('Client with this Id does not exist');
    }

    if (!client.active) {
      throw new AppError('This client is not active');
    }

    const productIdArray = products.map((product) => ({
      id: product.product_id,
    }));

    const databaseProducts = await this.productsRepository.findAllById(
      productIdArray,
    );

    if (products.length === 0) {
      throw new AppError('Products can not be empty');
    }

    const productsArray = products.map((product) => {
      const [productFromOrder] = databaseProducts.filter(
        (p) => p.id === product.product_id,
      );

      if (!productFromOrder) {
        throw new AppError(
          `Product with id "${product.product_id}" does not exist`,
        );
      }

      if (!productFromOrder.active) {
        throw new AppError(`Product "${productFromOrder.name}" is not active`);
      }

      return {
        product_id: productFromOrder.id,
        price: productFromOrder.price,
      };
    });

    const order = await this.ordersRepository.create({
      client,
      products: productsArray,
    });

    const totalOrder = await this.ordersRepository.getOrderTotal(order.id);

    return { order, totalOrder };
  }
}

export default CreateOrdersService;
