import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../NavBar/Nav";
import Footer from "../Footer/Footer";
// import Monetary from "../Donate/Monetary";
// import Physical from "../Donate/Physical";

class Donate extends Component {
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
        <h1>DONATE</h1>

        <Link to="/monetary">
          <button>Money Donation</button>
        </Link>

        <Link to="/physical">
          <button>Physical Donation</button>
        </Link>

        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Donate;
