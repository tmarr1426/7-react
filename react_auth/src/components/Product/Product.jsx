import React from "react";

// REACT CHALLENGE
// ------------------------------------------
// Store the results from the fetch in state
// Map over the results, and return a child component called Product
// This component will take an obj from the results as a prop.
// Within the Product component, display the product emoji, name, price, and tags
//? BONUS*
// Setup an input field for max price, set state accordingly.
// Setup 3 checkbox input fields, one for electronics, one for fruit, and one for snack
//    - Using the state variables store the results from each input field when checked/unchecked into the 'tags' state variable.
//    - The values which are stored in state, should be used in the fetch URL as dynamic query params

const Product = ({ product }) => {
  console.log(product);
  return (
    <div className="card">
      <h1 className="card-product-emoji">{product.emoji}</h1>
      <h3 className="card-product-name">{product.name}</h3>
      <p className="card-product-price">{product.price}</p>
      {products.tags.map(i => (
        <li className="card-product-tag">{i.toUpperCase()}</li>
      ))}
    </div>
  );
};

export default Product;
