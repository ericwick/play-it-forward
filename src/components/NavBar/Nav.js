import React from "react";
import "../Home/Home.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="icon">
          <img alt="" src="" />
        </div>
        <div className="linkscontainer">
          <ul className="navlinks">
            <Link to="/">
              <li className="links">HOME</li>
            </Link>
            <Link to="/about">
              <li className="links">ABOUT</li>
            </Link>
            <Link to="/donate">
              <li className="links">DONATE</li>
            </Link>
            <Link to="/login">
              <li className="links">LOGIN</li>
            </Link>
            <Link to="/register">
              <li className="links">REGISTER</li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
}
