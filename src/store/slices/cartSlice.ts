import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  count: number;
  size: string;
}

interface CartState {
  products: ProductType[];
}

const initialState: CartState = {
  products: [], // Estado inicial do carrinho (vazio)
};

const cartSlice = createSlice({
  name: "cart", // Nome do slice
  initialState, // Estado inicial
  reducers: {
    // Adicionar produto ao carrinho
    addProduct: (state, action: PayloadAction<{ product: ProductType; count: number }>) => {
      const { product, count } = action.payload;

      
      const existingProduct = state.products.find(
        (p) => p.id === product.id && p.size === product.size
      );

      if (existingProduct) {
        existingProduct.count += count; // Incrementa a quantidade
      } else {
        state.products.push({ ...product, count }); // Adiciona novo produto
      }
    },

    // Remover produto do carrinho
    removeProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter((product) => product.id !== action.payload);
    },

    // Limpar o carrinho
    clearCart: (state) => {
      state.products = [];
    },
  },
});

// Exporta as ações para uso nos componentes
export const { addProduct, removeProduct, clearCart } = cartSlice.actions;

// Exporta o reducer para ser usado na store
export default cartSlice.reducer;
