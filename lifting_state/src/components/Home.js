import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [myItemsOnDesk, setMyItemsOnDesk] = useState([
    { id: 1, name: "Coffee" },
    { id: 2, name: "Headphones" },
    { id: 3, name: "Phone" },
  ]);

  const [itemToAdd, setItemToAdd] = useState({ id: 0, name: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setMyItemsOnDesk((prev) => [itemToAdd, ...prev]);
    setItemToAdd({ id: 0, name: "" });
  };

  const handleDelete = (id) => {
    setMyItemsOnDesk((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <div className="col">
      <div className="home">
        <p className="emoji-lg">😎🥳</p>
        <h1>Welcome to the Home Page</h1>
        Home
        <form onSubmit={handleSubmit}>
          <input
            value={itemToAdd.name}
            required
            type="text"
            maxLength={15}
            placeholder="Enter an item's name"
            onChange={(e) => {
              setItemToAdd({
                id: uuidv4(),
                name: e.target.value,
              });
            }}
          />
          <button type="submit">Submit</button>
        </form>
        <ul>
          {myItemsOnDesk.map((i, idx) => {
            return (
              <li key={idx}>
                <p id="item-name">{i.name}</p>
                <p className="del" onClick={() => handleDelete(i.id)}>
                  ❌
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
