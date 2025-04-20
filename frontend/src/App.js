import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage.js";
import CustomNavbar from "./Components/Navbar";
import ProductPage from "./Pages/ProductPage";
import Footer from "./Components/Footer.js";
import SuccessPage from "./Pages/SuccessPage.js";
import CancelPage from "./Pages/CancelPage.js";
import CheckoutPage from "./Pages/CheckoutPage.js";

function App() {
  return (
    <>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/cancel" element={<CancelPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
