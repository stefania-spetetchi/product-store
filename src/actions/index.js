import axios from 'axios';
import SearchQuery from "../components/searchByName";
import FilterQuery from "../components/filterByCategory";
import SortQuery from "../components/sortByPrice"

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";

const ROOT_URL = "http://localhost:8000/products"

export async function fetchProducts(categoryQuery) {
  if (categoryQuery) {
    const request = await axios.get(`${ROOT_URL}?category=${categoryQuery}`);
    return {
      type: FETCH_PRODUCTS,
      payload: { products: request.data }

    }
  } else {
    const request = await axios.get("http://localhost:8000/products");

    return {
      type: FETCH_PRODUCTS,
      payload: { products: request.data }
    }
  }

}
