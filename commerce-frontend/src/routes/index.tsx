import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Orders from '../pages/Orders';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Orders} />
    {/* <Route path="/clients" component={Clients} /> */}
    {/* <Route path="/products" component={Products} /> */}
  </Switch>
);

export default Routes;
