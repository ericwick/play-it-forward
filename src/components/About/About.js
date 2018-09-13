import React, { Component } from "react";
import Nav from "../NavBar/Nav";

class About extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Nav />
        <h1>ABOUT</h1>
      </div>
    );
  }
}

export default About;
