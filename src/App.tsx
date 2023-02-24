import React, { useState } from "react";
import { ThemeContextProvider } from "./context/Theme";

import Navbar from "./pages/Navbar/index";

function App() {

  return (
    <ThemeContextProvider>
        <div className="app-container">
        <div className="navbar-container">
          <Navbar  />
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
