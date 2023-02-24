import React, { useEffect, useState } from "react";
import { Button, NavbarBrand} from "reactstrap";
import { Link } from "react-router-dom";

import "./index.css";
import { NavbarItem } from "./NavbartItem";
import { ThemeContext } from "../../context/Theme";

const Navbar: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const [counter2, setCounter2] = useState<number>(0);
  const themeContext = React.useContext(ThemeContext);

  useEffect(() => {
    console.log('Navbar is rendering and counter changed');
  }, []);

  useEffect(() => {
    console.log('Navbar is rendering and counter2 changed');
  }, [counter2]);

  return (
    <div className="nav">
      <NavbarBrand className="logo navbar-brand left">
        <Link type="Active" className="btn btn1" to={"/"}>
          WalkPet
        </Link>
        <Button onClick={() => setCounter(counter + 1)}>Increase</Button>
        <Button onClick={() => setCounter2(counter2 + 1)}>Increase 2</Button>
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
