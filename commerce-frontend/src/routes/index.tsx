import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Orders from '../pages/Orders';
import OrdersForm from '../pages/Orders/OrdersForm';
import Products from '../pages/Products';
import ProductsForm from '../pages/Products/ProductsForm';
import Clients from '../pages/Clients';
import ClientsForm from '../pages/Clients/ClientsForm';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Orders} />
    <Route path="/orders/register" component={OrdersForm} />
    <Route path="/clients" exact component={Clients} />
    <Route path="/clients/register" component={ClientsForm} />
    {/* <Route path="/clients/:id" component={ClientsForm} /> */}
    <Route path="/products" exact component={Products} />
    <Route path="/products/register" component={ProductsForm} />
  </Switch>
);

export default Routes;
