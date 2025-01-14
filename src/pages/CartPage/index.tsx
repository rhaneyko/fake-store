import React, { useState } from "react";
import {
    Container,
    Title,
    CartProductsContainer,
    CartProduct,
    ButtonRemove,
    ButtonAdd,
    QuantitySelect,
    PriceProduct
} from "./styles";
import { ProductType } from "../../types/product";

const CartPage: React.FC = () => {
    const [quantity, setQuantity] = useState<number>(1);
     const [products, setProducts] = useState<ProductType[]>([]);

    const changeQuantity = (delta: number) => {
        setQuantity((prevQuantity) => Math.max(1, prevQuantity + delta)); // Garante que a quantidade mínima seja 1
    };

    

    return (
        <Container>
            <Title>Minha Sacola (10)</Title>
            <CartProductsContainer>
                <CartProduct>
                    <img
                        src="https://www.w3schools.com/images/w3schools_green.jpg"
                        alt="Produto"
                    />
                    <div>
                        <p><strong>Nome do Produto</strong></p>
                        <p>Descrição do produto detalhada e informativa.</p>
                    </div>
                    <div className="quantity-controls">
                        <ButtonRemove onClick={() => changeQuantity(-1)}>-</ButtonRemove>
                        <QuantitySelect type="number" value={quantity} readOnly />
                        <ButtonAdd onClick={() => changeQuantity(1)}>+</ButtonAdd>
                    </div>
                    <PriceProduct>R$200</PriceProduct>

                </CartProduct>
            </CartProductsContainer>
        </Container>
    );
};

export default CartPage;
