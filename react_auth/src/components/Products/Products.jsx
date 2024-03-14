import React from "react";
import { useState, useEffect } from "react";

import Product from "../Product/Product";

const Products = () => {
  const [results, setResults] = useState([]);
  const [maxPrice, setMaxPrice] = useState(799);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(
          `http://localhost:8081/product?min=0&${maxPrice}&tags=${tags}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("MyToken")}`,
            },
          }
        );
        const json = await response.json();

        console.log(json.Results);
        setResults(json.Results);
      } catch (err) {
        console.log(err);
      }
    };

    getProducts();
  }, [maxPrice, tags]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch(
  //       `http://localhost:8081/product?min=0&max=${maxPrice}&tags=electronics`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("MyToken")}`,
  //         },
  //       }
  //     );
  //     const json = await response.json();
  //     setResults(json.Results);
  //     console.log(maxPrice, tags);
  //   } catch (err) {
  //     console.log("Error fetching products:", err);
  //   }
  // };

  const handleTag = (e) => {
    let tagName = e.target.name;
    if (tags.includes(tagName)) {
      setTags((previousTags) => previousTags.filter((i) => i !== tagName));
    } else {
      setTags((previousTags) => [...previousTags, tagName]);
    }
  };

  return (
    <div>
      <input type="number" onChange={(e) => setMaxPrice(e.target.value)} />
      <h1>Products</h1>
      {tags.toString()}
      <div>
        <input
          type="checkbox"
          id="electronics"
          name="electronics"
          value="electronics"
          onChange={handleTag}
        />
        <label htmlFor="electronics">Electronics</label>
        <input
          type="checkbox"
          id="fruit"
          name="fruit"
          value="fruit"
          onChange={handleTag}
        />
        <label htmlFor="fruit">Fruit</label>
        <input
          type="checkbox"
          id="snack"
          name="snack"
          value="snack"
          onChange={handleTag}
        />
        <label htmlFor="snack">Snack</label>
      </div>
      {results.map((obj) => (
        <Product key={obj._id} product={obj} />
      ))}
    </div>
  );
};

export default Products;
