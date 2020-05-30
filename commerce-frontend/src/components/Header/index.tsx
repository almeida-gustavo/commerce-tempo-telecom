import React from 'react';

import { useLocation } from 'react-router-dom';

import { Container, StyledLink } from './styles';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const currentLocation = useLocation();

  return (
    <>
      <Container size={size}>
        <header>
          <nav>
            <StyledLink active={currentLocation.pathname === '/'} to="/">
              Pedidos
            </StyledLink>
            <StyledLink
              active={currentLocation.pathname === '/clients'}
              to="/clients"
            >
              Clientes
            </StyledLink>
            <StyledLink
              active={currentLocation.pathname === '/products'}
              to="/products"
            >
              Produtos
            </StyledLink>
          </nav>
        </header>
      </Container>
    </>
  );
};

export default Header;
