import React, { Component } from "react";
// import "../Footer/Footer.css";
import { Link } from "react-router-dom";

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      logo:
        "https://clip2art.com/images/drawn-arrow-transparent-background-13.png"
    };
  }

  render() {
    return (
      <div id="footer">
        {/* <img
          alt=""
          src={this.state.logo}
          className="footerlogo"
          id="leftlogo"
        /> */}
        <div className="columns">
          <div className="pif">
            <h5>PLAY IT FORWARD</h5>
            <Link to="/" className="footerlink">
              Home
            </Link>
            <br />
            <Link to="/about" className="footerlink">
              About
            </Link>
            <br />
            <Link to="/donate" className="footerlink">
              Donate
            </Link>
            <br />
            <Link to="/login" className="footerlink">
              Login
            </Link>
            <br />
            <Link to="/registration" className="footerlink">
              Register
            </Link>
          </div>
          <div className="account">
            <h5>YOUR ACCOUNT</h5>
            <Link to="/player" className="footerlink">
              Profile
            </Link>
            <br />
            <Link to="/team" className="footerlink">
              Team
            </Link>
            <br />
            <Link to="/league" className="link">
              League
            </Link>
            <br />
            <Link to="/" className="footerlink">
              Help
            </Link>
            <br />
            <Link to="/" className="footerlink">
              Settings
            </Link>
            <br />
            <Link to="/" className="footerlink">
              Help
            </Link>
          </div>
          <div className="contact">
            <h5>CONTACT</h5>
            <Link to="/" className="footerlink">
              Volunteer
            </Link>
            <br />
            <Link to="/" className="footerlink">
              E-Mail
            </Link>
            <br />
            <Link to="/" className="footerlink">
              Phone
            </Link>
            <br />
            <Link to="/" className="footerlink">
              Address
            </Link>
          </div>
        </div>
        {/* <img
          alt=""
          src={this.state.logo}
          className="footerlogo"
          id="rightlogo"
        /> */}
      </div>
    );
  }
}

export default Footer;
