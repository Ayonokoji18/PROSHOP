import { useState, useEffect } from "react";
import { getProducts } from "../Services/productService.js";

export function useProducts() {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const data = await getProducts();
      setProducts(data);
    }

    fetchProducts();
  }, []);

  return Products;
}
