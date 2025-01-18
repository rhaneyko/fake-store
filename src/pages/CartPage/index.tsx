import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducers/store";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../../store/slices/cartSlice";

import {
  CartTableContainer,
  CartTable,
  ProductImage,
  ProductTitle,
  QuantityControls,
  ButtonRemoveQuantity,
  QuantitySelect,
  ButtonAddQuantity,
  RemoveButton,
  TotalContainer,
  CheckoutButton,
  ProductInfo,
} from "./styles";

const CartPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.cart.products);

  const handleIncrease = (id: number, size: string) => {
    dispatch(increaseQuantity({ id, size }));
  };

  const handleDecrease = (id: number, size: string) => {
    dispatch(decreaseQuantity({ id, size }));
  };

  const handleRemove = (id: number, size: string) => {
    dispatch(removeItem({ id, size }));
  };

  const totalCost = products.reduce(
    (total, product) => total + product.price * product.count,
    0
  );
  

  return (
    <CartTableContainer>
      <h1 className="cart-title">Shopping Cart</h1>
<div>

      {products.length === 0 ? (
        <p className="empty-cart-message">
          Seu carrinho está vazio. Adicione produtos para continuar.
        </p>
      ) : (
        <>
          <CartTable>
            <thead>
              <tr>
                <th>Product</th>
                <th>Size</th>
                <th>Amount</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={`${product.id}-${product.size}`}>
                  <td>
                    <ProductInfo>
                      <ProductImage
                        src={product.image}
                        alt={product.title}
                      />
                      <ProductTitle>{product.title}</ProductTitle>
                      <span>#{product.id}</span>
                    </ProductInfo>
                  </td>
                  <td>{product.size}</td>
                  <td>
                    <QuantityControls>
                      <ButtonRemoveQuantity
                        onClick={() => handleDecrease(product.id, product.size)}
                        >
                        -
                      </ButtonRemoveQuantity>
                      <QuantitySelect
                        type="number"
                        value={product.count}
                        readOnly
                        />
                      <ButtonAddQuantity
                        onClick={() => handleIncrease(product.id, product.size)}
                        >
                        +
                      </ButtonAddQuantity>
                    </QuantityControls>
                  </td>
                  <td>${product.price.toFixed(2)}</td>
                  <td>
                    <RemoveButton
                      onClick={() => handleRemove(product.id, product.size)}
                      >
                      X
                    </RemoveButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </CartTable>

          <TotalContainer>
            <div className="total-summary">
              <span>Total cost: </span>
              <strong>${totalCost.toFixed(2)}</strong>
            </div>
            <CheckoutButton>Checkout</CheckoutButton>
          </TotalContainer>
        </>
      )}
      </div>
    </CartTableContainer>
  );
};

export default CartPage;
