import Order from '../infra/typeorm/entities/Order';

import ICreateOrderDTO from '../dtos/ICreateOrdersDTO';

export default interface IOrdersRepository {
  create(data: ICreateOrderDTO): Promise<Order>;
  save(data: Order): Promise<Order>;
  findAllOrders(): Promise<Order[]>;
  findOneOrder(id: string): Promise<Order | undefined>;
  getOrderTotal(order_id: string): Promise<number | 0>;
}
