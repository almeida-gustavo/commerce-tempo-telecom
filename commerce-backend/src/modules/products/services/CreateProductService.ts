import { inject, injectable } from 'tsyringe';
import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import ICreateProductsDTO from '@modules/products/dtos/ICreateProductsDTO';

import AppError from '@shared/errors/AppError';
import Products from '../infra/typeorm/entities/Products';

@injectable()
class CreateProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute({ name, price }: ICreateProductsDTO): Promise<Products> {
    const existingProduct = await this.productsRepository.findProductByName(
      name,
    );

    if (existingProduct) {
      throw new AppError('This product already exists.');
    }

    const product = await this.productsRepository.create({ name, price });

    return product;
  }
}

export default CreateProductService;
