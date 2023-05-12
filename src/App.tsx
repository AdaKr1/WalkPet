import React from "react";

import Navbar from "./pages/Navbar";
import Homepage from "./pages/Homepage";
import Features from "./pages/Features";
import Weather from "./sharedComponents/Weather";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="app-container">
      <div className="navbar-container">
        <Navbar />
        <Homepage />
        <Features />
        <Testimonials />
        <Weather />
        <Contact />
      </div>
    </div>
  );
}

export default App;
