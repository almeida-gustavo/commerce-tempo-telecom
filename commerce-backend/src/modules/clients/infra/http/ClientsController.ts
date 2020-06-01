import { Request, Response } from 'express';
import { container } from 'tsyringe';

import FindAllClientsService from '../../services/FindAllClientsService';
import FindOneClientService from '../../services/FindOneClientService';
import CreateClientService from '../../services/CreateClientService';
import UpdateClientService from '../../services/UpdateClientService';

export default class ClientsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { active } = request.query;

    const findAllClients = container.resolve(FindAllClientsService);

    const clients = await findAllClients.execute(active?.toString());

    return response.json(clients);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const FindOneClient = container.resolve(FindOneClientService);

    const client = await FindOneClient.execute(id);

    return response.json(client);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, phone, birthdate } = request.body;

    const createClient = container.resolve(CreateClientService);

    const client = await createClient.execute({ name, phone, birthdate });

    return response.json(client);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, phone, birthdate, active } = request.body;

    const updateClient = container.resolve(UpdateClientService);

    const client = await updateClient.execute({
      id,
      name,
      phone,
      birthdate,
      active,
    });

    return response.json(client);
  }
}
