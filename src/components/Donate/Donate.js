import React, { Component } from "react";
import "../Donate/Donate.css";
import { Link } from "react-router-dom";

class Donate extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="donate">
        <h1 className="donation" id="homedonate">
          DONATE
        </h1>

        <br />

        <Link to="/monetary">
          <button className="money">Money Donation</button>
        </Link>

        <Link to="/physical">
          <button className="physical">Physical Donation</button>
        </Link>
      </div>
    );
  }
}

export default Donate;
