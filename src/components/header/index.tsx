import React from "react";
import {
  HeaderContainer,
  Logo,
} from "./styles";

const Header: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0, // Posição no topo
      behavior: "smooth", // Animação suave
    });
  };
  return (
    <HeaderContainer>
      <Logo onClick={scrollToTop} >Fake Store</Logo>
    </HeaderContainer>
  );
};

export default Header;
