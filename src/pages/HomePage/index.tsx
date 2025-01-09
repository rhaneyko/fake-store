import React, { useEffect, useState } from 'react';
import { ApiProducts } from '../../services/api'; // Importe a API configurada
import { 
    Container,
    Title,
    CardsContainer,
    CardProduct,
    ProductTitle,
    ProductPrice,
    ProductDescription,
    ProductImage
 } from './styles';

// Defina a interface para os dados do produto
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await ApiProducts.get<Product[]>(''); // Como a `baseURL` já contém o endpoint, deixe a string vazia
        setProducts(response.data); // Armazene os dados dos produtos
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
      <h1>Lista de Produtos</h1>
      <CardsContainer>
        
        {products.map((product) => (
          <CardProduct key={product.id} >
            <ProductImage src={product.image} alt={product.title}/>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductPrice>Preço: R$ {product.price.toFixed(2)}</ProductPrice>
          </CardProduct>
        ))}
      </CardsContainer>
      <ul style={{ listStyle: 'none', padding: 0 }}>
      </ul>
    </Container>
  );
};

export default HomePage;
