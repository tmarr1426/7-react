import { useState, useEffect } from "react";

import "./App.css";

import Signup from "./components/Signup";

//? App.js - The Root Component

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sessionToken, setSessionToken] = useState("");

  const handleChange = (state, value) => {
    switch (state) {
      case "first":
        setFirstName(value);
        break;
      case "last":
        setLastName(value);
        break;
      case "email":
        setLastName(value);
        break;
      case "password":
        setLastName(value);
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
          body: {
            first: firstName,
            last: lastName,
            email: email,
            password: password,
          },
        })
      ).json();
      console.log(response)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {!sessionToken ? (
        <Signup handleChange={handleChange} handleSignup={handleSignup} />
      ) : (
        <>
          <button>Logout</button>
          <p>[Products]</p>
        </>
      )}
    </>
  );
}

export default App;
