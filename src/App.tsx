import React from "react";

import Navbar from "./pages/Navbar";
import Homepage from "./pages/Homepage";
import Features from "./pages/Features";

function App() {
  return (
    <div className="app-container">
      <div className="navbar-container">
        <Navbar />
        <Homepage />
        <Features />
      </div>
    </div>
  );
}

export default App;
