import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
  padding-bottom: 40px;
`;

export const Title = styled.h1``;

export const CardsContainer = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(3, 1fr);
`;

export const CardProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 390px;
  background-color:#FFF;
  font-family: 'DM Sans', sans-serif;
`;

export const ProductTitle = styled.h3`
  font-size: 1rem;
`;

export const ProductPrice = styled.span`
   display: flex;
   margin-top: auto;
`;

export const ProductDescription = styled.p``;

export const ProductImage = styled.img`
  width: 300px;
  height: 310px;
  object-fit: contain;
`;
