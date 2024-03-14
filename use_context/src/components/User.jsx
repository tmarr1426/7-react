import "./User.css";
import UserDetails from "./UserDetails";

import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

const User = () => {
  const [,, theme] = useContext(ThemeContext);
  return <div className="user-container" style={theme}>
    <UserDetails />
  </div>;
};

export default User;
