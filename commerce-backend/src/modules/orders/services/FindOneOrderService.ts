import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IOrdersRepository from '../repositories/IOrdersRepository';
import IResultOrderDto from '../dtos/IResultOrderDTO';

@injectable()
class FindOrderService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,
  ) {}

  public async execute(id: string): Promise<IResultOrderDto | undefined> {
    const order = await this.ordersRepository.findOneOrder(id);

    if (!order) {
      throw new AppError('Order with this Id does not exists');
    }

    const totalOrder = await this.ordersRepository.getOrderTotal(order.id);

    return { order, totalOrder };
  }
}

export default FindOrderService;
