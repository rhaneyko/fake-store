import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice"; // Ajuste o caminho

const store = configureStore({
  reducer: {
    cart: cartReducer, // Adiciona o cart slice ao estado global
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
