import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';

import Order from '@modules/orders/infra/typeorm/entities/Order';
import Products from '@modules/products/infra/typeorm/entities/Products';

@Entity('orders_products')
class OrdersProducts {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  product_id: string;

  @ManyToOne(() => Products, (product) => product.order_products, {
    cascade: true,
  })
  @JoinColumn({ name: 'product_id' })
  product: Products;

  @Column()
  order_id: string;

  @ManyToOne(() => Order, (order) => order.order_products, { cascade: true })
  @JoinColumn({ name: 'order_id' })
  order: Order;

  @Column()
  price: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default OrdersProducts;
