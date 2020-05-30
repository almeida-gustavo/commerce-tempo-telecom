import Products from '@modules/products/infra/typeorm/entities/Products';
import ICreateProductsDTO from '@modules/products/dtos/ICreateProductsDTO';

export default interface IClientsRepository {
  listAll(): Promise<Products[]>;
  create(data: ICreateProductsDTO): Promise<Products>;
  findProductByName(name: string): Promise<Products | undefined>;
}
