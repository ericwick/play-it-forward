import React from "react";
import "./AdultButton.css";
import { HashRouter, Link } from "react-router-dom";

export default function AdultButton() {
  return (
    <HashRouter>
      <div className="buttondiv">
        <Link to="/adultregister">
          <button className="adultbutton">ADULT LEAGUES</button>
        </Link>
      </div>
    </HashRouter>
  );
}
