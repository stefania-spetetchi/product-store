import { useState } from 'react';
import { useDispatch } from 'react-redux';

const SearchQuery = ({ fetchProducts }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState();
  const handleSearchClick = () => {
    dispatch(fetchProducts(value));
  }

  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      handleSearchClick();
    }
  };

  return (
    <div className="col text-center">
      <div className="text-xs search ">
        <input
          value={value}
          onKeyDown={handleEnterPress}
          onChange={event => {
            setValue(event.target.value)
          }}
          type="text center" id="search-query" className="text-center input-group input-group-sm col-sm-12" placeholder="Type in query"></input>
        <br />
        <button
          onClick={handleSearchClick}
          className="btn btn-outline search mb-4 mt-4 btn-sm"
        >Search</button>
      </div>
    </div>
  )
};

export default SearchQuery;