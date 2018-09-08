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
              <li>HOME</li>
            </Link>
            <Link to="/about">
              <li>ABOUT</li>
            </Link>
            <Link to="/donate">
              <li>DONATE</li>
            </Link>
            <Link to="/login">
              <li>LOGIN</li>
            </Link>
            <Link to="/register">
              <li>REGISTER</li>
            </Link>
            <button className="toggle-button">&#9776;</button>
          </ul>
        </div>
      </nav>
    </header>
  );
}
