import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers/store";
import {
  HeaderContainer,
  Logo,
  SearchProduct,
  SearchIcon,
  CartIcon,
  CartWrapper,
  SearchWrapper,
  CartBadge,
} from "./styles";

import { NavLink } from "react-router";

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  const cartProducts = useSelector((state: RootState) => state.cart.products);
  const totalItems = cartProducts.reduce((sum, product) => sum + product.count, 0);

  return (
    <HeaderContainer>
      <Logo onClick={scrollToTop}>Fake Store</Logo>
      <SearchWrapper>
        <SearchProduct placeholder="Search for products" />
        <SearchIcon />
      </SearchWrapper>

      <nav>
        <NavLink to="/cart">
          <CartWrapper>
            <CartIcon />
            {totalItems > 0 && <CartBadge>{totalItems}</CartBadge>}
          </CartWrapper>
        </NavLink>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
