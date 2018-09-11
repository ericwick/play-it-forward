import React from "react";
import "./KidButton.css";
import { HashRouter, Link } from "react-router-dom";

export default function KidButton() {
  return (
    <HashRouter>
      <div className="buttondiv">
        <Link to="/login">
          <button className="kidbutton">KIDS' LEAGUES</button>
        </Link>
      </div>
    </HashRouter>
  );
}
