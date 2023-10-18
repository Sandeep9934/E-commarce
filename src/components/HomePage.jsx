// HomePage.jsx

import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Product 1",
    category: "Category A",
    price: 10.99
  },
  {
    id: 2,
    name: "Product 2",
    category: "Category A",
    price: 19.99
  }
  // Add more products with different categories
];

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
