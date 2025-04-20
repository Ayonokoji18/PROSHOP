import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product-container">
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "200px", height: "auto" }}
      />

      <h2> {product.name}</h2>
      <h2> ${product.price}</h2>
      <Link to={`/product/${product._id}`}>view Details</Link>
    </div>
  );
}
export default ProductCard;
