import axios from 'axios';

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";

export async function fetchProducts() {
  const request = await axios.get("http://localhost:8000/products");

  return {
    type: FETCH_PRODUCTS,
    payload: { products: request.data }
  }
}
