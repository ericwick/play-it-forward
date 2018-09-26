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
      <div id="footer">
        <div className="columns">
          <div className="pif">
            <h5>PLAY IT FORWARD</h5>
            <Link to="/" className="link">
              Home
            </Link>
            <br />
            <Link to="/about" className="link">
              About
            </Link>
            <br />
            <Link to="/donate" className="link">
              Donate
            </Link>
            <br />
            <Link to="/login" className="link">
              Login
            </Link>
            <br />
            <Link to="/registration" className="link">
              Register
            </Link>
          </div>
          <div className="account">
            <h5>YOUR ACCOUNT</h5>
            <Link to="/player" className="link">
              Profile
            </Link>
            <br />
            <Link to="/team" className="link">
              Team
            </Link>
            <br />
            <Link to="/league" className="link">
              League
            </Link>
            <br />
            <Link to="/" className="link">
              Help
            </Link>
            <br />
            <Link to="/" className="link">
              Settings
            </Link>
            <br />
            <Link to="/" className="link">
              Help
            </Link>
          </div>
          <div className="contact">
            <h5>CONTACT</h5>
            <Link to="/" className="link">
              Volunteer
            </Link>
            <br />
            <Link to="/" className="link">
              E-Mail
            </Link>
            <br />
            <Link to="/" className="link">
              Phone
            </Link>
            <br />
            <Link to="/" className="link">
              Address
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
