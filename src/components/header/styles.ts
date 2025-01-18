import styled from "styled-components";

import { BsCart } from "react-icons/bs";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between; /* Alinha os elementos nos extremos */
  align-items: center;
  width: 100%;
  padding: 10px 20px;
  background-color: #171717;
  color: #fff;
  z-index: 2;
  position: fixed;
  top: 0;
`;

export const Logo = styled.span`
  font-family: "Julee", serif;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
`;

export const CartIcon = styled(BsCart)`
  font-size: 2rem;
`;

export const CartWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const CartBadge = styled.span`
  background-color: red;
  color: white;
  font-size: 12px;
  font-weight: bold;
  border-radius: 50%;
  padding: 4px 8px;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px; /* Espaço entre os itens */
`;

export const LogoutText = styled.span`
  cursor: pointer;
  color: #007bff;
  font-size: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;
