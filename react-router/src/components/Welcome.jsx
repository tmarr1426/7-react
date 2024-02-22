import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <h1>Welcome</h1>

      <NavLink to="new-user">Enter</NavLink>

      <Routes>
        <Route path="new-user" element={<WelcomeUser />} />
      </Routes>

    </div>
  );
};

const WelcomeUser = () => {
  return <h1>Hey User!</h1>
}

export default Welcome;
