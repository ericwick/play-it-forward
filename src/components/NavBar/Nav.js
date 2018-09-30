import React, { Component } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateUser } from "../../ducks/get_reducer";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      userNav: "navheadercontainer",
      logo: false,
      logoImg:
        "https://clip2art.com/images/drawn-arrow-transparent-background-13.png"
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.fireOnScroll = this.fireOnScroll.bind(this);
  }

  componentDidMount() {
    this.props.updateUser();
    window.addEventListener("scroll", this.fireOnScroll, true);
  }

  fireOnScroll() {
    var winHeight = window.innerHeight;

    var body = document.body;
    var html = document.documentElement;
    var docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );

    var value = document.documentElement.scrollTop,
      max,
      percent;

    max = docHeight - winHeight;
    percent = (value / max) * 100;

    if (this.state.userNav === "navheadercontainer" && value > 140) {
      this.setState({
        userNav: "scrolled"
      });
    } else if (value <= 140) {
      this.setState({
        userNav: "navheadercontainer"
      });
    }
  }

  render() {
    return (
      <header className={this.state.userNav}>
        <nav className="navbar-entire-navbar">
          <div className="container">
            {this.props.sportsInfo && this.props.sportsInfo.auth_id ? (
              <div>
                {this.state.userNav === "scrolled" ? (
                  <img alt="" src={this.state.logoImg} className="piflogo" />
                ) : null}
                <ul className="unorderedNavList">
                  <Link to="/" className="navlink">
                    <li id="navigationlinks">HOME</li>
                  </Link>
                  <Link to="/about" className="navlink">
                    <li id="navigationlinks">ABOUT</li>
                  </Link>
                  <Link to="/donate" className="navlink">
                    <li id="navigationlinks">DONATE</li>
                  </Link>
                  <Link to="/player" className="navlink">
                    <li id="navigationlinks">PROFILE</li>
                  </Link>
                  <Link to="/team" className="navlink">
                    <li id="navigationlinks">TEAM</li>
                  </Link>
                  <Link to="/league" className="navlink">
                    <li id="navigationlinks">LEAGUE</li>
                  </Link>
                  <Link to="/logout" className="navlink">
                    <li id="navigationlinks">LOGOUT</li>
                  </Link>
                </ul>
              </div>
            ) : (
              <div>
                {this.state.userNav === "scrolled" ? (
                  <img alt="" src={this.state.logoImg} className="piflogo" />
                ) : null}
                <ul className="unorderedNavList">
                  <Link to="/" className="navlink">
                    <li id="navigationlinks">HOME</li>
                  </Link>
                  <Link to="/about" className="navlink">
                    <li id="navigationlinks">ABOUT</li>
                  </Link>
                  <Link to="/donate" className="navlink">
                    <li id="navigationlinks">DONATE</li>
                  </Link>
                  <a href={process.env.REACT_APP_LOGIN} className="navlink">
                    <li id="navigationlinks">LOGIN</li>
                  </a>
                  <Link to="/registration" className="navlink">
                    <li id="navigationlinks">REGISTER</li>
                  </Link>
                </ul>
              </div>
            )}
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => ({ ...state.getReducer });

export default connect(
  mapStateToProps,
  { updateUser }
)(Nav);
