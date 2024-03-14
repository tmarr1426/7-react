import { useContext } from "react";

import { UserContext } from "../contexts/UserContext";
import { ThemeContext } from "../contexts/ThemeContext";
import "./Nav.css";

const Nav = () => {
  const [, setUserName] = useContext(UserContext);
  const [darkMode, setDarkMode, theme] = useContext(ThemeContext);

  return (
    <nav style={theme}>
      <p>Home</p>
      <p>About</p>
      <p>Auth</p>

      <input
        placeholder={"Enter a username"}
        onChange={(e) => setUserName(e.target.value)}
      />
      <label className="switch">
      <input type="checkbox"
      defaultChecked={darkMode}
      onChange={() => {
        setDarkMode((previousValue) => !previousValue)
      }}
      />
      <span className="slider round"></span>
      <p>{darkMode ? "Dark" : "Light"}</p>
      </label>
    </nav>
  );
};

export default Nav;
