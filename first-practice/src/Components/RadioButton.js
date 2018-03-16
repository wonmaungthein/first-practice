import React from "react";
import { Component } from "react";

class RadioButton extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <form>
                <div className="radio">
                  <label>
                    <input type="radio" value="Male" />
                    Male{" "}
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input type="radio" value="Female" />
                    Female{" "}
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RadioButton;
