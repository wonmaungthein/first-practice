import React, { Component } from "react";
import "./App.css";
import { Main } from "./Components/Main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">DEAR FRIENDS</h1>
        </header>
        <p className="App-intro">
          <Main />
        </p>
      </div>
    );
  }
}

export default App;
