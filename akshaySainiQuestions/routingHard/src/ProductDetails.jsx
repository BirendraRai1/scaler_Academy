import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchProduct = async () => {
        console.log("productId is",productId)
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${productId}`
        );
        if (!response.ok) throw new Error(`Failed to fetch product details`);
        const data = await response.json();
        console.log("data inside ProductDetails is ",data)
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct()
  }, [productId]);
  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error:{error}</p>;

  return (
    <div className="product-details">
      {product ? (
        <div className="product-info">
          <h3>{product.title}</h3>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="product-image"
          />
          <p>{product.description}</p>
          <p>
            <strong>Price:</strong>${product.price}
          </p>
          <Link to="/products" className="back-to-products">
            Back to Products
          </Link>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductDetails;
