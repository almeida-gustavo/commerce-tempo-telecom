import { inject, injectable } from 'tsyringe';
import IClientsRepository from '@modules/clients/repositories/IClientsRepository';
import ICreateClientDTO from '@modules/clients/dtos/ICreateClientDTO';

import AppError from '@shared/errors/AppError';
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
    const existingClient = await this.clientsRepository.findClientByNameAndBirthdate(
      name,
      phone,
      birthdate,
    );

    if (existingClient) {
      throw new AppError(
        'A client with this name, number and birthdate already exists',
      );
    }

    const client = await this.clientsRepository.create({
      name,
      phone,
      birthdate,
    });

    return client;
  }
}

export default CreateClientService;
