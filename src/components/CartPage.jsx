// CartPage.jsx

import React, { useState } from "react";

function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  if (cartItems.length === 0) {
    return (
      <div>
        <h1>Your Cart</h1>
        <p>Your cart is currently empty.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Your Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>Quantity: {item.quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartPage;
