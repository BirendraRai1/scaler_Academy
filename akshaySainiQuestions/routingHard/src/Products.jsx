import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        //const response = await fetch("https://dummyjson.com/products");
        const response = await fetch("https://dummyjson.com/products?limit=200")
        if (!response.ok) {
          throw new Error("failed to fetch products");
        }
        const data = await response.json();
        console.log("data is", data);
        setProducts(data.products);
        console.log("products are ",products)
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error:{error}</p>;

  return (
    <div className="products">
      <h2>Product List</h2>
      <div className="product-list">
        { 
        products.length &&
          products.map((product) => {
            console.log("item is", product);
            return (
              <div key={product.id} className="product-card">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="product-image"
                />
                <div className="product-info">
                  <h4>{product.title}</h4>
                  <p>{product.description.slice(0, 100)}...</p>
                  <Link
                    to={`/products/${product.id}`}
                    className="view-more"
                    id={`product-${product.id}`}
                  >
                    View More
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Products;
