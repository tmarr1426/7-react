import React from "react";

const Nav = (props) => {
  return (
    <nav>
      <p>Home</p>
      <p>Link</p>
      <p>Link</p>
      <p>Link</p>

{   props.loggedIn && 
    <div className="row nav-user">
        <h5 style={{margin: 0}}>{props.userName}</h5>
        <button onClick={() => {
            props.handleLogout();
            console.log("User has logged out")
        }}>LOGOUT</button>
      </div>
}
    </nav>
  );
};

export default Nav;
