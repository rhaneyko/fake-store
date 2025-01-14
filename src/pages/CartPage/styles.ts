import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
`;

export const CartProductsContainer = styled.div`
  width: 100%;
  max-width: 800px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const CartProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  padding: 15px 0;

  &:last-child {
    border-bottom: none;
  }

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 5px;
    margin-right: 15px;
  }

  div {
    flex: 1;
    margin-left: 10px;

    p:first-child {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 5px;
      color: #333;
    }

    p:last-child {
      font-size: 14px;
      color: #666;
    }
  }

  .quantity-controls {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

export const ButtonRemove = styled.button`
  background-color: #f44336;
  color: #fff;
  border: none;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #d32f2f;
  }
`;

export const ButtonAdd = styled.button`
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #388e3c;
  }
`;

export const QuantitySelect = styled.input`
  width: 50px;
  height: 30px;
  text-align: center;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
`;

export const PriceProduct = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;
