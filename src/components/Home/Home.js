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
          {/* <img
            alt=""
            src="https://clip2art.com/images/drawn-arrow-transparent-background-13.png"
            className="homepagelogo"
          /> */}
          <Login />
          <Social />
        </div>
      </div>
    );
  }
}

export default Home;
