import React from "react";
import {
  HeaderContainer,
  Logo,
  SearchProduct,
  SearchIcon,
  CartIcon,
  SearchWrapper
} from "./styles";
import { NavLink } from "react-router";

const Header: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <HeaderContainer>
      <Logo onClick={scrollToTop} >Fake Store</Logo>
      <SearchWrapper>
        <SearchProduct
          placeholder="Search for products"
        />
        <SearchIcon />
      </SearchWrapper>
      
      <nav>
        <NavLink to="/cart">
          <CartIcon />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
