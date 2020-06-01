import { inject, injectable } from 'tsyringe';
import IProductsRepository from '@modules/products/repositories/IProductsRepository';

import AppError from '@shared/errors/AppError';
import Products from '../infra/typeorm/entities/Products';

interface IUpdateProductDTO {
  id: string;
  name: string;
  price: number;
  active: boolean;
}

@injectable()
class UpdateProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute({
    id,
    name,
    price,
    active,
  }: IUpdateProductDTO): Promise<Products> {
    const product = await this.productsRepository.findOne(id);

    if (!product) {
      throw new AppError('Product with this Id does not exists');
    }

    product.name = name;
    product.price = price;
    product.active = active;

    return this.productsRepository.save(product);
  }
}

export default UpdateProductService;
