import { getRepository, Repository } from 'typeorm';

import IOrdersRepository from '@modules/orders/repositories/IOrdersRepository';
import ICreateOrderDTO from '@modules/orders/dtos/ICreateOrdersDTO';
import Order from '../entities/Order';

class OrdersRepository implements IOrdersRepository {
  private ormRepository: Repository<Order>;

  constructor() {
    this.ormRepository = getRepository(Order);
  }

  public async create({ client, products }: ICreateOrderDTO): Promise<Order> {
    const order = await this.ormRepository.create({
      client,
      order_products: products,
    });

    await this.ormRepository.save(order);

    return order;
  }

  public async save(data: Order): Promise<Order> {
    return this.ormRepository.save(data);
  }

  public async findAllOrders(): Promise<Order[]> {
    const orders = await this.ormRepository.find();
    return orders;
  }

  public async findOneOrder(id: string): Promise<Order | undefined> {
    const order = await this.ormRepository.findOne(id);
    return order;
  }

  public async getOrderTotal(order_id: string): Promise<number | 0> {
    const order = await this.ormRepository.findOne(order_id);

    if (order?.order_products) {
      const total = order?.order_products.reduce(
        (acc, product) => Number(acc) + Number(product.price),
        0,
      );
      return total;
    }

    return 0;
  }
}

export default OrdersRepository;
