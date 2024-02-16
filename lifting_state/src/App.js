import "./App.css";

import React, { useState } from "react";

import Form from "./components/Form";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  // STATE
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogout = () => {
    setLoggedIn(false);
    setUserName("");
    setPassword("");
  }

  return (
    <div className="App">
      {/* <button onClick={() => setLoggedIn(!loggedIn)}>Toggle</button> This creates a button that shows what happens when a user is logged in (Shows HOME) vs not logged in (Shows login input fields)*/}
      <Nav 
        loggedIn={loggedIn}
        userName={userName}
        handleLogout={handleLogout}
      />
      {!loggedIn ? (
        <Form
          userName={userName}
          setUserName={setUserName}
          password={password}
          setPassword={setPassword}
          setLoggedIn={setLoggedIn}
        />
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
