# commerce-tempo-telecom
## Sobre o projeto
- Projeto que deve realizar o cadastro de produtos, clientes e depois remeter ordens, associando o cliente a um ou mais produtos
- Ambos os codigos de front e back estão nesse mesmo repositório

## Rodando o backend
- cd commerce-backend
- yarn or npm install
- Para rodar o banco de dados você pode escolher uma das duas opções:
  - Banco de dados direto na maquina: 
    - Precisa ter o postgres baixado
    - Retirar a senha do campo "password" no arquivo ormconfig.json
    - Criar um banco de dados com o nome "commerce-tempo-telecom" 
  - Banco de dados como um container no Docker: 
    - Criar o container: docker run --name commerce-tempo-telecom -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
    - Criar um banco de dados com o nome "commerce-tempo-telecom" 
 - Apos escolher um dos metodos acima, você deve rodar yarn typeorm migration:run
- yarn dev:server para rodar o projeto
  
## Rodando o frontend
- cd commerce-frontend
- yarn or npm install
- yarn start


# Exemplos de Requisições

## Clientes
- post/clients 
```json
{
	"name": "nome_desejado",
	"phone": "11-1111-1111",
	"birthdate": "2000-05-16"
}
```

## Produtos
- post/products 
```json
{
	"name": "Teste 1",
	"price": 20.76
}
```

## Ordens
- post/orders 
```json
{
	"client_id": "55d0c4f2-ea79-4bc2-935c-db41a9cee904",
	"products": [
		{
			"product_id": "66a6a309-c3c8-4a84-ae07-78c619adc5d3"
		},
		{
			"product_id": "78ed45e7-ac46-40c0-8198-b6a4bcd2429b"
		}
	]
}
```
