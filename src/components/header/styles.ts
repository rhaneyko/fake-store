import styled from "styled-components";

import { BsSearch, BsCart } from "react-icons/bs";


export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-evenly;
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

export const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
`;

export const SearchProduct = styled.input`
  width: 100%;
  
  padding: 10px;
  border: 1px solid #171717;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;
`;

export const SearchIcon = styled(BsSearch)`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #AAA;
  font-size: 20px;
  pointer-events: none;
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
