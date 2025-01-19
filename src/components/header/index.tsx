import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers/store";
import { auth } from "../../services/firebase/firebaseConfig";
import { User } from "firebase/auth";
import Modal from "../../components/modalLogin";
import {
  HeaderContainer,
  Logo,
  CartIcon,
  CartWrapper,
  CartBadge,
  RightSection,
  LogoutText,
  LoginText
} from "./styles";

import { NavLink } from "react-router";

const Header = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser: User | null) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const cartProducts = useSelector((state: RootState) => state.cart.products);
  const totalItems = cartProducts.reduce((sum, product) => sum + product.count, 0);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setIsModalOpen(false);
      setUser(null);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <>
      <HeaderContainer>
        <Logo onClick={scrollToTop}>Fake Store</Logo>

        <RightSection>
          <NavLink to="/cart">
            <CartWrapper>
              <CartIcon />
              {totalItems > 0 && <CartBadge>{totalItems}</CartBadge>}
            </CartWrapper>
          </NavLink>
          {user ? (
            <LogoutText onClick={() => setIsModalOpen(true)}>Logout</LogoutText>
          ) : (
            <NavLink to="/login" className="login-text">
              <LoginText>Login</LoginText>
            </NavLink>
          )}
        </RightSection>
      </HeaderContainer>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onLogout={handleLogout}
      />
    </>
  );
};

export default Header;
