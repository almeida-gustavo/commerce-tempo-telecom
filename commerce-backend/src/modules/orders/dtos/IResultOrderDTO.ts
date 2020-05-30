import Order from '@modules/orders/infra/typeorm/entities/Order';

export default interface IResultOrderDto {
  order: Order;
  totalOrder: number;
}
