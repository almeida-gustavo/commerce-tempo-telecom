import { inject, injectable } from 'tsyringe';
import IProductsRepository from '@modules/products/repositories/IProductsRepository';

import Products from '../infra/typeorm/entities/Products';

@injectable()
class FindAllProductsService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute(queryActive?: string): Promise<Products[]> {
    if (queryActive === 'true' || queryActive === 'false') {
      const active = queryActive === 'true';

      const activeProducts = await this.productsRepository.listAllActiveProducts(
        active,
      );

      return activeProducts;
    }

    const products = await this.productsRepository.listAll();

    return products;
  }
}

export default FindAllProductsService;
