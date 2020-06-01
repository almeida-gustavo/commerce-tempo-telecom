import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import formatValue from '../../utils/formatValue';

import { Container, Table } from './styles';

interface ProductsDTO {
  id: string;
  name: string;
  price: number;
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

  const handleActiveUpdate = async (product: ProductsDTO): Promise<void> => {
    const { data } = await api.put(`/products/${product.id}`, {
      name: product.name,
      price: product.price,
      active: !product.active,
    });

    const nonUpdatedProducts = products.filter((p) => p.id !== product.id);
    setProducts([...nonUpdatedProducts, data]);
  };

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
                <td>
                  {/* <Link to={`/products/${product.id}`}>{product.name}</Link> */}
                  {product.name}
                </td>
                <td>{formatValue(product.price)}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => handleActiveUpdate(product)}
                  >
                    {product.active.toString()}
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Dashboard;
