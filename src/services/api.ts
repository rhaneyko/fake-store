import axios from "axios";

export const ApiGetAllProducts = axios.create({
  baseURL: `https://fakestoreapi.com/products`,
});

export const ApiGetAllCategories = axios.create({
  baseURL: `https://fakestoreapi.com/`
})
