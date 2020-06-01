import { inject, injectable } from 'tsyringe';
import IClientsRepository from '@modules/clients/repositories/IClientsRepository';

import Clients from '../infra/typeorm/entities/Clients';

@injectable()
class FindAllClientsService {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,
  ) {}

  public async execute(queryActive?: string): Promise<Clients[]> {
    if (queryActive === 'true' || queryActive === 'false') {
      const active = queryActive === 'true';

      const activeClients = await this.clientsRepository.listAllActiveClients(
        active,
      );

      return activeClients;
    }
    const clients = await this.clientsRepository.listAll();

    return clients;
  }
}

export default FindAllClientsService;
