import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

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
        </div>
        <div className="belowthetitlescreen">
          <div className="getstarted">
            <h2 className="started">GET STARTED!</h2>
            <Link to="/login" className="homelink">
              <button className="loginhomebutton">LOGIN</button>
            </Link>
            <Link to="/login" className="homelink">
              <button className="registerhomebutton">REGISTER</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
