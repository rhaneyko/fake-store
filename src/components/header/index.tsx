import React from 'react';
import { NavLink } from 'react-router-dom';

import { 
  HeaderContainer,
  Nav,
  NavItem
} from './styles'; // Estilos personalizados (opcional)

const Header = () => {
  return (
    <HeaderContainer>
      <h1>E-commerce</h1>
      <Nav>
        <NavItem>
          <NavLink 
            to={"/"} 
            
          >
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink 
            to={"/categories"} 
            
          >
            Produtos
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink 
            to="/cart" 
            
          >
            Carrinho
          </NavLink>
        </NavItem>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
