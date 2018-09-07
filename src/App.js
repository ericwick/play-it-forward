import React, { Component } from "react";
import "./App.css";
import Nav from "./components/NavBar/Nav";
import route from "./routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Nav />
        </div>
        {route}
      </div>
    );
  }
}

export default App;
