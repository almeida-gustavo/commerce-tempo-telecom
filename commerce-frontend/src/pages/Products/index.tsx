import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { Container, Table } from './styles';

interface ProductsDTO {
  id: string;
  name: string;
  price: string;
  active: boolean;
}

const Dashboard: React.FC = () => {
  const [products, setProducts] = useState<ProductsDTO[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const { data } = await api.get('/products');
      setProducts(data);
    }
    loadProducts();
  }, []);

  return (
    <Container>
      <div>
        <h1>Produtos</h1>
        <Link to="/products/register">
          <button type="button">Adicionar</button>
        </Link>
      </div>

      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
            <th>Ativo</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.active.toString()}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Dashboard;
