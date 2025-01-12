import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding: 10px 20px;
  background-color: #171717;
  color: #FFF;
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
