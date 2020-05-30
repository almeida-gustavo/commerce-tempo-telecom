import Client from '@modules/clients/infra/typeorm/entities/Clients';

interface IProduct {
  product_id: string;
  price: number;
}

export default interface ICreateOrderDTO {
  client: Client;
  products: IProduct[];
}
