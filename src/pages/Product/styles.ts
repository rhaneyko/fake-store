import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 20px;
  margin-top: 20px;
  padding-top: 60px;
  padding-bottom: 60px;
`;

export const CardsContainer = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(4, 1fr);
`;

export const CardProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 270px;
  border: 1px solid #DDD;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  background-color: #FFF;
`;

export const AddToCart = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: #555;
  color: #FFF;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    width: 40px;
    height: 40px;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const ProductImage = styled.img`
  width: 260px;
  height: 270px;
  object-fit: contain;
`;

export const ProductTitle = styled.h3`
  font-size: 16px;
  margin: auto;
  color: #333;
`;

export const ProductPrice = styled.p`
  font-size: 14px;
  color: #555;
  margin: 0;
`;
