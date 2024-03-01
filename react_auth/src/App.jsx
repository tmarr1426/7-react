import { useState, useEffect } from "react";

import "./App.css";
import Product from "./components/Products/Products"
import Posts from "./components/Products/Posts"

import Signup from "./components/Signup";

//? App.js - The Root Component

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sessionToken, setSessionToken] = useState("");
  const [showProducts, setShowProducts] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("MyToken")) {
      setSessionToken(localStorage.getItem("MyToken"));
    }
  }, []);

  const handleChange = (state, value) => {
    switch (state) {
      case "first":
        setFirstName(value);
        break;
      case "last":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        console.log("Something went wrong");
    }
  };

  const handleSignup = async () => {
    try {
      const response = await (
        await fetch("http://localhost:8081/user/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first: firstName,
            last: lastName,
            email: email,
            password: password,
          }),
        })
      ).json();

      updateToken(response.Token);
    } catch (err) {
      console.log(err);
    }
  };

  const updateToken = (token) => {
    console.log("Token Updated");
    localStorage.setItem("MyToken", token);
    setSessionToken(token);
  };

  const clearToken = () => {
    console.log("Token Cleared");
    localStorage.removeItem("MyToken");
    setSessionToken("");
  };

  return (
    <>
      {!sessionToken ? (
        <Signup handleChange={handleChange} handleSignup={handleSignup} />
      ) : (
        <>
          <button onClick={clearToken}>Logout</button>
          <button style={{margin: "1em"}} onClick={() => setShowProducts((prev) => !prev)}>{showProducts ? "Show Posts" : "Show Products"}</button>
          {showProducts ? <Product /> : <Posts />}
        </>
      )}
    </>
  );
}

export default App;
