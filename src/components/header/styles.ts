import styled from "styled-components";

import { BsCart } from "react-icons/bs";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
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
  color: #fff;
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
  gap: 20px;

  .login-text{
    text-decoration: none;
  }
`;

export const LoginText = styled.span`
  cursor: pointer;
  color: #FFF;
  text-decoration: none;
  
`;

export const LogoutText = styled.span`
  cursor: pointer;
  color: #fff;
  font-size: 1rem;
  text-decoration: none;
`;
