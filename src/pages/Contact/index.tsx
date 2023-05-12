import React from "react";
import { Form, FormGroup, Label, Input, Col, Button } from "reactstrap";

import "./index.css";

function Contact() {
  return (
    <div className="con">
      <Form className="email">
        <FormGroup row>
          <Label for="email" sm={1}>
            Email:
          </Label>
          <Col sm={10}>
            <Input
              id="email"
              name="email"
              placeholder="Your email here."
              type="email"
            />
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
}

export default Contact;
