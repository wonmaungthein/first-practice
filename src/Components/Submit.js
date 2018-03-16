import React from "react";
import { Component } from "react";
import { Button } from "react-bootstrap";

export class Submit extends Component {
  render() {
    return (
      <div>
        <Button bsStyle="primary" bsSize="large" block>
          Submit
        </Button>
      </div>
    );
  }
}
