import React, { useRef, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import api from '../../../services/api';
import Input from '../../../components/Input';

import { Container } from './styles';

interface CreateClientDTO {
  name: string;
  phone: string;
  birthdate: Date;
}

const Dashboard: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(
    async ({ name, phone, birthdate }: CreateClientDTO) => {
      try {
        await api.post('/clients', {
          name,
          phone,
          birthdate,
        });

        history.push('/clients');
      } catch (err) {
        console.log(err);
      }
    },
    [history],
  );

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Cadastre um novo cliente</h1>

        <Input name="name" placeholder="Nome" />

        <Input name="phone" placeholder="Telefone" />

        <Input name="birthdate" placeholder="Data de Nascimento" />

        <button type="submit">Cadastrar</button>
      </Form>
    </Container>
  );
};

export default Dashboard;
