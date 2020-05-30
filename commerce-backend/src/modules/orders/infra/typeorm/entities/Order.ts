import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
  Column,
} from 'typeorm';

import Clients from '@modules/clients/infra/typeorm/entities/Clients';
import OrdersProducts from '@modules/orders/infra/typeorm/entities/OrdersProducts';

@Entity('orders')
class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  client_id: string;

  @OneToOne(() => Clients, { eager: true })
  @JoinColumn({ name: 'client_id' })
  client: Clients;

  @OneToMany(() => OrdersProducts, (order_products) => order_products.order, {
    cascade: ['insert'],
    eager: true,
  })
  order_products: OrdersProducts[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Order;
