import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ApiGetAllProducts } from "../../services/api";

import {ProductType} from "../../types/product";

import {
  Container,
  ProductContentIntro,
  ProductImage,
  ProductTitle,
  ProductPrice,
  SizeItemSelect,
  SizeItemOptiion,
  CardContainer,
  CardProduct,
  QuantityControls,
  ButtonRemove,
  ButtonAdd,
  QuantitySelect,
  ButtonAddToCart,
} from "./styles";
import Header from "../../components/header";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [count, setCount] = useState<number>(1);
  const [itemSize, setItemSize] = useState<string>("");

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setItemSize(e.target.value);

  const changeQuantity = (delta: number) => {
    setCount((prev) => Math.max(1, prev + delta));
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
      <CardContainer>
        {product && (
          <CardProduct>
            <ProductImage src={product.image} alt={product.title} />
            <ProductContentIntro>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductPrice>$ {product.price.toFixed(2)}</ProductPrice>
              <SizeItemSelect onChange={onSelectChange}>
                <SizeItemOptiion value="">Select Your Size</SizeItemOptiion>
                <SizeItemOptiion value="S">S</SizeItemOptiion>
                <SizeItemOptiion value="M">M</SizeItemOptiion>
                <SizeItemOptiion value="L">L</SizeItemOptiion>
              </SizeItemSelect>
            </ProductContentIntro>
          </CardProduct>
        )}
      </CardContainer>
      <QuantityControls>
        <ButtonRemove onClick={() => changeQuantity(-1)}>-</ButtonRemove>
        <QuantitySelect type="number" value={count} readOnly />
        <ButtonAdd onClick={() => changeQuantity(1)}>+</ButtonAdd>
      </QuantityControls>
      <ButtonAddToCart>Add to cart</ButtonAddToCart>
    </Container>
  );
};

export default ProductDetails;
