import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { Container, Table } from './styles';

interface OrdersDTO {
  order: {
    id: string;
    created_at: Date;
    client: {
      id: string;
      name: string;
    };
  };

  totalOrder: number;
}

const Dashboard: React.FC = () => {
  const [orders, setOrders] = useState<OrdersDTO[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const { data } = await api.get('/orders');
      setOrders(data);
    }
    loadProducts();
  }, []);

  return (
    <Container>
      <div>
        <h1>Ordens</h1>
        <Link to="/orders/register">
          <button type="button">Adicionar</button>
        </Link>
      </div>

      <Table>
        <thead>
          <tr>
            <th>ID Ordem</th>
            <th>Nome Cliente</th>
            <th>Total Ordem</th>
            <th>Horario</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order) => (
              <tr key={order.order.id}>
                <td>{order.order.id}</td>
                <td>{order.order.client.name}</td>
                <td>{order.totalOrder}</td>
                <td>{order.order.created_at}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Dashboard;
