import React, { Component } from "react";
import "./Home.css";
import Nav from "../NavBar/Nav";
import Footer from "../Footer/Footer";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="title">
          <h1>PLAY IT FORWARD</h1>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
