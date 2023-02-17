import React from "react";
import { BrowserRoute as Router, Route, Routes } from "react-router-dom";

import "./css/App.css";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="app-container">
      <div className="navbar-container">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
