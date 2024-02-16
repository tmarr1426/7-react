import React from "react";

const Form = (props) => {
  console.log(props);
  return (
    <form
      className="auth-form col"
      onSubmit={(e) => {
        e.preventDefault();

        //? Do a fetch here

        props.setLoggedIn(true);
      }}
    >
      <label htmlFor="username">UserName</label>
      <input
      value={props.userName}
        id="username"
        required
        placeholder="Enter Username"
        onChange={(e) => props.setUserName(e.target.value)}
      />

      <label htmlFor="password">Password</label>
      <input
      value={props.password}
        id="password"
        type="password"
        required
        placeholder="Enter Password"
        onChange={(e) => props.setPassword(e.target.value)}
      />
      <button id="auth-form-btn" type="submit">
        SIGNUP
      </button>
    </form>
  );
};

export default Form;
