import React, { Component } from "react";
import Nav from "../NavBar/Nav";
import Footer from "../Footer/Footer";

class About extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>
          <Nav />
        </div>
        <h1>ABOUT</h1>

        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default About;
