import React, { Component } from "react";
import Nav from "../NavBar/Nav";
import Footer from "../Footer/Footer";

class Monetary extends Component {
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
        <h1>DONATION</h1>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Monetary;
