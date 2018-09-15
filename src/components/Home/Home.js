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
        <div className="title">
          <h1>PLAY IT FORWARD</h1>
        </div>
        <div className="moreinfo">
          <h2>Play It Forward is a charitable recreational sports organizer</h2>
          <p className="infoparagraph">
            We want to provide an opportunity for children to be involved and
            active in sports, regardless of their economic situation, and also
            give adults an enjoyable athletic outlet from their daily lives.
          </p>
          <br />
          <Link to="/about" className="link">
            <p className="learnmore">LEARN MORE</p>
          </Link>
        </div>
        <br />
        <div className="getstarted">
          <h2 className="started">GET STARTED!</h2>
          <Link to="/login" className="link">
            <button className="login">LOGIN</button>
          </Link>
          <Link to="/login" className="link">
            <button className="register">REGISTER</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
