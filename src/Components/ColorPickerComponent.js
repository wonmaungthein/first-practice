// import { render } from "react-dom";
import React from "react";
import ColorPicker from "react-color-picker";
import { Component } from "react";
import "react-color-picker/index.css";

export class ColorPickerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red"
    };
  }

  onDrag(color, c) {
    this.setState({
      color
    });
  }

  // render() {
  //   return (
  //     <div>
  //       <ColorPicker value={this.state.color} onDrag={this.onDrag.bind(this)} />
  //       <div
  //         style={{
  //           background: this.state.color,
  //           width: 100,
  //           height: 50,
  //           color: "white"
  //         }}
  //       >
  //         {this.state.color}
  //       </div>
  //     </div>
  //   );
  // }

  render() {
    return (
      <div>
        <ColorPicker defaultValue="yellow" width={100} />
      </div>
    );
  }
}
