import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
  background-color: red;
`;

export const Title = styled.h1``;

export const CardsContainer = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(4, 1fr);
`;

export const CardProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;

  background-color: #f2e9dc;
`;

export const ProductTitle = styled.h3`
  font-size: 1rem;
`;

export const ProductPrice = styled.span``;

export const ProductDescription = styled.p``;

export const ProductImage = styled.img`
  width: 300px;
  height: 310px;
`;
