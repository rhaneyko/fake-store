import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  height: 100vh; 
  width: 100vw; 
  background-color: blue; 
  box-sizing: border-box; 
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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 15px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 10px;
  }
`;

export const ProductContentIntro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

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

  @media (max-width: 1024px) {
    font-size: 13px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 8px 12px;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const ProductGallery = styled.div``;

export const ProductImage = styled.img`
  width: 100%;
  max-width: 200px;
  height: auto;
  margin-bottom: 16px;
  object-fit: cover;
  border-radius: 4px;

  @media (max-width: 768px) {
    max-width: 150px;
  }

  @media (max-width: 480px) {
    max-width: 100px;
  }
`;

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 40px 0;
`;

export const ProductTitle = styled.h3`
  font-size: 20px;
  color: #333;
  margin: 8px 0;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const ProductPrice = styled.p`
  font-size: 18px;
  color: #28a745;
  font-weight: bold;
  margin: 8px 0;

  @media (max-width: 1024px) {
    font-size: 15px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const SizeItemSelect = styled.select`

  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SizeItemOptiion = styled.option``;

export const QuantityControls = styled.div`
  display: flex;
  margin: 15px ;

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

export const ButtonRemove = styled.button`
  background-color: #f44336;
  color: #fff;
  border: none;
  border-radius: 5px 0 0 5px;
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

export const ButtonAdd = styled.button`
  width: 30px;
  height: 46px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: #4caf50;
  border: 1px solid #4caf50;
  border-radius: 0 5px 5px 0;
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

export const ProductContentInteractive = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 40px 0 0 0;

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
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

export const ButtonAddToCart = styled.button`
  padding: 10px 20px;
  margin: 15px;
  background-color: #27ae60;
  border: none;
  border-radius: 4px;
  border: 1px solid #27ae60;
  color: #000;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.2s ease;

  @media (max-width: 1024px) {
    padding: 8px 18px;
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 8px 12px;
    font-size: 0.85rem;
  }
`;
