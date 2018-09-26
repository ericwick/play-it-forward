import React, { Component } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateUser } from "../../ducks/get_reducer";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      userNav: "navheadercontainer"
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
              <ul className="unorderedNavList">
                <Link to="/" className="navlink">
                  <li className="navigationlinks">HOME</li>
                </Link>
                <Link to="/about" className="navlink">
                  <li className="navigationlinks">ABOUT</li>
                </Link>
                <Link to="/donate" className="navlink">
                  <li className="navigationlinks">DONATE</li>
                </Link>
                <Link to="/player" className="navlink">
                  <li className="navigationlinks">PROFILE</li>
                </Link>
                <Link to="/team" className="navlink">
                  <li className="navigationlinks">TEAM</li>
                </Link>
                <Link to="/league" className="navlink">
                  <li className="navigationlinks">LEAGUE</li>
                </Link>
                <Link to="/logout" className="navlink">
                  <li className="navigationlinks">LOGOUT</li>
                </Link>
              </ul>
            ) : (
              <ul className="unorderedNavList">
                <Link to="/" className="navlink">
                  <li className="navigationlinks">HOME</li>
                </Link>
                <Link to="/about" className="navlink">
                  <li className="navigationlinks">ABOUT</li>
                </Link>
                <Link to="/donate" className="navlink">
                  <li className="navigationlinks">DONATE</li>
                </Link>
                <Link to="/login" className="navlink">
                  <li className="navigationlinks">LOGIN</li>
                </Link>
                <Link to="/registration" className="navlink">
                  <li className="navigationlinks">REGISTER</li>
                </Link>
              </ul>
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
