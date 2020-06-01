import { inject, injectable } from 'tsyringe';
import IClientsRepository from '@modules/clients/repositories/IClientsRepository';

import AppError from '@shared/errors/AppError';
import Clients from '../infra/typeorm/entities/Clients';

interface IUpdateClientDTO {
  id: string;
  name: string;
  phone: string;
  birthdate: Date;
  active: boolean;
}

@injectable()
class UpdateClientService {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,
  ) {}

  public async execute({
    id,
    name,
    phone,
    birthdate,
    active,
  }: IUpdateClientDTO): Promise<Clients> {
    const client = await this.clientsRepository.findOne(id);

    if (!client) {
      throw new AppError('Client with this Id does not exists');
    }

    client.name = name;
    client.phone = phone;
    client.birthdate = birthdate;
    client.active = active;

    return this.clientsRepository.save(client);
  }
}

export default UpdateClientService;
