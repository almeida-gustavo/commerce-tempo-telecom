import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';

import Routes from './routes';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Router>
      <Header />
      <Routes />
    </Router>
  </>
);

export default App;
