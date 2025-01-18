import { AnyAction } from "redux";

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

export const cartReducer = (state = initialState, action: AnyAction): CartState => {
  switch (action.type) {
    case "INCREASE_QUANTITY":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id && product.size === action.payload.size
            ? { ...product, count: product.count + 1 }
            : product
        ),
      };
    case "DECREASE_QUANTITY":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id && product.size === action.payload.size
            ? { ...product, count: Math.max(1, product.count - 1) }
            : product
        ),
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        products: state.products.filter(
          (product) =>
            !(product.id === action.payload.id && product.size === action.payload.size)
        ),
      };
    default:
      return state;
  }
};
