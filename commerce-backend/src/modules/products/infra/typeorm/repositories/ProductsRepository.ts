import { getRepository, Repository } from 'typeorm';

import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import ICreateProductsDTO from '@modules/products/dtos/ICreateProductsDTO';
import Products from '../entities/Products';

interface IFindProducts {
  id: string;
}

class ProductsRepository implements IProductsRepository {
  private ormRepository: Repository<Products>;

  constructor() {
    this.ormRepository = getRepository(Products);
  }

  public async listAll(): Promise<Products[]> {
    const products = await this.ormRepository.find();

    return products;
  }

  public async listAllActiveProducts(active: boolean): Promise<Products[]> {
    const products = await this.ormRepository.find({ where: { active } });

    return products;
  }

  public async findAllById(products_ids: IFindProducts[]): Promise<Products[]> {
    const products = await this.ormRepository.findByIds(products_ids);

    return products;
  }

  public async findProductByName(name: string): Promise<Products | undefined> {
    const products = await this.ormRepository.find();

    const filteredProduct = products.filter(
      (product) =>
        product.name.toLocaleLowerCase() === name.toLocaleLowerCase(),
    );

    if (filteredProduct) {
      return filteredProduct[0];
    }

    return filteredProduct;
  }

  public async create(data: ICreateProductsDTO): Promise<Products> {
    const product = await this.ormRepository.create(data);

    await this.ormRepository.save(product);

    return product;
  }
}

export default ProductsRepository;
