import React, { Component } from "react";
import Nav from "../src/components/NavBar/Nav";
import Footer from "../src/components/Footer/Footer";
import "./App.css";
import route from "./routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        {route}
        <Footer />
      </div>
    );
  }
}

export default App;
