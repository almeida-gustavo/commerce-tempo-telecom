import React from 'react';

import { Switch, Route } from 'react-router-dom';

// import Orders from '../pages/Orders';
import Products from '../pages/Products';
import ProductsForm from '../pages/Products/ProductsForm';

const Routes: React.FC = () => (
  <Switch>
    {/* <Route path="/" exact component={Orders} /> */}
    {/* <Route path="/clients" component={Clients} /> */}
    <Route path="/products" exact component={Products} />
    <Route path="/products/register" component={ProductsForm} />
  </Switch>
);

export default Routes;
