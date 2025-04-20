import axios from "axios";

const API_URL = "http://127.0.0.1:5000/api/product";

async function getProducts() {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (err) {
    console.log("Product is not loading");
    return [];
  }
}

async function getProductById(id) {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (err) {
    console.log("Product not found");
    return null;
  }
}

export { getProducts, getProductById };
