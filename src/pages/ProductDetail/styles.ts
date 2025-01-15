import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 70px auto;

  background-color: blue;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;

  background-color: red;
`;

export const CardProduct = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
`;

export const ProductContentIntro = styled.div``;

export const AddToCart = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 16px;
  font-size: 14px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #003f7f;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  max-width: 200px;
  height: auto;
  margin-bottom: 16px;
  object-fit: cover;
  border-radius: 4px;
`;

export const ProductTitle = styled.h3`
  font-size: 18px;
  color: #333;
  margin: 8px 0;
  text-align: center;
`;

export const ProductPrice = styled.p`
  font-size: 16px;
  color: #28a745;
  font-weight: bold;
  margin: 8px 0;
`;

export const SizeItemSelect = styled.select``;

export const SizeItemOptiion = styled.option``;

export const QuantityControls = styled.div`
  display: flex;
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

export const ButtonAddToCart = styled.button`
  padding: 10px 20px;
  background-color: #27ae60;
  border: none;
  border-radius: 4px;
  color: #000;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.2s ease;
`;
