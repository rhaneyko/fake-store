import React, { useEffect, useState } from "react";
import {
    Container,
    CardsContainer,
    CardProduct,
    ProductTitle,
    ProductPrice,
    ProductImage,
    AddToCart
} from "./styles";
import { ApiGetAllProducts } from "../../services/api";
import { ProductType } from "../../types/product";
import { BsCartPlus } from "react-icons/bs";
import { NavLink } from "react-router";

const Product = () => {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await ApiGetAllProducts.get<ProductType[]>("");
                setProducts(response.data);
            } catch (err: any) {
                setError(err.message || "Erro ao carregar os produtos");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleAddToCart = (id: number) => {
        console.log(`Produto ${id} adicionado ao carrinho!`);
    };

    return (
        <Container>
            {loading ? (
                <div>Carregando produtos...</div>
            ) : error ? (
                <div>{error}</div>
            ) : (
                <CardsContainer>
                    {products.map((product) => (
                        <CardProduct key={product.id}>
                            <AddToCart onClick={() => handleAddToCart(product.id)}>
                                <BsCartPlus />
                            </AddToCart>
                            <NavLink to={`/product/${product.id}`}>
                                <ProductImage src={product.image} alt={product.title} loading="lazy" />
                            </NavLink>
                            <ProductTitle>{product.title}</ProductTitle>
                            <ProductPrice>$ {product.price.toFixed(2)}</ProductPrice>
                        </CardProduct>
                    ))}
                </CardsContainer>
            )}
        </Container>
    );
};

export default Product;
