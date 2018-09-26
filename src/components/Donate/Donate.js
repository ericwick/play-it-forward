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
      <div className="donatepage">
        <h1 className="donation" id="homedonate">
          DONATE
        </h1>

        <br />

        <Link to="/monetary">
          <button className="money">Help Fund the Youth Leagues</button>
        </Link>

        <Link to="/physical">
          <button className="physical">
            Help provide the Youth Leagues with necessary equipment
          </button>
        </Link>
      </div>
    );
  }
}

export default Donate;
