import axios from "axios";

export const ApiProducts = axios.create({
  baseURL: `https://fakestoreapi.com/products`,
});
