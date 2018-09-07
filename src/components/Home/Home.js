import React, { Component } from "react";
import "./Home.css";
import { HashRouter, Link } from "react-router-dom";
import AdultButton from "../AdultLeague/AdultButton";
import KidButton from "../KidLeague/KidButton";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <HashRouter>
        <div>
          {/* <Link to="/about"> */}
          <h1>PLAY IT FORWARD</h1>
          {/* </Link> */}

          <div className="buttons">
            <KidButton />
            <AdultButton />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Home;
