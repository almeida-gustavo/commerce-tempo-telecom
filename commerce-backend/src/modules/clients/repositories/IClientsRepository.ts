import Clients from '@modules/clients/infra/typeorm/entities/Clients';
import ICreateClientDTO from '@modules/clients/dtos/ICreateClientDTO';

export default interface IClientsRepository {
  listAll(): Promise<Clients[]>;
  create(data: ICreateClientDTO): Promise<Clients>;
  findClientByNameAndBirthdate(
    name: string,
    phone: string,
    birthdate: Date,
  ): Promise<Clients | undefined>;
  findById(id: string): Promise<Clients | undefined>;
}
