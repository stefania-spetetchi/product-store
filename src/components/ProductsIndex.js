import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import './style.css';
import { fetchProducts } from "../actions";
import SearchQuery from "./searchByName.js";
import FilterQuery from "./filterByCategory";
import SortQuery from "./sortByPrice"
import Products from "./products";

const ProductsIndex = () => {
  const products = useSelector((state) => state.products);
  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchProducts]);

  useEffect(() => {
    dispatch(fetchProducts(query));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => {
    dispatch(fetchProducts(sortBy));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortBy]);

  return (
    <div>
      <SearchQuery fetchProducts={fetchProducts} />

      <div className="filters">
        <h7 className="searchResults"><strong>Filter by Category:</strong></h7>
        <FilterQuery query={query} setQuery={setQuery} className="col-md-4" />
        <h7 className="filterResults"><strong>Sort by Price:</strong></h7>
        <SortQuery query={query} setQuery={setQuery} />
      </div>

      <div>
        <div className="main-layout">
          <Products products={products} /></div>
      </div>
      <nav aria-label="Page navigation">
        <ul class="pagination">
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item"><a className="page-link" href="#">4</a></li>
          <li className="page-item"><a className="page-link" href="#">5</a></li>
          <li className="page-item"><a className="page-link" href="#">6</a></li>
          <li className="page-item"><a className="page-link" href="#">7</a></li>
          <li className="page-item"><a className="page-link" href="#">8</a></li>
          <li className="page-item"><a className="page-link" href="#">9</a></li>
        </ul>
      </nav>
    </div >
  );
}

export default ProductsIndex;