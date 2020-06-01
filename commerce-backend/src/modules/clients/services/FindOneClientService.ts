import { inject, injectable } from 'tsyringe';
import IClientsRepository from '@modules/clients/repositories/IClientsRepository';
import AppError from '@shared/errors/AppError';

import Clients from '../infra/typeorm/entities/Clients';

@injectable()
class FindOneClientService {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,
  ) {}

  public async execute(id: string): Promise<Clients | undefined> {
    const client = await this.clientsRepository.findOne(id);

    if (!client) {
      throw new AppError('Client with this Id does not exists');
    }

    return client;
  }
}

export default FindOneClientService;
