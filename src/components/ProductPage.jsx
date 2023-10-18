// ProductPage.jsx

import React from "react";
import { useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Product 1",
    category: "Category A",
    price: 10.99,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 2,
    name: "Product 2",
    category: "Category A",
    price: 19.99,
    description:
      "Nulla facilisi. Vestibulum lobortis metus a felis pellentesque ornare."
  }
  // Add more products with different categories and descriptions
];

function ProductPage() {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <div>
        <h1>Product not found</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductPage;
