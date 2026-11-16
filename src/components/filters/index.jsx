
import { useState } from "react";
import "./filter.css";

const ProductFilter = ({ onFilter }) => {
  const [search, setSearch] = useState("");


  const clearFilters = () => {
    setSearch("");
  };

  const handleFilter = (data) => {
        setSearch(data);
        onFilter(data);
  }

  return (
    <div className="product-filter">

      <div className="filter-header">
        <div>
          <h2>Find Products</h2>
          <p>Search and filter your products</p>
        </div>

        <button className="clear-btn" onClick={clearFilters}>
          Clear Filters
        </button>
      </div>

      <div className="filter-controls">

        <div className="filter-group search-group">
          <label>Search</label>
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={e => handleFilter(e.target.value)}
          />
        </div>

      </div>



    </div>
  );
};

export default ProductFilter;
