import React from "react";
import { Component } from "react";
import RadioButton from "./RadioButton";
import { ColorPickerComponent } from "./ColorPickerComponent";
import { Message } from "./Message";

export class Main extends Component {
  render() {
    return (
      <div>
        <h3>Name</h3>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder="Type your Name" />
        <h3>Gender</h3>
        <label htmlFor="Gender" />
        <RadioButton />
        <h3>Favorite Color</h3>
        <ColorPickerComponent />
        <h3>Message</h3>
        <Message />
      </div>
    );
  }
}
