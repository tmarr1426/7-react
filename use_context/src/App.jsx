import "./App.css";
import Nav from "./components/Nav";
import User from "./components/User";

import UserProvider from "./contexts/UserContext";
import ThemeProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="app">
      <UserProvider>
        <ThemeProvider>
        <Nav />
        <User />
        </ThemeProvider>
      </UserProvider>
    </div>
  );
}

export default App;
