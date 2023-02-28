import React from "react";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faB } from "@fortawesome/free-solid-svg-icons";

import "./index.css";

const Homepage = () => {
  return (
    <div className="home">
      <div className="text">
        <h1 typeof="string">Meet new and interesting pets nearby.</h1>
      </div>
      <div className="btn">
        <Button color="secondary" className="btn-d">
          {/* <FontAwesomeIcon icon={["faB", "fa-apple"]} /> */}
          Dowload
        </Button>
        <Button color="secondary" outline className="btn-l">
          {/* <FontAwesomeIcon icon={["faB", "google-play"]} /> */}
          Dowload
        </Button>
      </div>
      {/* <div className="img">
        <img ></img>
      </div> */}
    </div>
  );
};

export default Homepage;
