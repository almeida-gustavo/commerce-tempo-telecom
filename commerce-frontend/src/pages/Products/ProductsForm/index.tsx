import React, { useRef, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import api from '../../../services/api';
import Input from '../../../components/Input';

import { Container } from './styles';

interface CreateProductDTO {
  name: string;
  price: number;
}

const Dashboard: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(
    async ({ name, price }: CreateProductDTO) => {
      try {
        await api.post('/products', {
          name,
          price: Number(price),
        });

        history.push('/products');
      } catch (err) {
        console.log(err);
      }
    },
    [history],
  );

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Cadastre seu Produto</h1>

        <Input name="name" placeholder="Nome" />

        <Input name="price" placeholder="Preço" />

        <button type="submit">Cadastrar</button>
      </Form>
    </Container>
  );
};

export default Dashboard;
