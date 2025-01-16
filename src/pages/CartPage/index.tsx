import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers/store";

import {
  Container,
  Title,
  CartProductsContainer,
  CartProduct,
  CartProductImage,
  CartProductTitle,
  CartProductTitleSize,
  CartProductTitleQuantity,
  PriceProduct,
} from './styles'

const CartPage = () => {
  const products = useSelector((state: RootState) => state.cart.products);

  return (
    <Container>
      <Title>Meu Carrinho</Title>

      <CartProductsContainer>
        {products.length === 0 ? (
            <p>O carrinho está vázio. Adicione produtos para continuar.</p>
          ) : (
            
        products.map((product) => (
          <CartProduct key={`${product.id}-${product.size}`}>
            <CartProductImage src={product.image} alt={product.title} />
            <CartProductTitle>{product.title}</CartProductTitle>
            <CartProductTitleSize>Tamanho: {product.size}</CartProductTitleSize>
            <CartProductTitleQuantity>Quantidade: {product.count}</CartProductTitleQuantity>
            <PriceProduct>Preço: ${(product.price * product.count).toFixed(2)}</PriceProduct>
          </CartProduct>
        )))}
      </CartProductsContainer>
    </Container>
  );
};

export default CartPage;
