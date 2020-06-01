import { inject, injectable } from 'tsyringe';
import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import AppError from '@shared/errors/AppError';

import Products from '../infra/typeorm/entities/Products';

@injectable()
class FindOneProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute(id: string): Promise<Products | undefined> {
    const product = await this.productsRepository.findOne(id);

    if (!product) {
      throw new AppError('Product with this Id does not exists');
    }

    return product;
  }
}

export default FindOneProductService;
