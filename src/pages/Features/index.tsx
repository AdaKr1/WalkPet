import React from "react";
import { Row, Col } from "reactstrap";

import "./index.css"

function Features() {
  return (
    <div className="container">
        <Row>
    <Col sm="4" xs="6">
      <div className="main" typeof="string">
        Easy to Use
      </div>
      <div className="secondary" typeof="string">
        So easy to use, even your pet could do it.
      </div>
      </Col>
      <Col sm="4" xs="6">
      <div className="main" typeof="string">
        Elite Clientele
      </div>
      <div className="secondary" typeof="string">
        We have all the pets you can imagine.
      </div>
      </Col>
      <Col sm="4" xs="6">
      <div className="main" typeof="string">
        Garanteed to Work
      </div>
      <div className="secondary" typeof="string">
        Find the best walk buddy or your money back.
      </div>
      </Col>
      </Row>
    </div>
  );
}

export default Features;
