import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Login from "./Login";
import Social from "./Social";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <div id="title">
          <h1>PLAY IT FORWARD</h1>
          <div className="playitforwardhomedescrip" />
          <Login />
          <Social />
        </div>
      </div>
    );
  }
}

export default Home;
