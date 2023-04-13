import React from "react";

import Navbar from "./pages/Navbar";
import Homepage from "./pages/Homepage";
import Features from "./pages/Features";
import Weather from "./sharedComponents/Weather";
import Testimonials from "./pages/Testimonials";

function App() {
  return (
    <div className="app-container">
      <div className="navbar-container">
        <Navbar />
        <Homepage />
        <Features />
        <Testimonials />
        <Weather />
      </div>
    </div>
  );
}

export default App;
