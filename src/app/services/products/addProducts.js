import { api } from "../api";

export const addProducts = (listProducts) => {
  return api.post("/products", listProducts);
};
