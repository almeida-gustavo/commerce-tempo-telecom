import { getRepository, Repository } from 'typeorm';

import IClientsRepository from '@modules/clients/repositories/IClientsRepository';
import ICreateClientDTO from '@modules/clients/dtos/ICreateClientDTO';
import Clients from '../entities/Clients';

class ClientsRepository implements IClientsRepository {
  private ormRepository: Repository<Clients>;

  constructor() {
    this.ormRepository = getRepository(Clients);
  }

  public async listAll(): Promise<Clients[]> {
    const clients = await this.ormRepository.find();

    return clients;
  }

  public async findById(id: string): Promise<Clients | undefined> {
    const client = await this.ormRepository.findOne(id);

    return client;
  }

  public async findClientByNameAndBirthdate(
    name: string,
    phone: string,
    birthdate: Date,
  ): Promise<Clients | undefined> {
    const clients = await this.ormRepository.find({
      where: { phone, birthdate },
    });

    const filteredClient = clients.filter(
      (client) => client.name.toLocaleLowerCase() === name.toLocaleLowerCase(),
    );

    if (filteredClient) {
      return filteredClient[0];
    }

    return filteredClient;
  }

  public async create(data: ICreateClientDTO): Promise<Clients> {
    const client = await this.ormRepository.create(data);

    await this.ormRepository.save(client);

    return client;
  }
}

export default ClientsRepository;
