/* eslint-disable @typescript-eslint/camelcase */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

import api from '../../services/api';
import formatValue from '../../utils/formatValue';

import { Container, Table } from './styles';

interface OrdersDTO {
  order: {
    id: string;
    created_at: string;
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
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order) => (
              <tr key={order.order.id}>
                <td>{order.order.id}</td>
                <td>{order.order.client.name}</td>
                <td>{formatValue(order.totalOrder)}</td>

                <td>{order.order.created_at.split('T')[0]}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Dashboard;
