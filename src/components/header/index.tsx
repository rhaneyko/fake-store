import React from "react";
import {
  HeaderContainer,
  Logo,
  SearchProduct,
  SearchIcon,
  CartIcon,
  SearchWrapper
} from "./styles";



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
        placeholder="Buscar produtos"
        
      />
      <SearchIcon/>
      </SearchWrapper>
      <CartIcon />
    </HeaderContainer>
  );
};

export default Header;
