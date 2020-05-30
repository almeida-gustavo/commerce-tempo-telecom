import { inject, injectable } from 'tsyringe';
import IClientsRepository from '@modules/clients/repositories/IClientsRepository';
import ICreateClientDTO from '@modules/clients/dtos/ICreateClientDTO';

import Clients from '../infra/typeorm/entities/Clients';

@injectable()
class CreateClientService {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,
  ) {}

  public async execute({
    name,
    phone,
    birthdate,
  }: ICreateClientDTO): Promise<Clients> {
    const client = await this.clientsRepository.create({
      name,
      phone,
      birthdate,
    });

    console.log(client);

    return client;
  }
}

export default CreateClientService;
