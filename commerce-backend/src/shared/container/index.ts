import { container } from 'tsyringe';

import ClientsRepository from '@modules/clients/infra/typeorm/repositories/ClientsRepository';
import IClientsRepository from '@modules/clients/repositories/IClientsRepository';

import ProductsRepository from '@modules/products/infra/typeorm/repositories/ProductsRepository';
import IProductsRepository from '@modules/products/repositories/IProductsRepository';

container.registerSingleton<IClientsRepository>(
  'ClientsRepository',
  ClientsRepository,
);

container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  ProductsRepository,
);
