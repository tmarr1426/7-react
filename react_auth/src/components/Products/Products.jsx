import React from "react";
import { useState, useEffect } from "react";

const Products = () => {
  const [results, setResults] = useState([]);
  const [maxPrice, setMaxPrice] = useState("");
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(
          `http://localhost:8081/product?min=0&max=1000&tags=electronics`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("MyToken")}`
            }
          }
        );
        const json = await response.json();

        console.log(json);
      } catch (err) {
        console.log(err);
      }
    };

    getProducts();
  }, []);

  return <div>Products</div>;
};

export default Products;
