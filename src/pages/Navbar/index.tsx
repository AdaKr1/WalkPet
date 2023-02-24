import React from "react";
import { NavbarBrand} from "reactstrap";
import { Link } from "react-router-dom";

import "./index.css";

const Navbar = () => {
  return (
    <div className="nav">
      <NavbarBrand className="logo navbar-brand left">
        <Link type="Active" className="btn btn1" to={"/"}>
          WalkPet
        </Link>
      </NavbarBrand>
      <NavbarBrand className="navbar-brand right">
        <Link type="Active" className="btn btn2" to={"/contact"}>
          Contact
        </Link>
        <Link type="Active" className="btn btn2" to={"/pricing"}>
          Pricing
        </Link>
        <Link type="Active" className="btn btn2" to={"/download"}>
          Download
        </Link>
      </NavbarBrand>
    </div>
  );
};

export default Navbar;
