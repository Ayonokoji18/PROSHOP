import React from "react";
import axios from "axios";

const CheckoutButton = () => {
  const handleClick = async () => {
    const items = [
      {
        name: "Cool Product",
        price: 50,
        quantity: 1,
      },
    ];

    const res = await axios.post(
      "http://localhost:5000/api/payment/create-checkout-session",
      {
        items: items,
      }
    );

    window.location.href = res.data.url; // Redirect to Stripe Checkout
  };

  return <button onClick={handleClick}>Checkout</button>;
};

export default CheckoutButton;
