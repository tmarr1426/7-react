import React from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  let location = useLocation();
  console.log(location);
  let backgroundColor = "rebeccapurple";

  return (
    <div
      style={{
        display: "flex",
        gap: "1em",
      }}
    >
      <Link to="/welcome">
        <button style={{
          background: location.pathname.includes("/welcome") && backgroundColor
        }}>Welcome
        </button>
      </Link>
      <Link to="/about">
        <button style={{
          background: location.pathname.includes("/about") && backgroundColor
        }}>About</button>
      </Link>
      <Link to="/news">
        <button style={{
          background: location.pathname.includes("/news") && backgroundColor
        }}>News</button>
      </Link>
    </div>
  );
};

export default Nav;
