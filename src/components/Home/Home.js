import React, { Component } from "react";
import "./Home.css";
import AdultButton from "../AdultLeague/AdultButton";
import KidButton from "../KidLeague/KidButton";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>PLAY IT FORWARD</h1>

        <div className="buttons">
          <KidButton />
          <AdultButton />
        </div>
      </div>
    );
  }
}

export default Home;
