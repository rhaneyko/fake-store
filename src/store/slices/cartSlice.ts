import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartProduct {
  id: number;
  title: string;
  size: string;
  color?: string;
  price: number;
  count: number;
  image: string;
}

interface CartState {
  products: CartProduct[];
}

const initialState: CartState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Adiciona um produto ao carrinho
    addProduct: (state, action: PayloadAction<CartProduct>) => {
      const existingProduct = state.products.find(
        (p) => p.id === action.payload.id && p.size === action.payload.size
      );

      if (existingProduct) {
        existingProduct.count += action.payload.count;
      } else {
        state.products.push(action.payload);
      }
    },
    // Aumenta a quantidade de um produto
    increaseQuantity: (state, action: PayloadAction<{ id: number; size: string }>) => {
      const product = state.products.find(
        (p) => p.id === action.payload.id && p.size === action.payload.size
      );
      if (product) {
        product.count += 1;
      }
    },
    // Diminui a quantidade de um produto
    decreaseQuantity: (state, action: PayloadAction<{ id: number; size: string }>) => {
      const product = state.products.find(
        (p) => p.id === action.payload.id && p.size === action.payload.size
      );
      if (product && product.count > 1) {
        product.count -= 1;
      }
    },
    // Remove um produto do carrinho
    removeItem: (state, action: PayloadAction<{ id: number; size: string }>) => {
      state.products = state.products.filter(
        (p) => !(p.id === action.payload.id && p.size === action.payload.size)
      );
    },
  },
});

export const { addProduct, increaseQuantity, decreaseQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
