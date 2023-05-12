import { setMaxListeners } from "events";
import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import "./index.css";
const dog = require("./dog.jpg");
const lady = require("./lady.jpg");
const lizard = require("./lizard.jpg");

function Testimonials() {
  return (
    <Carousel className="car">
      <Carousel.Item>
        <img className="img" src={dog.default} alt="Monty" />
        <Carousel.Caption>
          <h3>Monty</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="img" src={lady.default} alt="Amanda" />
        <Carousel.Caption>
          <h3>Amanda</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="img" src={lizard.default} alt="Slizo" />
        <Carousel.Caption>
          <h3>Slizo</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Testimonials;
