import { Request, Response } from 'express';
import { container } from 'tsyringe';

import FindAllClientsService from '../../services/FindAllClientsService';
import CreateClientService from '../../services/CreateClientService';

export default class ClientsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const findAllClients = container.resolve(FindAllClientsService);

    const clients = await findAllClients.execute();

    return response.json(clients);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, phone, birthdate } = request.body;

    const createClient = container.resolve(CreateClientService);

    const client = await createClient.execute({ name, phone, birthdate });

    return response.json(client);
  }
}
