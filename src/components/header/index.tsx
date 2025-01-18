import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers/store";
import { auth } from "../../services/firebase/firebaseConfig";
import { User } from "firebase/auth";
import Modal from "../../components/modalLogin"; // Certifique-se de ajustar o caminho
import {
  HeaderContainer,
  Logo,
  CartIcon,
  CartWrapper,
  CartBadge,
  RightSection,
  LogoutText,
} from "./styles";

import { NavLink } from "react-router";

const Header = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Controle do modal

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

  // Lógica de Logout
  const handleLogout = async () => {
    try {
      await auth.signOut();
      setIsModalOpen(false);
      setUser(null); // Limpa o estado do usuário
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <>
      <HeaderContainer>
        {/* Logo no canto esquerdo */}
        <Logo onClick={scrollToTop}>Fake Store</Logo>

        {/* Carrinho e Logout no canto direito */}
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
            <NavLink to="/login">
              <p>Login</p>
            </NavLink>
          )}
        </RightSection>
      </HeaderContainer>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onLogout={handleLogout}
      />
    </>
  );
};

export default Header;
