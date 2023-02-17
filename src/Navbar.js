import React from "react";
import { Link } from "react-router-dom";

import './css/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-dark">
      <div className="logo navbar-brand left">
        <Link activeclassname="Active" className="btn btn1" to={"/"}>
          WalkPet
        </Link>
        </div>
        <div className="navbar-brand right">
        <Link activeclassname="Active" className="btn btn2" to={"/contact"}>
          Contact
        </Link>
        <Link activeclassname="Active" className="btn btn2" to={"/pricing"}>
          Pricing
        </Link>
        <Link activeclassname="Active" className="btn btn2" to={"/download"}>
          Download
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
