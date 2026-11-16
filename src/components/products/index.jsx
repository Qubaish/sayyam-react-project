
import { useEffect, useState } from "react";
import ProductFilter from '../filters';
import "./product.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products"
        );

        // if (!response.ok) {
        //   throw new Error("Failed to fetch products");
        // }

        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const onFilter = (value) => {
    const searchText = value.trim();

  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(searchText);
  });

  setProducts(filteredProducts);
  }

  if (loading) return <p className="status">Loading products...</p>;

  if (error) return <p className="error">{error}</p>;

  return (
    <>
    <ProductFilter onFilter={onFilter}/>
    <div className="product-container">
      <div className="product-header">
        <div>
          <h1>Our Products</h1>
          <p>Discover our latest collection</p>
        </div>
        <span>{products.length} Products</span>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image">
              <img
                src={product.thumbnail}
                alt={product.title}
              />

              <span className="discount">
                {Math.round(product.discountPercentage)}% OFF
              </span>
            </div>

            <div className="product-info">
              <span className="category">
                {product.category}
              </span>

              <h3>{product.title}</h3>

              <p className="description">
                {product.description}
              </p>

              <div className="rating">
                ⭐ {product.rating} / 5
              </div>

              <div className="price-section">
                <strong>
                  ${(
                    product.price *
                    (1 - product.discountPercentage / 100)
                  ).toFixed(2)}
                </strong>

                <del>${product.price.toFixed(2)}</del>
              </div>

              <button className="add-to-cart">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ProductList;
