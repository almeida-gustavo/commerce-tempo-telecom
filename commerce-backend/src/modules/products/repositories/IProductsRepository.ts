import Products from '@modules/products/infra/typeorm/entities/Products';
import ICreateProductsDTO from '@modules/products/dtos/ICreateProductsDTO';

interface IFindProducts {
  id: string;
}

export default interface IClientsRepository {
  listAll(): Promise<Products[]>;
  listAllActiveProducts(active: boolean): Promise<Products[]>;
  findAllById(products: IFindProducts[]): Promise<Products[]>;
  create(data: ICreateProductsDTO): Promise<Products>;
  findProductByName(name: string): Promise<Products | undefined>;
}
