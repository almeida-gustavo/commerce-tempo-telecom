import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { Container, Table } from './styles';

interface ClientsDTO {
  id: string;
  name: string;
  phone: string;
  active: boolean;
}

const Dashboard: React.FC = () => {
  const [clients, setClients] = useState<ClientsDTO[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const { data } = await api.get('/clients');
      setClients(data);
    }
    loadProducts();
  }, []);

  return (
    <Container>
      <div>
        <h1>Clientes</h1>
        <Link to="/clients/register">
          <button type="button">Adicionar</button>
        </Link>
      </div>

      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Ativo</th>
          </tr>
        </thead>
        <tbody>
          {clients &&
            clients.map((client) => (
              <tr key={client.id}>
                <td>{client.name}</td>
                <td>{client.phone}</td>
                <td>{client.active.toString()}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Dashboard;
