import Order from '../infra/typeorm/entities/Order';

import ICreateOrderDTO from '../dtos/ICreateOrdersDTO';

export default interface IOrdersRepository {
  create(data: ICreateOrderDTO): Promise<Order>;
  findAllOrders(): Promise<Order[]>;
  getOrderTotal(order_id: string): Promise<number | 0>;
}
