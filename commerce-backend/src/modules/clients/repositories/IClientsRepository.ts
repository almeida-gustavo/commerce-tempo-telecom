import Clients from '@modules/clients/infra/typeorm/entities/Clients';
import ICreateClientDTO from '@modules/clients/dtos/ICreateClientDTO';

export default interface IClientsRepository {
  listAll(): Promise<Clients[]>;
  create(data: ICreateClientDTO): Promise<Clients>;
}
