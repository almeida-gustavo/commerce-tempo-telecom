import { inject, injectable } from 'tsyringe';

import IOrdersRepository from '../repositories/IOrdersRepository';
import IResultOrderDto from '../dtos/IResultOrderDTO';

@injectable()
class FindOrderService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,
  ) {}

  public async execute(): Promise<IResultOrderDto[]> {
    const orders = await this.ordersRepository.findAllOrders();

    const ordersArray = Promise.all(
      orders.map(async (order) => {
        const totalOrder = await this.ordersRepository.getOrderTotal(order.id);
        return {
          order,
          totalOrder,
        };
      }),
    );

    return ordersArray;
  }
}

export default FindOrderService;
