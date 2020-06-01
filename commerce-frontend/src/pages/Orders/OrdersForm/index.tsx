/* eslint-disable @typescript-eslint/camelcase */
import React, { useRef, useCallback, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import api from '../../../services/api';
import Select from '../../../components/Select';
import formatValue from '../../../utils/formatValue';

import { Container } from './styles';

interface ClientsDTO {
  id: string;
  name: string;
  label: string;
}

interface ProductsDTO {
  id: string;
  name: string;
  price: number;
}

const Dashboard: React.FC = () => {
  const [orderTotal, setOrderTotal] = useState(0);
  const [clients, setClients] = useState<ClientsDTO[]>([]);
  const [products, setProducts] = useState<ProductsDTO[]>([]);
  const [selectedClient, setSelectedClient] = useState<ClientsDTO | null>(null);
  const [selectedProducts, setSelectedProducts] = useState<ProductsDTO[]>([]);

  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  useEffect(() => {
    async function loadDatas(): Promise<void> {
      const { data: clientsRawData } = await api.get('/clients?active=true');
      const clientsData = clientsRawData.map((client: ClientsDTO) => ({
        ...client,
        label: client.name,
      }));
      setClients(clientsData);

      const { data: productsRawData } = await api.get('/products?active=true');
      const productsData = productsRawData.map((product: ProductsDTO) => ({
        ...product,
        label: product.name,
      }));

      setProducts(productsData);
    }
    loadDatas();
  }, []);

  const handleSubmit = async (): Promise<void> => {
    const productsArray = selectedProducts.map((product) => ({
      product_id: product.id,
    }));
    await api.post('/orders', {
      client_id: selectedClient?.id,
      products: productsArray,
    });

    history.push('/');
  };

  const handleClientSelect = (client: any): void => {
    setSelectedClient(client);
  };

  const handleProductAdd = (product: any): void => {
    setSelectedProducts([...selectedProducts, product]);
    setOrderTotal(orderTotal + Number(product.price));
  };

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Cadastre sua Ordem</h1>

        <Select
          name="clients"
          options={clients}
          value={selectedClient}
          onChange={handleClientSelect}
          placeholder="Selecione Seu cliente"
        />

        <Select
          name="products"
          options={products}
          onChange={handleProductAdd}
          placeholder="Selecione seus produtos"
        />

        {selectedProducts &&
          selectedProducts.map((product) => (
            <div key={product.id}>
              <span>Produto: {product.name}</span>
              <span> - Preço: {formatValue(product.price)}</span>
            </div>
          ))}

        <div>
          <span className="total">Total Ordem: {formatValue(orderTotal)}</span>
          <div>
            <button className="submitButton" type="submit">
              Cadastrar
            </button>
            <button
              className="cancelButton"
              type="button"
              onClick={() => history.push('/')}
            >
              Cancelar
            </button>
          </div>
        </div>
      </Form>
    </Container>
  );
};

export default Dashboard;
