import React from 'react';
import { FiShoppingCart } from 'react-icons/fi'; // Ícone de carrinho

interface AddToCartProps {
  onClick: () => void;
}

const AddToCart: React.FC<AddToCartProps> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <FiShoppingCart size={20} />
    </button>
  );
};

export default AddToCart;
