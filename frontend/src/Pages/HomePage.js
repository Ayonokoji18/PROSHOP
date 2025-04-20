import React from "react";
import ProductCard from "../Components/ProductCard";
import { useProducts } from "../Hooks/useProducts.js";

function HomePage() {
  const products = useProducts();
  return (
    <div>
      <h1>Latest Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
