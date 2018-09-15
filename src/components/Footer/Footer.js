import React, { Component } from "react";
import "../Footer/Footer.css";
import { Link } from "react-router-dom";

class Footer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="footer">
        <div className="pif">
          <h5>PLAY IT FORWARD</h5>
          <Link to="/">Home</Link>
          <br />
          <Link to="/about">About</Link>
          <br />
          <Link to="/donate">Donate</Link>
          <br />
          <Link to="/login">Login</Link>
          <br />
          <Link to="/registration">Register</Link>
        </div>
        <div className="account">
          <h5>YOUR ACCOUNT</h5>
          <Link to="/player">Profile</Link>
          <br />
          <Link to="/team">Team</Link>
          <br />
          <Link to="/league">League</Link>
          <br />
          <Link to="/">Help</Link>
          <br />
          <Link to="/">Settings</Link>
          <br />
          <Link to="/">Help</Link>
        </div>
        <div className="contact">
          <h5>CONTACT</h5>
          <Link to="/">Volunteer</Link>
          <br />
          <Link to="/">E-Mail</Link>
          <br />
          <Link to="/">Phone</Link>
          <br />
          <Link to="/">Address</Link>
        </div>
      </div>
    );
  }
}

export default Footer;
