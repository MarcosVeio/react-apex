import { api } from "../api";

export const deleteProduct = (id) => {
  return api.delete(`/product/${id}`);
};
