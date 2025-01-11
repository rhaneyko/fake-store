import React, { useEffect, useState } from 'react';

import { 
    Container,
    CardsContainer,
    CardProduct,
    ProductTitle,
    ProductPrice,
    ProductImage
 } from './styles';

import { ApiProducts } from '../../services/api';

import { ProductType } from '../../types/product';

const Product = () => {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await ApiProducts.get<ProductType[]>('');
                setProducts(response.data);
            } catch (err: any) {
                setError(err.message || 'Erro ao carregar os produtos');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <Container>
            {loading ? (
            <div>Carregando produtos...</div>
        ) : error ? (
            <div>{error}</div>
        ) : (
            <CardsContainer>
        
        {products.map((product) => (
          <CardProduct key={product.id} >
            <ProductImage src={product.image} alt={product.title} loading="lazy" />
            <ProductTitle>{product.title}</ProductTitle>
            <ProductPrice>Preço: R$ {product.price.toFixed(2)}</ProductPrice>
          </CardProduct>
        ))}
      </CardsContainer>
        )}
        </Container>
    )
}

export default Product