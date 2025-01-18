import styled from "styled-components";

export const CartTableContainer = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;

  .cart-title {
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
  }
`;

export const CartTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th {
    background-color: #f9f9f9;
    padding: 10px;
    text-align: left;
  }

  td {
    padding: 10px;
    text-align: left;
  }

  .empty-cart-message {
    text-align: center;
    margin-top: 50px;
    color: #777;
  }
`;

export const CartContainer = styled.tbody`
  width: 60vw;
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const ProductImage = styled.img`
  width: 100px;
  height: 110px;
  object-fit: contain;
  border-radius: 5px;
`;

export const ProductTitle = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

export const QuantityControls = styled.div`
  display: flex;
  margin: 15px;

  @media (max-width: 768px) {
    margin: 10px;
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

export const ButtonRemoveQuantity = styled.button`
  background-color: #f44336;
  color: #fff;
  border: none;
  border-radius: 20px 0 0 20px;
  width: 30px;
  height: 46px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #d32f2f;
  }

  @media (max-width: 1024px) {
    width: 25px;
    height: 40px;
  }

  @media (max-width: 768px) {
    width: 20px;
    height: 36px;
    font-size: 16px;
  }
`;

export const QuantitySelect = styled.input`
  width: 50px;
  height: 46px;
  text-align: center;
  font-size: 16px;
  border: 1px solid #ddd;
  outline: none;
  padding: 0;

  @media (max-width: 1024px) {
    width: 45px;
    height: 40px;
    font-size: 15px;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 36px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    width: 35px;
    height: 30px;
    font-size: 12px;
  }
`;

export const ButtonAddQuantity = styled.button`
  width: 30px;
  height: 46px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: #4caf50;
  border: 1px solid #4caf50;
  border-radius: 0 20px 20px 0;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #388e3c;
  }

  @media (max-width: 1024px) {
    width: 25px;
    height: 40px;
  }

  @media (max-width: 768px) {
    width: 20px;
    height: 36px;
    font-size: 16px;
  }
`;

export const RemoveButton = styled.button`
  background-color: transparent;
  color: #e74c3c;
  border: none;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: #c0392b;
  }
`;

export const TotalContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .promo-code {
    flex: 1;
    input {
      width: 100%;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
  }

  .total-summary {
    flex: 1;
    text-align: right;

    span {
      font-size: 16px;
      color: #333;
    }

    strong {
      font-size: 18px;
      font-weight: bold;
    }
  }
`;

export const CheckoutButton = styled.button`
  background-color: #f1c40f;
  color: #fff;
  padding: 10px 20px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #f39c12;
  }
`;
