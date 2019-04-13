import React, { Component } from "react";
import "./App.css";

import DropArea from "./components/DropArea";

import { items } from "./components/Items";

class App extends Component {
  render() {
    return (
      <div className="App">
        <DropArea items={items} />
      </div>
    );
  }
}

export default App;
