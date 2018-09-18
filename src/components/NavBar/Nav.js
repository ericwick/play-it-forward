import React, { Component } from "react";
import "../Home/Home.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateUser } from "../../ducks/get_reducer";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      userNav: false
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.props.updateUser();
  }

  render() {
    return (
      <header>
        <nav class="navbar navbar-default navbar-fixed-top">
          <div class="navbar-header">
            <div class="container">
              <a class="navbar-brand" href="#">
                <h4>PiF</h4>
              </a>

              <button
                type="button"
                class="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar"
                aria-expanded="false"
                aria-controls="navbar"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar" />
                <span class="icon-bar" />
                <span class="icon-bar" />
              </button>
            </div>
          </div>

          <div id="navbar" class="navbar-collapse collapse navbar-right">
            <div className="container">
              {this.props.sportsInfo && this.props.sportsInfo.auth_id ? (
                <ul className="nav navbar-nav">
                  <Link to="/" className="link">
                    <li className="links">HOME</li>
                  </Link>
                  <Link to="/about" className="link">
                    <li className="links">ABOUT</li>
                  </Link>
                  <Link to="/donate" className="link">
                    <li className="links">DONATE</li>
                  </Link>
                  <Link to="/player" className="link">
                    <li className="links">PROFILE</li>
                  </Link>
                  <Link to="/team" className="link">
                    <li className="links">TEAM</li>
                  </Link>
                  <Link to="/league" className="link">
                    <li className="links">LEAGUE</li>
                  </Link>
                  <Link to="/logout" className="link">
                    <li className="links">LOGOUT</li>
                  </Link>
                </ul>
              ) : (
                <ul className="nav navbar-nav">
                  <Link to="/" className="link">
                    <li className="links">HOME</li>
                  </Link>
                  <Link to="/about" className="link">
                    <li className="links">ABOUT</li>
                  </Link>
                  <Link to="/donate" className="link">
                    <li className="links">DONATE</li>
                  </Link>
                  <Link to="/login" className="link">
                    <li className="links">LOGIN</li>
                  </Link>
                  <Link to="/registration" className="link">
                    <li className="links">REGISTER</li>
                  </Link>
                </ul>
              )}
            </div>
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
