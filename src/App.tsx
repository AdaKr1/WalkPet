import React from "react";

import Navbar from "./pages/Navbar";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="app-container">
      <div className="navbar-container">
        <Navbar />
        <Homepage />
      </div>
    </div>
  );
}

export default App;
