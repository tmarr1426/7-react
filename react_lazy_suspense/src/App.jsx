import "./App.css";

import { Auth, About, Home } from "./components";
import { Link, Routes, Route } from "react-router-dom";
import { Suspense } from "react";

const NavWrapper = ({ children }) => {
  return (
    <div className="border-2 space-x-4 rounded-lg min-w-96 centered mx-auto mb-8">
      {children}
    </div>
  );
};

const MySpinner = ({ text, color }) => {
  return (
    <div>
      <h2>{text}</h2>
      <svg className="animate-spin h-5 w-5 mx-auto my-4">
        <path
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          fill={color}
        ></path>
      </svg>
    </div>
  );
};

function App() {
  return (
    <>
      <NavWrapper>
        <Link to="/Home">Home</Link>
        <Link to="/About">About</Link>
        <Link to="Auth">Auth</Link>
      </NavWrapper>

      <Routes>
        <Route
          path="/Home"
          element={
            <Suspense
              fallback={<MySpinner text={"Loading Home..."} color="white" />}
            >
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/Auth"
          element={
            <Suspense
              fallback={<MySpinner text={"Loading Auth..."} color="white" />}
            >
              <Auth />
            </Suspense>
          }
        />
        <Route
          path="/About"
          element={
            <Suspense
              fallback={<MySpinner text={"Loading About..."} color="white" />}
            >
              <About />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
