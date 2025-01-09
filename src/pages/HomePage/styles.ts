import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.h1``;

export const CardsContainer = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(4, 1fr);
`;

export const CardProduct = styled.div`
  display: grid;
  flex-direction: column;

  background-color: red;
`;

export const ProductTitle = styled.h3`
  font-size: 1rem;
`;

export const ProductPrice = styled.span``;

export const ProductDescription = styled.p``;

export const ProductImage = styled.img`
  width: 100%;
  
`;
