import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ApiGetAllProducts } from "../../services/api";
import { addProduct } from "../../store/slices/cartSlice";
import { ProductType } from "../../types/product";
import {
  Container,
  ProductContentIntro,
  ProductImage,
  ProductTitle,
  ProductPrice,
  SizeItemSelect,
  SizeItemOptiion,
  CardProduct,
  QuantityControls,
  ButtonRemove,
  ButtonAdd,
  ProductContentInteractive,
  QuantitySelect,
  ButtonAddToCart,
  ProductGallery,
  ProductContent,
} from "./styles";
import Header from "../../components/header";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [count, setCount] = useState<number>(1);
  const [selectedSize, setSelectedSize] = useState<string>("");

  const changeQuantity = (delta: number) => {
    setCount((prev) => Math.max(1, prev + delta));
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSize(e.target.value);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Por favor, selecione um tamanho antes de adicionar ao carrinho.");
      return;
    }

    const productToAdd = {
      id: product!.id,
      title: product!.title,
      price: product!.price,
      description: product!.description,
      image: product!.image,
      count,
      size: selectedSize,
    };

    dispatch(addProduct({ product: productToAdd, count }));
    alert("Produto adicionado ao carrinho!");
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await ApiGetAllProducts.get<ProductType>(`/${id}`);
        setProduct(response.data);
      } catch (err: any) {
        setError(err.message || "Erro ao carregar o produto");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Container>
      <Header />
      {product && (
        <CardProduct>
          <ProductGallery>
            <ProductImage src={product.image} alt={product.title} />
          </ProductGallery>
          <ProductContent>
            <ProductContentIntro>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductPrice>$ {product.price.toFixed(2)}</ProductPrice>
            </ProductContentIntro>
            <ProductContentInteractive>
              <SizeItemSelect onChange={handleSizeChange} value={selectedSize}>
                <SizeItemOptiion value="">Size</SizeItemOptiion>
                <SizeItemOptiion value="S">S</SizeItemOptiion>
                <SizeItemOptiion value="M">M</SizeItemOptiion>
                <SizeItemOptiion value="L">L</SizeItemOptiion>
              </SizeItemSelect>
              <QuantityControls>
                <ButtonRemove onClick={() => changeQuantity(-1)}>-</ButtonRemove>
                <QuantitySelect type="number" value={count} readOnly />
                <ButtonAdd onClick={() => changeQuantity(1)}>+</ButtonAdd>
              </QuantityControls>
              <ButtonAddToCart onClick={handleAddToCart}>Add to cart</ButtonAddToCart>
            </ProductContentInteractive>
          </ProductContent>
        </CardProduct>
      )}
    </Container>
  );
};

export default ProductDetails;
