import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import './style.css';
import { fetchProducts } from "../actions";
import SearchQuery from "./search.js";
import FilterQuery from "./filterByCategory";
import Products from "./products";

const ProductsIndex = () => {
  const products = useSelector((state) => state.products);
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchProducts]);

  // let filterProducts = products.filter((product) => {
  //   if (product.type) {
  //     return product.type.includes(query);
  //   }

  //   return false;
  // });

  return (
    <div>
      <SearchQuery fetchProducts={fetchProducts} />
      <h7 className="filterResults"><strong>Filter by Category:</strong></h7>
      <FilterQuery query={query} setQuery={setQuery} />
      <h7 className="filterResults"><strong>Sort by Price:</strong></h7>
      <FilterQuery query={query} setQuery={setQuery} />

      <div>
        <div className="main-layout">
          <Products products={products} /></div>
      </div>
    </div>
  );
}

export default ProductsIndex;